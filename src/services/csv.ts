// Minimal, dependency-free CSV helpers. Replaces the `xlsx` package, which
// carried a high-severity advisory (prototype pollution + ReDoS). CSV is
// opened natively by Excel / Google Sheets / Numbers.

// Guard against CSV / formula injection: a cell starting with = + - @ (or a
// control char) can execute as a formula when the file is opened in a
// spreadsheet. Neutralise it by prefixing a single quote.
function sanitizeCell(value: unknown): string {
  let s = value == null ? '' : String(value);
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  const needsQuotes = /[",\n\r]/.test(s);
  s = s.replace(/"/g, '""');
  return needsQuotes ? `"${s}"` : s;
}

// rows: array of arrays of cells -> CSV text (CRLF line endings).
export function rowsToCsv(rows: unknown[][]): string {
  return rows.map((row) => row.map(sanitizeCell).join(',')).join('\r\n');
}

// objects: array of plain objects. Columns are taken from `columns` or the
// keys of the first object. A header row is included.
export function objectsToCsv(
  objects: Record<string, unknown>[],
  columns?: string[],
): string {
  if (!objects || objects.length === 0) return '';
  const cols = columns || Object.keys(objects[0]);
  const body = objects.map((o) => cols.map((c) => o[c]));
  return rowsToCsv([cols, ...body]);
}

// Trigger a client-side download. A BOM is prepended so Excel detects UTF-8.
export function downloadCsv(filename: string, csvText: string): void {
  const blob = new Blob(['﻿' + csvText], {
    type: 'text/csv;charset=utf-8;',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Parse CSV text into an array of rows (array of string cells). Handles quoted
// fields, escaped quotes, and commas/newlines inside quotes. Accepts ',' or
// ';' as the delimiter (Excel often uses ';' in some locales).
export function parseCsv(text: string): string[][] {
  const firstBreak = text.indexOf('\n');
  const firstLine = firstBreak === -1 ? text : text.slice(0, firstBreak);
  const delimiter =
    firstLine.split(';').length > firstLine.split(',').length ? ';' : ',';

  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === delimiter) {
      row.push(cell);
      cell = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(cell);
      cell = '';
      rows.push(row);
      row = [];
    } else {
      cell += ch;
    }
  }
  if (cell !== '' || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => c.trim() !== ''));
}

import { useState, useRef, useCallback, useEffect } from 'react';
import type { CourseStatus, ScormUnifiedStatus } from '../types';

const STORAGE_PREFIX = 'stepup_scorm_';

interface LangState {
  progress: number;
  status: string;
  lastAccessed?: string;
}

interface ScormApi {
  _data: Record<string, string>;
  LMSInitialize: () => string;
  LMSFinish: () => string;
  LMSGetValue: (key: string) => string;
  LMSSetValue: (key: string, value: string) => string;
  LMSCommit: () => string;
  LMSGetLastError: () => string;
  LMSGetErrorString: () => string;
  LMSGetDiagnostic: () => string;
}

function loadLangState(courseId: string, lang: string): LangState | null {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${courseId}_${lang}`);
    return raw ? (JSON.parse(raw) as LangState) : null;
  } catch {
    return null;
  }
}

function getUnifiedStatus(
  courseId: string,
  languages: string[],
): ScormUnifiedStatus {
  let bestProgress = 0;
  let isCompleted = false;
  let isInProgress = false;

  for (const lang of languages) {
    const state = loadLangState(courseId, lang);
    if (!state) continue;
    if (state.progress > bestProgress) bestProgress = state.progress;
    if (state.status === 'completed' || state.status === 'passed') isCompleted = true;
    if (state.status === 'incomplete' || state.status === 'browsed') isInProgress = true;
  }

  const status: CourseStatus | 'not attempted' = isCompleted
    ? 'completed'
    : isInProgress
      ? 'in_progress'
      : 'not attempted';
  return { progress: bestProgress, status };
}

export function useScorm(courseId: string, lang: string = 'en') {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('not attempted');
  const [unifiedStatus, setUnifiedStatus] = useState<ScormUnifiedStatus>({
    progress: 0,
    status: 'not attempted',
  });
  const [initialized, setInitialized] = useState(false);
  const apiRef = useRef<ScormApi | null>(null);
  const progressRef = useRef(0);
  const statusRef = useRef('not attempted');

  const availableLanguages = ['en', 'fr'];

  useEffect(() => {
    const saved = loadLangState(courseId, lang);
    if (saved) {
      setProgress(saved.progress || 0);
      progressRef.current = saved.progress || 0;
      setStatus(saved.status || 'not attempted');
      statusRef.current = saved.status || 'not attempted';
    } else {
      setProgress(0);
      progressRef.current = 0;
      setStatus('not attempted');
      statusRef.current = 'not attempted';
    }
    setUnifiedStatus(getUnifiedStatus(courseId, availableLanguages));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, lang]);

  const saveState = useCallback(
    (prog: number, stat: string) => {
      localStorage.setItem(
        `${STORAGE_PREFIX}${courseId}_${lang}`,
        JSON.stringify({
          progress: prog,
          status: stat,
          lastAccessed: new Date().toISOString(),
        }),
      );
      setUnifiedStatus(getUnifiedStatus(courseId, availableLanguages));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [courseId, lang],
  );

  const initializeApi = useCallback(
    (iframeWindow: Window & { API?: ScormApi }) => {
      const api: ScormApi = {
        _data: {},
        LMSInitialize: () => {
          setInitialized(true);
          return 'true';
        },
        LMSFinish: () => 'true',
        LMSGetValue: (key) => api._data[key] || '',
        LMSSetValue: (key, value) => {
          api._data[key] = value;

          if (key === 'cmi.core.lesson_status') {
            statusRef.current = value;
            setStatus(value);
            saveState(progressRef.current, value);
          }
          if (key === 'cmi.core.score.raw') {
            const prog = parseInt(value, 10);
            if (!isNaN(prog)) {
              progressRef.current = prog;
              setProgress(prog);
              saveState(prog, statusRef.current);
            }
          }
          if (key === 'cmi.suspend_data') {
            saveState(progressRef.current, statusRef.current);
          }

          return 'true';
        },
        LMSCommit: () => {
          saveState(progressRef.current, statusRef.current);
          return 'true';
        },
        LMSGetLastError: () => '0',
        LMSGetErrorString: () => '',
        LMSGetDiagnostic: () => '',
      };

      try {
        iframeWindow.API = api;
      } catch {
        // Cross-origin
      }

      apiRef.current = api;
      return api;
    },
    [saveState],
  );

  const terminate = useCallback(() => {
    saveState(progressRef.current, statusRef.current);
    setInitialized(false);
    apiRef.current = null;
  }, [saveState]);

  return {
    progress,
    status,
    unifiedStatus,
    initialized,
    initializeApi,
    terminate,
  };
}

export { getUnifiedStatus };

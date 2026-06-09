import { useState, useRef, useCallback, useEffect } from 'react';

const STORAGE_PREFIX = 'stepup_scorm_';

function loadLangState(courseId, lang) {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${courseId}_${lang}`);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function getUnifiedStatus(courseId, languages) {
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

  const status = isCompleted ? 'completed' : isInProgress ? 'in_progress' : 'not attempted';
  return { progress: bestProgress, status };
}

export function useScorm(courseId, lang = 'en') {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('not attempted');
  const [unifiedStatus, setUnifiedStatus] = useState({ progress: 0, status: 'not attempted' });
  const [initialized, setInitialized] = useState(false);
  const apiRef = useRef(null);
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
  }, [courseId, lang]);

  const saveState = useCallback((prog, stat) => {
    localStorage.setItem(`${STORAGE_PREFIX}${courseId}_${lang}`, JSON.stringify({
      progress: prog,
      status: stat,
      lastAccessed: new Date().toISOString(),
    }));
    setUnifiedStatus(getUnifiedStatus(courseId, availableLanguages));
  }, [courseId, lang]);

  const initializeApi = useCallback((iframeWindow) => {
    const api = {
      _data: {},
      LMSInitialize: () => { setInitialized(true); return 'true'; },
      LMSFinish: () => { return 'true'; },
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
      LMSCommit: () => { saveState(progressRef.current, statusRef.current); return 'true'; },
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
  }, [courseId, lang, saveState]);

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

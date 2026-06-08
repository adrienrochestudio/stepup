import { useState, useRef, useCallback, useEffect } from 'react';

const STORAGE_PREFIX = 'stepup_scorm_';

export function useScorm(courseId) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('not attempted');
  const [initialized, setInitialized] = useState(false);
  const apiRef = useRef(null);

  // Load saved state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}${courseId}`);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setProgress(data.progress || 0);
        setStatus(data.status || 'not attempted');
      } catch { /* ignore */ }
    }
  }, [courseId]);

  const saveState = useCallback((prog, stat) => {
    localStorage.setItem(`${STORAGE_PREFIX}${courseId}`, JSON.stringify({
      progress: prog,
      status: stat,
      lastAccessed: new Date().toISOString(),
    }));
  }, [courseId]);

  const initializeApi = useCallback((iframeWindow) => {
    // Create a SCORM 1.2 API object that the SCORM content can find
    const api = {
      _data: {},
      LMSInitialize: () => { setInitialized(true); return 'true'; },
      LMSFinish: () => { return 'true'; },
      LMSGetValue: (key) => api._data[key] || '',
      LMSSetValue: (key, value) => {
        api._data[key] = value;

        if (key === 'cmi.core.lesson_status') {
          setStatus(value);
          saveState(progress, value);
        }
        if (key === 'cmi.core.score.raw') {
          const prog = parseInt(value, 10);
          if (!isNaN(prog)) {
            setProgress(prog);
            saveState(prog, status);
          }
        }
        if (key === 'cmi.suspend_data') {
          saveState(progress, status);
        }

        return 'true';
      },
      LMSCommit: () => { saveState(progress, status); return 'true'; },
      LMSGetLastError: () => '0',
      LMSGetErrorString: () => '',
      LMSGetDiagnostic: () => '',
    };

    // Inject API into iframe window for SCORM 1.2
    try {
      iframeWindow.API = api;
    } catch {
      // Cross-origin — can't inject
    }

    apiRef.current = api;
    return api;
  }, [courseId, progress, status, saveState]);

  const terminate = useCallback(() => {
    saveState(progress, status);
    setInitialized(false);
    apiRef.current = null;
  }, [progress, status, saveState]);

  return {
    progress,
    status,
    initialized,
    initializeApi,
    terminate,
  };
}

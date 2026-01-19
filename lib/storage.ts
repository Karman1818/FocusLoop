export interface Loop {
  id: string;
  task: string;
  duration: number; // in seconds
  summary: string;
  date: string; // ISO string
}

const HISTORY_KEY = 'focusloop-history';
const CURRENT_LOOP_KEY = 'focusloop-current';

export const getLoops = (): Loop[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(HISTORY_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveLoop = (loop: Loop) => {
  const loops = getLoops();
  const newLoops = [loop, ...loops];
  localStorage.setItem(HISTORY_KEY, JSON.stringify(newLoops));
};

export interface CurrentLoopState {
  task: string;
  startTime: number;
}

export const startLoop = (task: string) => {
  const state: CurrentLoopState = {
    task,
    startTime: Date.now(),
  };
  localStorage.setItem(CURRENT_LOOP_KEY, JSON.stringify(state));
};

export const getCurrentLoop = (): CurrentLoopState | null => {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(CURRENT_LOOP_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const clearCurrentLoop = () => {
  localStorage.removeItem(CURRENT_LOOP_KEY);
};

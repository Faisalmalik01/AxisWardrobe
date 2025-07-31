import { useState } from "react";
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });
  const set = val => {
    setValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  };
  return [value, set];
}

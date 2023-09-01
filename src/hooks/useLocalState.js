import { useState, useEffect } from "react";

const useLocalState = (keyName, initialValue) => {
  const [state, setState] = useState(initialValue);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem(keyName);
    try {
      setState(data ? JSON.parse(data) : initialValue);
      if (!data) localStorage.setItem(keyName, JSON.stringify(initialValue));
    } catch {
      setState(initialValue);
      localStorage.setItem(keyName, JSON.stringify(initialValue));
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(keyName, JSON.stringify(state));
    }
  }, [state]);

  return [state, setState];
};

export default useLocalState;

import { useEffect, useState } from 'react';

const defaultDelay = 500;

function useDebounce<T>(value: T, delay: number = defaultDelay): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(t);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

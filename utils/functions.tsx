import { useCallback, useDebugValue, useEffect, useState, useRef } from "react";
import { HighlightSpanKind } from "../node_modules/typescript/lib/typescript";

export const functionCalculator = ({ num1, type, num2 }) => {
  switch (type) {
    case "+":
      return +num1 + +num2;
    case "-":
      return +num1 - +num2;
    case "*":
      return +num1 * +num2;
    case "/":
      return +num1 / +num2;
    default:
      return "typeerror";
  }
};

export const fucntionFibonacci = (n: number) => {
  if (n < 0) return "error!";
  if (n > 32) return "too high";
  if (n <= 1) {
    return n;
  }
  return fucntionFibonacci(n - 1) + fucntionFibonacci(n - 2);
};

export const useDebounce = (func, wait) => {
  const [id, setId] = useState(null);
  useEffect(() => {
    return () => {
      clearTimeout(id);
    };
  }, [id]);
  return (...args) => {
    if (id) {
      clearTimeout(id);
    }
    setId(
      setTimeout(() => {
        setId(null);
        func(...args);
      }, wait)
    );
  };
};

export const useThrottle = (func, wait) => {
  const [id, setId] = useState(null);
  const [previous, setPrevious] = useState(Date.now());
  const remaining = useRef(wait);
  let now = previous;
  let diff = 0;
  useEffect(() => {
    return () => {
      clearTimeout(id);
      now = Date.now();
      diff = wait - (now - previous);
      remaining.current = diff < wait && diff > 0 ? diff : 0;
    };
  }, [id, previous]);
  return (...args) => {
    if (remaining.current <= 0) {
      func(...args);
      setPrevious(Date.now());
    } else {
      setId(
        setTimeout(() => {
          func(...args);
        }, remaining.current)
      );
    }
  };
};
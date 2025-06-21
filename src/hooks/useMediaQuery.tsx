import { useSyncExternalStore, useCallback, useMemo } from "react";

const DEBOUNCE_DELAY = 200;

export default function useMediaQuery(query: string): boolean {
  // Create a memoized media query list
  const mediaQuery = useMemo(() => {
    return window.matchMedia(query);
  }, [query]);

  // Subscribe function that returns cleanup
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      let timeoutId: number;

      const debouncedCallback = () => {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(onStoreChange, DEBOUNCE_DELAY);
      };

      mediaQuery.addEventListener("change", debouncedCallback);

      return () => {
        clearTimeout(timeoutId);
        mediaQuery.removeEventListener("change", debouncedCallback);
      };
    },
    [mediaQuery]
  );

  // Snapshot function to get current value
  const getSnapshot = useCallback(() => {
    return mediaQuery.matches;
  }, [mediaQuery]);

  // Get server snapshot (SSR support)
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

import { useDebouncedCallback } from 'use-debounce';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

/**
 * Custom hook to update query parameters in the URL with debounce.
 *
 * @param delay - The debounce delay in milliseconds (default is 300ms)
 * @returns A debounced function to update query parameters in the URL
 */
const useUpdateQueryParamsWithDebounce = (delay = 300) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * Debounced function to update the query parameters in the URL.
   *
   * @param newParams - An object representing the new query parameters to be updated in the URL
   * @param newParams.key - The key for the query parameter
   * @param newParams.value - The value for the query parameter, can be a string, number, or array
   *        If value is null or undefined, the parameter will be removed.
   */
  const updateQueryParams = useDebouncedCallback(
    (
      newParams: Record<string, string | number | (string | number)[] | null>
    ) => {
      const params = new URLSearchParams(searchParams as any);
      Object.entries(newParams).forEach(([key, value]) => {
        if (!!!value) {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      });
      router.replace(`${pathname}?${params.toString()}`);
    },
    delay
  );

  return updateQueryParams;
};

export default useUpdateQueryParamsWithDebounce;

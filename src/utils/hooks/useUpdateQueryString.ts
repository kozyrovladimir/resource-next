import { useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const useUpdateQueryString = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryString = useCallback(
    (name: string, value: string) => {
      if (value === 'reset') {
        const params = new URLSearchParams(searchParams?.toString());
        params.delete(name);
        router.push(pathname + '?' + params.toString());
        return;
      }

      const params = new URLSearchParams(searchParams?.toString());
      params.set(name, value);
      router.push(pathname + '?' + params.toString());
    },
    [searchParams]
  );

  return updateQueryString;
};

export { useUpdateQueryString };

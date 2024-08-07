import {useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';

const useFilteredParams = () => {
  const searchParams = useSearchParams();

  type Filters = {
    filters: {
      phase: null | string,
      season: null | string,
      element: null | string,
      organ: null | string,
      dantian: null | string,
    },
    search: null | string,
  }

  const [filters, setFilters] = useState<Filters>({
    filters: {
      phase: null,
      season: null,
      element: null,
      organ: null,
      dantian: null,
    },
    search: null,
  });

  useEffect(() => {

    setFilters({
      filters: {
        phase: searchParams?.get('phase') || null,
        season: searchParams?.get('season') || null,
        element: searchParams?.get('element') || null,
        organ: searchParams?.get('organ') || null,
        dantian: searchParams?.get('dantian') || null,
      },
      search: searchParams?.get('search') || null,
    });
  }, [searchParams]);

  return filters;
};

export default useFilteredParams;
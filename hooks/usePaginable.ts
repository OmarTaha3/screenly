import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import useUpdateQueryParamsWithDebounce from './useUpdateQueryParamsWithDebounce';

const usePaginable = () => {
  const s = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(s.get('page')) ? Number(s.get('page')) : 1
  );
  const updateQueryParams = useUpdateQueryParamsWithDebounce();
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateQueryParams({ page });
  };
  return {
    currentPage,
    handlePageChange,
  };
};

export default usePaginable;

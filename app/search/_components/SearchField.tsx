'use client';

import Input from '@/components/ui/Input';
import useUpdateQueryParamsWithDebounce from '@/hooks/useUpdateQueryParamsWithDebounce';
import { useParams, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const SearchField = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [searchValue, setSearchValue] = useState<string>(query ?? '');
  const updateQueryParams = useUpdateQueryParamsWithDebounce();
  const handleChange = (s: string) => {
    setSearchValue(s);
    updateQueryParams({
      query: s,
    });
  };
  return (
    <section className="container py-20 md:px-8 lg:px-16 xl:px-32">
      <Input
        type="text"
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </section>
  );
};

export default SearchField;

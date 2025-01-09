'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  return <section>{query}</section>;
};

export default SearchResults;

import { Suspense } from 'react';
import SearchField from './_components/SearchField';
import SearchResults from './_components/SearchResults';
import { getSearchedMovies } from '@/actions/searchMovies';
import Pagination from '@/components/shared/Pagination';

interface SearchPageProps {
  searchParams: Promise<{ query?: string; page?: string }>;
}
const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { query: searchedQuery, page: searchedPage } = await searchParams;
  const page = parseInt(searchedPage || '1', 10);
  const { data } = await getSearchedMovies(searchedQuery || '', page);
  return (
    <main>
      <Suspense>
        <SearchField />
      </Suspense>
      <SearchResults movies={data.results} />
      <Suspense>
        {data?.total_pages > 1 && <Pagination totalPages={data?.total_pages} />}
      </Suspense>
    </main>
  );
};

export default SearchPage;

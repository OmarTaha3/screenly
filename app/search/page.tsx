import { Suspense } from 'react';
import SearchField from './_components/SearchField';
import SearchResults from './_components/SearchResults';

const SearchPage = () => {
  return (
    <main>
      <Suspense>
        <SearchField />
        <SearchResults />
      </Suspense>
    </main>
  );
};

export default SearchPage;

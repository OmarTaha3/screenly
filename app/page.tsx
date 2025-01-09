import Banner from '@/app/_components/Banner';
import TopMovies from './_components/TopMovies';
import { getAllMovies } from '@/actions/allMovies';
import Pagination from '@/components/shared/Pagination';
import { Suspense } from 'react';

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { page: searchedPage } = await searchParams;
  const page = parseInt(searchedPage || '1', 10);
  const { data } = await getAllMovies(page);
  return (
    <main className="min-h-screen">
      <Banner movie={data.results[0]} />
      <TopMovies movies={data.results} />
      <Suspense>
        <Pagination totalPages={data?.total_pages} />
      </Suspense>
    </main>
  );
}

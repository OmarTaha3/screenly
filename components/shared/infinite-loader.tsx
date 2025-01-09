import { useElementOnScreen } from '@/hooks/useElementOnScreen';
import React from 'react';

interface Props extends React.PropsWithChildren {
  hasMore: boolean | undefined;
  loadMore: () => void;
  loading?: boolean;
  LoadingComponent?: React.ReactNode;
}

export const InfiniteLoader = ({
  hasMore,
  loadMore,
  loading = false,
  LoadingComponent,
  children,
}: Props) => {
  const targetRef = useElementOnScreen({
    enabled: !!hasMore,
    onScreen: () => {
      loadMore();
    },
    rootMargin: '30px',
    threshold: 0.2,
  });

  return (
    <>
      {children}
      {loading && <>{LoadingComponent}</>}
      <span
        aria-label="bottom"
        ref={targetRef}
        style={{ visibility: 'hidden' }}
      />
    </>
  );
};

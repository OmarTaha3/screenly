'use client';
import usePaginable from '@/hooks/usePaginable';
import ArrowLeft from '@/public/icons/ArrowLeft';
import ArrowRight from '@/public/icons/ArrowRight';
import cn from '@/utils/classNames';

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const { currentPage, handlePageChange: onPageChange } = usePaginable();
  const generatePages = () => {
    const pages: (number | string)[] = [];
    const maxVisibleButtons = 5;
    if (totalPages <= maxVisibleButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(1, '...');
        pages.push(currentPage, currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      } else {
        pages.push(1, '...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      }
    }
    return pages;
  };

  const pages = generatePages();

  return (
    <div
      className={cn(
        'relative z-10 mb-10 flex items-center justify-center space-x-2 py-2',
        totalPages < 2 && 'hidden'
      )}
    >
      <button
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-foreground',
          { 'cursor-not-allowed opacity-50': currentPage === 1 }
        )}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowLeft />
      </button>
      {pages.map((page, index) => (
        <button
          key={index}
          className={cn(
            'flex h-8 min-w-[32px] shrink-0 items-center justify-center truncate rounded-full border p-1 text-sm',
            {
              'bg-primary text-white': currentPage === page,
            }
          )}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={typeof page !== 'number'}
        >
          {page}
        </button>
      ))}
      <button
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-foreground',
          {
            'cursor-not-allowed opacity-50': currentPage === totalPages,
          }
        )}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;

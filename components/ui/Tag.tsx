import cn from '@/utils/classNames';

interface TagProps {
  tagName: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Tag = ({ tagName, className, variant = 'primary' }: TagProps) => {
  return (
    <div
      className={cn(
        'bg-secondary text-sm text-white',
        variant === 'primary'
          ? 'rounded-full px-3 py-1.5'
          : 'rounded px-2 py-1',
        className
      )}
    >
      {tagName}
    </div>
  );
};

export default Tag;

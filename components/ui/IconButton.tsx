import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import cn from '@/utils/classNames';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  className?: string;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className,
  ariaLabel,
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-full bg-black/30 p-2 transition active:translate-y-0.5',
        className
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;

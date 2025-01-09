import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function to combine and merge Tailwind CSS class names conditionally.
 *
 * This function utilizes `clsx` for conditional class management and `twMerge` for merging Tailwind CSS classes.
 * It ensures that only the latest, valid class names are included by resolving conflicts between duplicate classes.
 *
 * @param inputs - A list of class names, either as strings, arrays, or objects.
 *                 This can include conditional classes, like those that depend on a boolean value.
 * @returns A single string containing the merged and resolved class names.
 *
 * Usage example:
 * const classNames = cn('bg-blue-500', isActive && 'text-white', 'p-4');
 * Will return: 'bg-blue-500 text-white p-4' if isActive is true, or 'bg-blue-500 p-4' if isActive is false
 */

export default function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

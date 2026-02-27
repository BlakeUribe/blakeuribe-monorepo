import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges Tailwind classes and handles conditional logic.
 * This is what makes Shadcn components so flexible.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
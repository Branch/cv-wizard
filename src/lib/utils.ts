import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function dateRangeToString(from: Date, to: Date) {
    return `${new Date(from).toLocaleString('sv-SE', {
        month: 'long',
    })} ${new Date(from).getFullYear()} - ${new Date(to).toLocaleString(
        'sv-SE',
        {
            month: 'long',
        }
    )} ${new Date(to).getFullYear()}`
}

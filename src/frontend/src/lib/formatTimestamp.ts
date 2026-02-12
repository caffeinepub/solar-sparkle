import type { Time } from '../backend';

export function formatTimestamp(timestamp: Time): string {
  try {
    // Convert nanoseconds to milliseconds
    const milliseconds = Number(timestamp) / 1_000_000;
    const date = new Date(milliseconds);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }

    // Format: "Feb 11, 2026, 3:45 PM"
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  } catch (error) {
    return 'Invalid date';
  }
}

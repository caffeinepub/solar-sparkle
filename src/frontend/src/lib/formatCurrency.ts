/**
 * Currency formatting utilities for INR (Indian Rupees)
 */

/**
 * Formats a number as INR currency with proper thousands/lakh separators
 * @param amount - The amount to format
 * @param options - Optional formatting options
 * @returns Formatted currency string (e.g., "₹2,75,000")
 */
export function formatINR(
  amount: number,
  options?: {
    showDecimals?: boolean;
    compact?: boolean;
  }
): string {
  const { showDecimals = false, compact = false } = options || {};
  
  // For compact format (e.g., "₹2.75L" for lakhs, "₹2.75Cr" for crores)
  if (compact) {
    if (amount >= 10000000) {
      // Crores (1 Cr = 10,000,000)
      return `₹${(amount / 10000000).toFixed(2)}Cr`;
    } else if (amount >= 100000) {
      // Lakhs (1 L = 100,000)
      return `₹${(amount / 100000).toFixed(2)}L`;
    }
  }
  
  // Standard format with Indian number system
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  });
  
  return formatter.format(amount);
}

/**
 * Formats a number with Indian number system separators (no currency symbol)
 * @param value - The number to format
 * @returns Formatted number string (e.g., "2,75,000")
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-IN').format(value);
}

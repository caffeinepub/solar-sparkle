/**
 * Branding constants for Solar Sparkle logo assets.
 * All logo paths reference static generated assets under /assets/generated.
 */

export const LOGO_PATHS = {
  // Main logo mark (emblem only) - transparent PNG, 512x512
  mark: '/assets/generated/solar-sparkle-logo-mark-transparent.dim_512x512.png',
  
  // Horizontal lockup (emblem + wordmark) - transparent PNG, 1200x300
  lockupHorizontal: '/assets/generated/solar-sparkle-logo-lockup-horizontal-transparent.dim_1200x300.png',
  
  // Small logo mark v2 (refined for UI) - transparent PNG, 200x200
  markSmall: '/assets/generated/solar-sparkle-logo-transparent-v2.dim_200x200.png',
  
  // Favicon - transparent PNG, 64x64
  favicon: '/assets/generated/favicon-solar-sparkle.dim_64x64.png',
} as const;

export const BRAND_NAME = 'Solar Sparkle';
export const BRAND_TAGLINE = 'Leading the way in sustainable solar energy solutions for a brighter, cleaner future.';

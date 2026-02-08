# Specification

## Summary
**Goal:** Ensure consistent scroll-to-top behavior across all routes and update the footer Contact details.

**Planned changes:**
- Implement global scroll-to-top on every in-app route navigation (including Header/Footer links) so new pages always start at (0,0).
- Disable scroll position restoration on browser refresh/reload so pages load at the top even if previously scrolled.
- Replace the Footer Contact section placeholders with the provided Head Office, phone, hours, and email (English labels; mobile-responsive formatting).

**User-visible outcome:** Navigating anywhere in the site (or reloading a page) always starts at the top, and the footer shows the correct Solar Sparkle contact information.

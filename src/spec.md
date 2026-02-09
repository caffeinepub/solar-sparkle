# Specification

## Summary
**Goal:** Upgrade the Solar Sparkle logo (cleaner, higher-contrast, transparent) and apply it consistently across the site (header, footer, favicon).

**Planned changes:**
- Create upgraded logo image assets based on the provided references, preserving the solar + panel concept with cleaner geometry, consistent stroke widths, sharper edges, improved contrast, and transparent background.
- Add the upgraded logo assets as static files under `frontend/public/assets/generated` and reference them via `/assets/generated/...` paths.
- Update `frontend/src/components/Header.tsx` and `frontend/src/components/Footer.tsx` to use the new logo asset path(s), replacing the current header and footer logo sources.
- Add a favicon derived from the upgraded logo and reference it from `frontend/index.html`.

**User-visible outcome:** The site displays the new, crisp Solar Sparkle branding in the header, footer, and browser tab favicon without any layout issues across mobile and desktop.

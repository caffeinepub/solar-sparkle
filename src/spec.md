# Specification

## Summary
**Goal:** Remove the caffeine.ai hyperlink from the site footer copyright line.

**Planned changes:**
- Update `frontend/src/components/Footer.tsx` to remove the anchor element linking to `https://caffeine.ai` from the copyright line.
- Ensure no `https://caffeine.ai` string remains in `frontend/src/components/Footer.tsx` while keeping the rest of the footer intact.

**User-visible outcome:** The footer no longer shows any clickable link to caffeine.ai, and the remaining footer content/layout continues to display normally.

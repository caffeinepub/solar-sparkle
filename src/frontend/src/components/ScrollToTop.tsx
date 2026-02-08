import { useEffect } from 'react';
import { useRouter } from '@tanstack/react-router';

export function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll to top on initial mount (handles page refresh)
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Listen to route changes and scroll to top
    const unsubscribe = router.subscribe('onLoad', () => {
      window.scrollTo(0, 0);
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  return null;
}

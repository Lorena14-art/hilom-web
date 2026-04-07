import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This ensures that whenever the URL changes (e.g., going to /wardrobe),
    // the window snaps back to the top of the page.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

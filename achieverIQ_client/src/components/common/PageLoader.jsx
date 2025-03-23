import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const PageLoader = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    const timeout = setTimeout(() => NProgress.done(), 300); // simulate delay
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return null;
};

export default PageLoader;

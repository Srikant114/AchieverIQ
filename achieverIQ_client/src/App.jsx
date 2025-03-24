import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AnimatePresence } from 'framer-motion';
import PageLoader from './components/common/PageLoader';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import { Toaster } from 'react-hot-toast';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
     <Toaster />
      <PageLoader />
      <AnimatePresence mode="wait">
        <AppRoutes key={location.pathname} />
      </AnimatePresence>
      <ScrollToTopButton />
    </>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

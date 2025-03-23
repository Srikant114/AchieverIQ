import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    visible && (
      <button
        onClick={scrollTop}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-white text-black shadow-lg hover:scale-110 transition z-50"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-5 h-5" />
      </button>
    )
  );
};

export default ScrollToTopButton;

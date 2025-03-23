import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  LineChart,
  GraduationCap,
  X,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

const programs = [
  {
    title: 'Foundation Batch',
    subtitle: 'Classes VI–VIII',
    details: ['Strong basics', 'Weekly tests', 'Personal mentoring'],
    icon: <BookOpen className="w-9 h-9 text-blue-600 hover:animate-bounce" />,
    badge: 'Popular',
  },
  {
    title: 'Pre Nurture',
    subtitle: 'Classes IX and X',
    details: ['Board exam focus', 'Monthly assessments', 'Doubt clearing sessions'],
    icon: <LineChart className="w-9 h-9 text-green-600 hover:animate-pulse" />,
    badge: 'New',
  },
  {
    title: 'Nurture',
    subtitle: 'Class XI',
    details: ['Advanced concepts', 'Weekly assessments', 'Targeted prep'],
    icon: <GraduationCap className="w-9 h-9 text-purple-600 hover:animate-bounce" />,
    badge: '',
  },
  {
    title: 'Enthuse',
    subtitle: 'Class XII',
    details: ['Exam-focused revision', 'Full syllabus tests', 'Career guidance'],
    icon: <GraduationCap className="w-9 h-9 text-pink-600 hover:animate-bounce" />,
    badge: 'Updated',
  },
];

const OurPrograms = () => {
  const [modalData, setModalData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCount = isMobile ? 1 : 3;
  const maxIndex = programs.length - visibleCount;

  const handleArrow = (dir) => {
    setCurrentIndex((prev) =>
      dir === 'left' ? Math.max(0, prev - 1) : Math.min(maxIndex, prev + 1)
    );
  };

  const visiblePrograms = programs.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-20 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Our Programs
        </motion.h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Tailored programs from Class VI to XII to empower learners at every stage of their journey.
        </p>
      </div>

      {/* Cards */}
      <div className="flex justify-center gap-6 md:gap-8 transition-all duration-500">
        {visiblePrograms.map((program, i) => (
          <div
            key={i}
            onClick={() => setModalData(program)}
            className="bg-white border shadow rounded-xl p-6 w-full max-w-sm cursor-pointer hover:shadow-md transition-transform duration-300"
          >
            {program.badge && (
              <span className="absolute top-3 right-3 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                {program.badge}
              </span>
            )}
            <div className="mb-4">{program.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{program.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{program.subtitle}</p>
            <ul className="text-sm text-gray-700 space-y-1">
              {program.details.map((point, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => handleArrow('left')}
          disabled={currentIndex === 0}
          className={`bg-white border shadow p-2 rounded-full hover:bg-blue-100 ${
            currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''
          }`}
        >
          <ArrowLeft className="w-5 h-5 text-blue-600" />
        </button>
        <button
          onClick={() => handleArrow('right')}
          disabled={currentIndex >= maxIndex}
          className={`bg-white border shadow p-2 rounded-full hover:bg-blue-100 ${
            currentIndex >= maxIndex ? 'opacity-40 cursor-not-allowed' : ''
          }`}
        >
          <ArrowRight className="w-5 h-5 text-blue-600" />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setModalData(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white max-w-md w-full rounded-xl p-6 relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalData(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="mb-4">{modalData.icon}</div>
              <h3 className="text-xl font-bold mb-1">{modalData.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{modalData.subtitle}</p>
              <ul className="text-sm space-y-1 text-gray-700 mb-5">
                {modalData.details.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium">
                Enroll Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurPrograms;

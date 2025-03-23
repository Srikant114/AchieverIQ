import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import HeroImgOne from '../../assets/hereSection1.png';
import HeroImgTwo from '../../assets/heroSection2.png';
import HeroImgThree from '../../assets/heroSection3.png';

const images = [HeroImgOne, HeroImgTwo, HeroImgThree];

const rotatingWords = ['Dream', 'Goal', 'Journey'];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section className="relative mt-10 md:mt-0 overflow-hidden grid md:grid-cols-2 gap-6 px-6 lg:px-20 py-16 min-h-[95vh] items-center bg-gray-50">
      {/* Floating Background Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-100 rounded-full blur-3xl top-[-80px] left-[-80px] opacity-40 z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-yellow-100 rounded-full blur-2xl bottom-[-60px] right-[-60px] opacity-40 z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 z-10"
      >
        <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium w-fit">
          🎓 Admissions Open for 2024-25 Academic Year
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight break-words max-w-full">
          Conquer Your{' '}
          <motion.span
            key={rotatingWords[wordIndex]}
            className="text-primary inline-block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {rotatingWords[wordIndex]}
          </motion.span>{' '}
          With AchieverIQ
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-full">
          Empowering students to achieve academic excellence through personalized learning journeys.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-md shadow transition flex items-center gap-2">
          Apply Now <span className="text-xl">→</span>
        </button>
      </motion.div>

      {/* RIGHT IMAGES */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Desktop: Show all 3 cascading */}
        <div className="hidden md:flex justify-center items-center gap-6 w-full max-w-6xl mx-auto min-h-[420px] px-4">
          {images.map((src, i) => {
            const baseClass = 'object-cover rounded-xl shadow-lg';
            const motionProps = {
              animate: { y: [0, i % 2 === 0 ? 10 : -10, 0] },
              transition: { repeat: Infinity, duration: 4 + i, ease: 'easeInOut' },
            };
            const sizes = ['w-48 h-64', 'w-64 h-80', 'w-48 h-64'];
            return (
              <Tilt
                key={i}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={i === 1 ? 1.05 : 1}
                className={`${sizes[i]} relative`}
              >
                <motion.img
                  src={src}
                  alt={`Hero Image ${i + 1}`}
                  className={`${baseClass} w-full h-full`}
                  {...motionProps}
                />
              </Tilt>
            );
          })}
        </div>

        {/* Mobile: 1 image slider */}
        <div className="md:hidden relative w-full max-w-md mx-auto h-60 overflow-hidden rounded-xl">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === mobileIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: i === mobileIndex ? 1 : 0 }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  draggable={false}
                />
              </Tilt>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

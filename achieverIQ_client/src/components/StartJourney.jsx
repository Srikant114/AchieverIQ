import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const StartJourney = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white px-6 py-24 sm:py-28 text-center">
      {/* Decorative Glow Circles */}
      <div className="absolute top-[-80px] left-[-80px] w-80 h-80 bg-blue-400 opacity-30 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-indigo-400 opacity-30 blur-2xl rounded-full z-0 animate-ping" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-base sm:text-lg mb-8">
          Join thousands of successful students who achieved their dreams with us.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-md transition group"
        >
          <Sparkles className="w-5 h-5 text-blue-500 transition group-hover:rotate-12" />
          Schedule a Free Demo Class

          {/* Animated underline */}
          <span className="absolute left-1/2 bottom-1 -translate-x-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-2/3" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default StartJourney;

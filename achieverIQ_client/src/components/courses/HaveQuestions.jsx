import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const HaveQuestions = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6 sm:px-10 lg:px-20 text-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* 🔵 Glowing Background Blobs */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-blue-400 opacity-30 blur-3xl rounded-full z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-64 h-64 bg-purple-400 opacity-30 blur-2xl rounded-full z-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Have Questions?
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-8">
          Get in touch with our academic counselors for personalized guidance.
        </p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg flex items-center gap-2 mx-auto"
        >
          <MessageCircle className="w-5 h-5" />
          Schedule a Free Consultation
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HaveQuestions;

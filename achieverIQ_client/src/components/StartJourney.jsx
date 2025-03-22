import { motion } from 'framer-motion';

const StartJourney = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-200 p-6 sm:p-8 text-center"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
      <p className="text-gray-700 mb-6">Join AchieverIQ and take the first step towards academic excellence</p>
      <button className="bg-black text-white px-6 py-2 rounded hover:bg-primary hover:text-black transition">
        Enroll Now →
      </button>
    </motion.section>
  );
};

export default StartJourney;

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-6 px-6 py-12 items-center bg-white">
      {/* LEFT TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Conquer Your Dream With <span className="text-primary">AchieverIQ</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Empowering students to achieve academic excellence through personalized learning journeys.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm w-fit">
            🎓 Admissions Open for 2024-25 Academic Year
          </span>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-primary hover:text-black transition">
            Apply Now →
          </button>
        </div>
      </motion.div>

      {/* RIGHT IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Students Learning"
          className="w-full max-w-md rounded-xl shadow-lg object-cover"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

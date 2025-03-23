import React from 'react';
import { motion } from 'framer-motion';
import StudentResultMain from '../components/result/StudentResultMain'; // Adjust path as needed
import StudentResultData from '../components/result/StudentResultdata';

const Results = () => {
  return (
    <section className="bg-gray-50 min-h-[90vh] pt-20 pb-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-4"
      >
        Student Result Portal
      </motion.h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Easily search your academic results using your unique roll number. This portal is designed to provide quick and accurate result access for our enrolled students.
      </p>

      <StudentResultMain />

       {/* Show this when user submits (for now it's static) */}
       <StudentResultData />
    </section>
  );
};

export default Results;

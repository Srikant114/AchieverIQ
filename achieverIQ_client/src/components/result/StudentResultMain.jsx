import { useState } from 'react';
import { motion } from 'framer-motion';

const StudentResultMain = () => {
  const [rollNumber, setRollNumber] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (rollNumber.trim()) {
      alert(`Searching result for Roll No: ${rollNumber}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white max-w-md mx-auto rounded-xl shadow-lg p-8"
    >
      <form onSubmit={handleSearch} className="space-y-6">
        <div>
          <label htmlFor="roll" className="block text-sm font-medium text-gray-700 mb-1">
            Enter Roll Number
          </label>
          <input
            type="text"
            id="roll"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="e.g., 2024A12345"
            className="w-full border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <p className="text-xs text-gray-500">
          Please double-check your roll number before submitting.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow hover:bg-blue-700 transition"
        >
          Search Result
        </motion.button>
      </form>
    </motion.div>
  );
};

export default StudentResultMain;

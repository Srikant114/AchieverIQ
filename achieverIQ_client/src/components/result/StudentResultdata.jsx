import { motion } from 'framer-motion';

const dummyData = {
  name: 'Rohit Kumar',
  rollNumber: '2024001',
  session: '2023-24',
  subjects: [
    { name: 'Physics', score: '92/100' },
    { name: 'Chemistry', score: '88/100' },
    { name: 'Mathematics', score: '95/100' },
  ],
  percentage: '91.67%',
  rank: 5,
};

const StudentResultData = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto bg-white rounded-xl shadow-md mt-10 p-6 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between text-sm text-gray-500 font-semibold">
        <span>Student Details</span>
        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
          {dummyData.session}
        </span>
      </div>

      {/* Info */}
      <div className="flex justify-between border-b pb-4">
        <div>
          <p className="text-xs text-gray-500">Student Name</p>
          <p className="font-semibold">{dummyData.name}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Roll Number</p>
          <p className="font-semibold">{dummyData.rollNumber}</p>
        </div>
      </div>

      {/* Subjects */}
      <div>
        <h4 className="font-semibold text-sm mb-2">Subject Wise Performance</h4>
        <div className="space-y-2">
          {dummyData.subjects.map((subject, i) => (
            <div key={i} className="flex justify-between text-sm text-gray-700">
              <span className="text-gray-600">{subject.name}</span>
              <span>{subject.score}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Overall Stats */}
      <div className="pt-4 space-y-2">
        <div className="flex justify-between font-semibold text-sm">
          <span>Overall Percentage</span>
          <span className="text-blue-600">{dummyData.percentage}</span>
        </div>
        <div className="flex justify-between font-semibold text-sm">
          <span>Rank</span>
          <span className="text-green-600">{dummyData.rank}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentResultData;

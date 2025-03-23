import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const CourseCard = ({ title, subtitle, price, features, badge, onEnroll }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white shadow-xl rounded-xl overflow-hidden w-full max-w-sm border relative"
    >
      {/* Card header */}
      <div className="bg-blue-600 text-white p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-white/80 mt-1">{subtitle}</p>
            <p className="text-2xl font-bold mt-4">
              ₹{price.toLocaleString()}
              <span className="text-xs font-normal text-white/70">/year</span>
            </p>
          </div>
          {badge && (
            <span className="bg-yellow-300 text-sm font-semibold text-black px-3 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 space-y-3">
        <ul className="text-sm text-gray-700 space-y-2">
          {features.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              {item}
            </li>
          ))}
        </ul>

        {/* 🎯 Animated Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={onEnroll}
          className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700"
        >
          Enroll Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CourseCard;

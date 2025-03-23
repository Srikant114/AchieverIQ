import { motion } from 'framer-motion';
import {
  Video,
  BookText,
  ClipboardCheck,
  Headphones,
  MonitorPlay,
  MessageCircleMore,
} from 'lucide-react';

const features = [
  {
    icon: <Video className="w-6 h-6 text-blue-600" />,
    title: 'Live Classes',
    desc: 'Interactive sessions with expert teachers.',
  },
  {
    icon: <BookText className="w-6 h-6 text-blue-600" />,
    title: 'Study Material',
    desc: 'Comprehensive notes and worksheets.',
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    title: 'Regular Tests',
    desc: 'Weekly assessments and feedback.',
  },
  {
    icon: <Headphones className="w-6 h-6 text-blue-600" />,
    title: '24/7 Support',
    desc: 'Round-the-clock doubt resolution.',
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-blue-600" />,
    title: 'Recorded Lectures',
    desc: 'Access past sessions anytime.',
  },
  {
    icon: <MessageCircleMore className="w-6 h-6 text-blue-600" />,
    title: 'Discussion Forums',
    desc: 'Collaborate and clarify with peers.',
  },
];

const CourseFeature = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Course Features
        </motion.h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          What makes our courses effective and engaging for students
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white text-center rounded-xl p-6 shadow-sm border hover:shadow-md transition duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center transition hover:shadow-lg hover:shadow-blue-200">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CourseFeature;

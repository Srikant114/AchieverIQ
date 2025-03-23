import { motion } from 'framer-motion';
import { Users2, Laptop, Group, LineChart } from 'lucide-react';

const features = [
  {
    icon: Users2,
    title: 'Expert Faculty',
    desc: 'Experienced teachers dedicated to student success.',
  },
  {
    icon: Laptop,
    title: 'Smart Learning',
    desc: 'Digital tools and resources for enhanced learning.',
  },
  {
    icon: Group,
    title: 'Small Batches',
    desc: 'Personalized attention in small group settings.',
  },
  {
    icon: LineChart,
    title: 'Track Progress',
    desc: 'Regular assessments and performance tracking.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Why Choose AchieverIQ?
        </motion.h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Experience excellence in education with our unique approach
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map(({ icon: Icon, title, desc }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center transition hover:scale-110 hover:shadow-lg hover:shadow-blue-300/40 duration-300">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

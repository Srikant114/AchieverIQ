import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const points = [
    {
      title: 'Weekly And Monthly Tests',
      desc: 'Regular assessments to track progress and improve performance'
    },
    {
      title: 'Individual Care',
      desc: 'Personalized attention and guidance for each student'
    },
    {
      title: 'Student Motivation',
      desc: 'Regular counseling and motivation sessions'
    }
  ];

  return (
    <section className="bg-gray-50 p-6 sm:p-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-center mb-8"
      >
        Why Choose Us
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-3 text-center">
        {points.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-4 rounded shadow-sm"
          >
            <h3 className="font-semibold mb-2">{point.title}</h3>
            <p className="text-gray-600 text-sm">{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

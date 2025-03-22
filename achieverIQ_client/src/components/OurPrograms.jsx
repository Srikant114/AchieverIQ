import { motion } from 'framer-motion';

const OurPrograms = () => {
  const programs = [
    {
      title: 'Foundation Batch',
      subtitle: 'Classes VI-VIII',
      items: ['Strong basics', 'Weekly tests', 'Personal mentoring']
    },
    {
      title: 'Pre Nurture',
      subtitle: 'Classes IX-X',
      items: ['Board exam focus', 'Monthly assessments', 'Doubt clearing sessions']
    },
    {
      title: 'Nurture & Enthuse',
      subtitle: 'Classes XI-XII',
      items: ['Competitive exam prep', 'Mock tests', 'Career guidance']
    }
  ];

  return (
    <section className="p-6 sm:p-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-center mb-8"
      >
        Our Programs
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-3">
        {programs.map((program, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="border p-4 rounded shadow-sm bg-white"
          >
            <h3 className="font-semibold mb-1">{program.title}</h3>
            <p className="text-sm mb-2">{program.subtitle}</p>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              {program.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurPrograms;

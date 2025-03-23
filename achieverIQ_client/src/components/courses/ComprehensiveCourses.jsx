import { useState } from 'react';
import CourseCard from './CourseCard';
import EnrollModal from '../common/EnrollModal';

const courseData = [
  {
    title: 'Foundation Course',
    subtitle: 'Classes VI-VIII',
    price: 12999,
    features: [
      'Complete syllabus coverage',
      'Weekly tests & assessments',
      'Doubt clearing sessions',
      'Practice worksheets',
    ],
  },
  {
    title: 'Pre-Nurture Course',
    subtitle: 'Classes IX-X',
    price: 15999,
    badge: 'Most Popular',
    features: [
      'Board exam preparation',
      'Monthly mock tests',
      'One-on-one mentoring',
      'Study material & notes',
    ],
  },
  {
    title: 'Advanced Course',
    subtitle: 'Classes XI-XII',
    price: 19999,
    features: [
      'JEE/NEET preparation',
      'Practice tests series',
      'Personal mentoring',
      'Career counseling',
    ],
  },
];

const ComprehensiveCourses = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-gray-50 py-0 px-6 sm:px-10 lg:px-20">
      <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:items-stretch max-w-7xl mx-auto">
        {courseData.map((course, idx) => (
          <CourseCard
            key={idx}
            {...course}
            onEnroll={() => setShowModal(true)}
          />
        ))}
      </div>

      <EnrollModal open={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default ComprehensiveCourses;

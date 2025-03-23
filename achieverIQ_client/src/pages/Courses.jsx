import { motion } from 'framer-motion';
import ComprehensiveCourses from '../components/courses/ComprehensiveCourses';
import CourseFeature from '../components/courses/CourseFeature';
import HaveQuestions from '../components/courses/HaveQuestions';

const Courses = () => {
  return (
    <section className="bg-gray-50 mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 pt-10"
      >
        Our Comprehensive Courses
      </motion.h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Choose from our carefully curated programs tailored to suit each academic stage and help students reach their full potential.
      </p>


      <ComprehensiveCourses/>
     
     <div className='bg-white mt-20'>
      <CourseFeature />
     </div>

     <HaveQuestions/>
    
    </section>
  );
};

export default Courses;

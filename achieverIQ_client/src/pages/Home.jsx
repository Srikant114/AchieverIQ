import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import OurPrograms from '../components/OurPrograms';
import WhyChooseUs from '../components/WhyChooseUs';
import StartJourney from '../components/StartJourney';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <OurPrograms />
      <WhyChooseUs />
      <StartJourney />
    </motion.div>
  );
};

export default Home;

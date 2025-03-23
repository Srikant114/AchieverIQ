import React from 'react';
import { motion } from 'framer-motion';

const FooterCopyrightSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400 bg-gray-900"
    >
      © {new Date().getFullYear()} AchieverIQ. All rights reserved.
    </motion.div>
  );
};

export default FooterCopyrightSection;

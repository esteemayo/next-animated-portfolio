'use client';

import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%'}}
      transition={{ duration: 1 }}
      classname='h-full'
    >
      <div>AboutPage</div>
    </motion.div >
  );
};

export default AboutPage;

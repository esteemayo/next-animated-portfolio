'use client';

import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      className='h-full'
    >
      <div>ContactPage</div>
    </motion.div>
  );
};

export default ContactPage;

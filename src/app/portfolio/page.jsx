'use client';

import { motion } from 'framer-motion';

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      className='h-full'
    >
      <div>PortfolioPage</div>
    </motion.div>
  );
};

export default PortfolioPage;

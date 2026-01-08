'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from '@/components/Navbar';

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <div
        key={pathName}
        className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'
      >
        <motion.div
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
        />

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
        >
          {pathName.substring(1)}
        </motion.div>

        <motion.div
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
          className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30'
        />

        <div className='h-24'>
          <Navbar />
        </div>

        <div className='h-[calc(100vh-6rem)]'>{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;

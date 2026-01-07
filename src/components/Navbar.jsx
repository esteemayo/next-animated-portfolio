'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

import NavLink from './NavLink';
import { links, socials } from '..';

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: 'rgb(255,255,255)',
  },
};

const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: 'rgb(255,255,255)',
  },
};

const listVariants = {
  closed: {
    x: '100vw',
  },
  opened: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      <div className='hidden md:flex gap-4 w-1/3'>
        {links.map((link) => {
          return <NavLink key={link.title} {...link} />;
        })}
      </div>

      <div className='md:hidden lg:flex xl:w-1/2 xl:justify-center'>
        <Link
          href='/'
          className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
        >
          <span className='text-white mr-1'>Esteem</span>
          <span className='w-12 h-8 bg-white text-black flex items-center justify-center'>
            .dev
          </span>
        </Link>
      </div>

      <div className='hidden md:flex gap-4 w-1/3'>
        {socials.map((social) => {
          const { id, url, imgSrc } = social;
          return (
            <Link key={id} href={url}>
              <Image src={imgSrc} alt='' width={24} height={24} />
            </Link>
          );
        })}
      </div>

      <div className='md:hidden'>
        <button
          type='button'
          onClick={() => setIsOpen((prev) => !prev)}
          className='w-10 h-8 flex flex-col justify-between z-50 relative'
        >
          <motion.div
            variants={topVariants}
            animate={isOpen ? 'opened' : 'closed'}
            className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={isOpen ? 'opened' : 'closed'}
            className='w-10 h-1 bg-black rounded'
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={isOpen ? 'opened' : 'closed'}
            className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
        </button>

        {isOpen && (
          <motion.div
            variants={listVariants}
            initial='closed'
            animate='opened'
            className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'
          >
            {links.map((link) => {
              const { url, title } = link;
              return (
                <motion.div variants={listItemVariants} key={title}>
                  <Link href={url}>{title}</Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}>
      <TypingText title='| People on the World' textStyles='text-center' />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles='text-center'
      />

      <motion.div className='relative mt-[68px] flex w-full h-[550px]' variants={fadeIn('up', 'tween', 0.3, 1)}>
        <img className='w-full h-full object-cover' src='/map.png' alt='map' />

        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
          <img className='w-full h-full' src='people-01.png' alt='people' />
        </div>

        <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
          <img className='w-full h-full' src='/people-02.png' alt='people' />
        </div>

        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
          <img className='w-full h-full' src='people-03.png' alt='people' />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;

'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}>
      <TypingText title='| Insight' textStyles='text-center' />
      <TitleText title={<>Insight about metaverse</>} textStyles='text-center' />
    </motion.div>
  </section>
);

export default Insights;

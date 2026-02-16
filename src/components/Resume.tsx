/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Custom modules
 */
import { fadeUp, staggerContainer } from '@/lib/animations';

/**
 * Components
 */
import { SectionHeader } from '@/components/SectionHeader';

/**
 * Constants
 */
import { education } from '@/constants';
import { ExpCard } from './ExpCard';

export const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='resume'
    >
      <SectionHeader
        subtitle='Resume'
        title='Education and experience'
      />

      <motion.p>
        This is some of the education and experience I've gained over the years.
      </motion.p>

      <div className='grid gap-x-10 my-16 md:grid-cols-3'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>
          <div className='space-y-8 border-l border-neutral-700 pl-6'>
            {education.map((item, i) => (
              <ExpCard
                key={i}
                item={item}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

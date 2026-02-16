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
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.6)}
      className='mt-40 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Creating and solving problems with code'
      />
      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        Hi, I’m David Santiago Velasco Triana, a Software Engineering student at{' '}
        <a
          href='https://www.univalle.edu.co/ '
          target='_blank'
        >
          <span className='text-red-300 underline'>Universidad del Valle</span>
        </a>{' '}
        (9th semester) based in{' '}
        <span className='inline-flex font-semibold'>
          <span className='text-yellow-200'>Co</span>
          <span className='text-blue-200'>lom</span>
          <span className='text-red-200'>bia</span>
        </span>
        . I specialize in building full-stack applications with a strong focus
        on backend architecture, authentication systems, business logic design,
        and clean frontend integration. I enjoy designing systems that are
        scalable, maintainable, and production-ready not just projects that
        “work.” Most of my recent work revolves around building real-world
        applications with authentication, role-based access control, financial
        logic, and multi-environment deployments.
      </motion.p>
      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        Over the past years, I've buildt several projects, including a
        full-stack e-commerce application with micro-services, a game statistics
        tracker from the popular game "League of Legends" using Riot Games API
        giving users insights into their gameplay helping them improve their
        performance, and a personal portfolio website. I have experience with a
        variety of technologies, including Node.js, PostreSQL, React, FastAPI
        and SpringBoot. I'm passionate about learning new technologies and
        improving my skills as a developer, learning is a skyrocket that never
        stops, at least i think about it that way .
      </motion.p>
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className='mt-5'>Contact Me</Button>
      </motion.div>
    </motion.section>
  );
};

/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 *Custom modules
 */
import { staggerContainer } from '@/lib/animations';

/**
 *
 * Components
 */
import { SectionHeader } from '@/components/SectionHeader';
import { ProyectCard } from '@/components/ProyectCard';
/**
 *
 * Constants
 */
import { projectsData } from '@/constants';

export const Proyects = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.6)}
      className='mt-30 scroll-mt-10'
      id='projects'
    >
      <SectionHeader
        subtitle='Projects'
        title='My featured proyects'
      />

      <motion.div
        className='grid md:grid-cols-2 gap-10 mt-10 '
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.6)}
      >
        {projectsData.map((project, i) => (
          <ProyectCard
            key={i}
            imgSrc={project.imgSrc}
            tags={project.tags}
            title={project.title}
            projectLink={project.projectLink}
            liveLink={project.liveLink}
            description={project.description}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

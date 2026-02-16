/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 *Custom modules
 */
import { fadeUp, staggerContainer } from '@/lib/animations';

/**
 *Components
 */
import { Button } from '@/components/ui/button';

/**
 *Assets
 */
import { SparkleIcon } from 'lucide-react';

export const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer()}
      className='pt-20'
      id='hero'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon size={15} />
        <span>Introduction</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16'
      >
        I'm <span className='text-primary'>David</span> a Software Engineer
        specialized in building exceptional digital experiences.
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className='mt-8 flex gap-3'
      >
        <Button asChild>
          <a href='#projects'>My Projects</a>
        </Button>

        <Button variant='outline'>Download CV</Button>
      </motion.div>
    </motion.section>
  );
};

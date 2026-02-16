/**
 * Node modules
 */
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

/**
 * Custom modules
 */
import { fadeUp } from '@/lib/animations';

/**
 * Types
 */
import type { ProjectType } from '@/types';
import { useState } from 'react';

export const ProyectCard = ({
  imgSrc,
  projectLink,
  tags,
  title,
  description,
  liveLink,
}: ProjectType) => {
  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className='relative '
    >
      <HoverCard
        open={isTouchDevice ? open : undefined}
        onOpenChange={isTouchDevice ? setOpen : undefined}
        openDelay={10}
        closeDelay={150}
      >
        <HoverCardTrigger asChild>
          <figure className='overflow-hidden rounded-md aspect-3/2 '>
            <img
              src={imgSrc}
              alt={title}
              className='rounded-md transition duration-500  w-full h-full object-cover'
              onClick={() => {
                if (isTouchDevice) setOpen((prev) => !prev);
              }}
            />
          </figure>
        </HoverCardTrigger>
        <HoverCardContent
          className='flex w-80 flex-col gap-0.5 backdrop-blur-md bg-background/80 border border-neutral-700 mt-4'
          side='bottom'
        >
          <div className='font-semibold'>{title}</div>
          <div>{description}</div>
          <div className='text-muted-foreground mt-1 text[14px]'>
            <a
              href={projectLink}
              target='"_blank"'
              className='text-blue-400 hover:underline'
            >
              View Project
            </a>
            <a
              href={liveLink}
              target='"_blank"'
              className='text-blue-400 hover:underline ml-4'
            >
              Live Demo
            </a>
          </div>
        </HoverCardContent>
        <div className='absolute bottom-0 left-0 right-0 p-2 flex flex-wrap gap-2'>
          {tags.map((tag, i) => (
            <Badge
              variant='secondary'
              key={i}
              className='bg-background hover:bg-primary hover:text-black 
            cursor-pointer backdrop-blur-md transition duration-300'
            >
              {tag}
            </Badge>
          ))}
        </div>
      </HoverCard>
    </motion.div>
  );
};

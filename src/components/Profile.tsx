/**
 * Components
 *
 */
import { Button } from '@/components/ui/button';

/**
 * Constants
 */

import { socialLinks } from '@/constants';

export const Profile = () => {
  return (
    <aside className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-x-20 md:gap-x-10'>
          <h1 className='text-base sm:text-xl md:text-2xl font-bold'>
            David Santiago
          </h1>
          <h1 className='text-sm sm:text-lg md:text-xl font-bold'>
            Software Engineer
          </h1>
        </div>
        <img
          src='/pfp.jpg'
          alt='David'
          className='lg:w-96 rounded-2xl object-cover'
        />
        <div className='mt-6'>
          <p className='text-sm text-neutral-300'>Specialization:</p>
          <p className='text-lg capitalize'>Frontend and Backend Development</p>
        </div>
        <div>
          <p className='text-sm text-neutral-300'>Based in:</p>
          <p className='text-lg capitalize'>Cali, Colombia</p>

          <div className='flex gap-3 pt-2 text-neutral-500'>
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.link}
                  className='hover:text-primary
                  border-2 border-neutral-500 p-2
                  rounded-full hover:border-primary transition-colors duration-300'
                >
                  <Icon className='size-6' />
                </a>
              );
            })}
          </div>
        </div>
        <Button
          className='mt-2 cursor-pointer'
          size='lg'
        >
          Contact Me
        </Button>
      </div>
    </aside>
  );
};

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Sidebar } from '@/components/Sidebar';
import { FloatingMenu } from '@/components/FloatingMenu';
import { Profile } from '@/components/Profile';
import Squares from '@/components/Squares.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <div className='fixed bottom-4 right-4 bg-black text-white p-2 rounded z-50'>
      <span className='sm:hidden'>Mobile</span>
      <span className='hidden sm:block md:hidden'>SM (≥640px)</span>
      <span className='hidden md:block lg:hidden'>MD (≥768px)</span>
      <span className='hidden lg:block xl:hidden'>LG (≥1024px)</span>
      <span className='hidden xl:block 2xl:hidden'>XL (≥1280px)</span>
      <span className='hidden 2xl:block'>2XL (≥1536px)</span>
    </div> */}
    <div className='relative min-h-screen'>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <Squares
          speed={0.05}
          squareSize={40}
          direction='down'
          borderColor='#271E37'
          hoverFillColor='#222222'
        />
      </div>

      {/* Content */}
      <div className='relative lg:flex lg:justify-center lg:items-start lg:gap-10'>
        <Sidebar />
        <FloatingMenu />
        <Profile />
        <App />
      </div>
    </div>
  </StrictMode>,
);

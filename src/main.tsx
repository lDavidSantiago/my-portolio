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

/**
 * Node modules
 */
import { useEffect } from 'react';
import Lenis from 'lenis';
/**
 *
 * Components
 */
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Proyects } from './components/Proyects';
import { About } from './components/About';
import { Resume } from './components/Resume';
function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl '>
        <Hero />
        <Stats />
        <Proyects />
        <About />
        <Resume />
      </div>
    </>
  );
}

export default App;

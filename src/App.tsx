import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Un Nuevo Día | Fundación';
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
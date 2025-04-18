import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="block">Construyendo</span>
          <span className="text-[#1860ff]">Un Nuevo Día</span>
          <span className="block">para todos</span>
        </h1>
        
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Somos una fundación dedicada a transformar vidas y brindar esperanza a quienes más lo necesitan.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-[#1860ff] text-white rounded-full font-medium hover:bg-[#0040cc] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
          >
            Contáctanos
          </button>
          
          <a
            href="#nosotros"
            className="px-8 py-3 bg-white text-[#1860ff] rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
          >
            Conócenos
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#nosotros" className="text-white opacity-70 hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
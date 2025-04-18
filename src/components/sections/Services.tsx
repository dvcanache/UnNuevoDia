import React from 'react';
import { BookOpen, Heart, Home, Users } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="h-2 bg-[#1860ff] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
      <div className="p-6">
        <div className="inline-block p-3 rounded-full bg-[#1860ff]/10 text-[#1860ff] mb-4 group-hover:bg-[#1860ff] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Heart size={24} />,
      title: 'Asistencia Médica',
      description: 'Proporcionamos acceso a servicios médicos básicos, medicamentos y educación sobre salud preventiva.'
    },
    {
      icon: <Users size={24} />,
      title: 'Apoyo Comunitario',
      description: 'Desarrollamos proyectos que fortalecen el tejido social y promueven la solidaridad entre vecinos.'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros <span className="text-[#1860ff]">Servicios</span>
          </h2>
          <div className="w-20 h-1 bg-[#1860ff] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En Un Nuevo Día trabajamos en diversas áreas para brindar apoyo integral a quienes lo necesitan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-16 p-8 bg-[#1860ff] rounded-lg shadow-lg text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">¿Necesitas nuestra ayuda?</h3>
          <p className="mb-6">
            Estamos aquí para apoyarte. Ponte en contacto con nosotros y te orientaremos sobre cómo podemos ayudarte.
          </p>
          <a
            href="#contacto"
            className="inline-block px-6 py-3 bg-white text-[#1860ff] rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contáctanos ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { Award, Heart, Users } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-[#1860ff] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart size={28} />,
      title: 'Compasión',
      description: 'Actuamos con empatía y compasión, poniendo el bienestar de las personas como nuestra prioridad principal.'
    },
    {
      icon: <Users size={28} />,
      title: 'Comunidad',
      description: 'Creemos en el poder de la comunidad para generar cambios positivos y duraderos en la sociedad.'
    },
    {
      icon: <Award size={28} />,
      title: 'Compromiso',
      description: 'Nos comprometemos a trabajar incansablemente para mejorar la vida de quienes más lo necesitan.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-[#1860ff]">Nosotros</span>
          </h2>
          <div className="w-20 h-1 bg-[#1860ff] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un Nuevo Día es una fundación comprometida con brindar apoyo y esperanza a personas vulnerables, 
            trabajando por un futuro más brillante para nuestra comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Voluntarios de Un Nuevo Día"
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#1860ff] text-white p-4 md:p-6 rounded-lg shadow-xl hidden md:block">
              <p className="font-bold text-xl md:text-2xl">Ofreciendo</p>
              <p className="text-sm md:text-base">Servicio comunitario</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Nuestra Historia</h3>
            <p className="text-gray-600 mb-6">
              Un Nuevo Día nació del sueño de un grupo de personas comprometidas 
              con hacer una diferencia en su comunidad. Lo que comenzó como una pequeña iniciativa 
              local se ha convertido en una fundación con un impacto significativo.
            </p>
            <p className="text-gray-600 mb-6">
              Nuestra misión es proporcionar recursos, apoyo y oportunidades a quienes enfrentan 
              dificultades, creyendo firmemente que cada persona merece la oportunidad de un nuevo 
              comienzo y un futuro mejor.
            </p>
            <div className="flex items-center space-x-6">
              <div>
                <p className="text-[#1860ff] font-bold text-3xl">100+</p>
                <p className="text-gray-600">Personas ayudadas</p>
              </div>
              <div>
                <p className="text-[#1860ff] font-bold text-3xl">50+</p>
                <p className="text-gray-600">Voluntarios activos</p>
              </div>
              <div>
                <p className="text-[#1860ff] font-bold text-3xl">20+</p>
                <p className="text-gray-600">Programas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
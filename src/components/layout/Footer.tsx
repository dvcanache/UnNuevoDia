import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="text-[#1860ff]" />
              <span className="font-bold text-xl">Un Nuevo Día</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando vidas y construyendo un futuro mejor para nuestra comunidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#1860ff] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1860ff] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1860ff] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#1860ff] flex-shrink-0 mt-1" />
                <span className="text-gray-400">Calle Principal #123, Ciudad, País</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#1860ff] flex-shrink-0" />
                <span className="text-gray-400">+123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#1860ff] flex-shrink-0" />
                <span className="text-gray-400">info@unnuevodia.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Nosotros', 'Galería', 'Servicios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#1860ff] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Fundación Un Nuevo Día. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
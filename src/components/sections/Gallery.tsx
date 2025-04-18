import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ImageProps {
  src: string;
  alt: string;
}

const GalleryImage: React.FC<ImageProps & { onClick: () => void }> = ({ src, alt, onClick }) => {
  return (
    <div 
      className="overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
};

const Modal: React.FC<ImageProps & { onClose: () => void }> = ({ src, alt, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white hover:text-[#1860ff] transition-colors"
        onClick={onClose}
      >
        <X size={24} />
      </button>
      <img 
        src={src} 
        alt={alt} 
        className="max-w-full max-h-[90vh] object-contain" 
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Voluntarios trabajando juntos"
    },
    {
      src: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Ayudando a la comunidad"
    },
    {
      src: "https://images.pexels.com/photos/6647029/pexels-photo-6647029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Evento comunitario"
    },
    {
      src: "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Donación de alimentos"
    },
    {
      src: "https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Apoyando a familias"
    },
    {
      src: "https://images.pexels.com/photos/6647009/pexels-photo-6647009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Educación comunitaria"
    }
  ];

  const openModal = (image: ImageProps) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra <span className="text-[#1860ff]">Galería</span>
          </h2>
          <div className="w-20 h-1 bg-[#1860ff] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce nuestras actividades y el impacto que generamos en la comunidad a través de estas imágenes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage 
              key={index} 
              src={image.src} 
              alt={image.alt} 
              onClick={() => openModal(image)}
            />
          ))}
        </div>

        {selectedImage && (
          <Modal
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;
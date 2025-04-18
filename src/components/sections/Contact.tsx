import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#1860ff]">Contáctanos</span>
          </h2>
          <div className="w-20 h-1 bg-[#1860ff] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte. No dudes en ponerte en contacto con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <img
            src="https://christianbarbosa.wordpress.com/wp-content/uploads/2013/06/givemeahand.jpg"
            alt="Persona ayudando a otra"
            className="rounded-lg shadow-lg object-cover w-full h-[400px] lg:h-[500px]"
          />
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center"
              >
                <MessageSquare size={20} className="mr-2" />
                WhatsApp
              </a>
              
              <a
                href="mailto:info@unnuevodia.org"
                className="bg-gray-800 hover:bg-gray-900 text-white py-4 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center"
              >
                <Mail size={20} className="mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
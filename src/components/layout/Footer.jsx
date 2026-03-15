import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#FF8C00]">Escuela Rivapark</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              La mejor escuela de skateboarding de Rivadavia. Aprende, evoluciona y diviértete con nosotros.
            </p>
          </div>

                        {/* Columna 3 - Mapa */}
                <div>
                    <h3 className="text-lg font-semibold text-white">
                        Nuestra Ubicación
                    </h3>

                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://maps.google.com/maps?q=-33.1951883,-68.4756744&z=17&output=embed"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Rivapark Skatepark"
                        ></iframe>
                    </div>

                </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-[#FF8C00] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">José M. Estrada 525, M5577 Rivadavia</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-[#FF8C00] flex-shrink-0" />
                <span className="text-slate-400">2634 33-3008</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-[#FF8C00] flex-shrink-0" />
                <span className="text-slate-400">escuelarivaparkmza@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock size={18} className="text-[#FF8C00] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">Martes-Jueves: 19:00-20:30</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/riva_park/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#FF8C00] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} Escuela Rivapark. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
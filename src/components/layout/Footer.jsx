import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

                {/* Columna 1 - Marca */}
                <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                        Rivapark
                    </h2>
                    <p className="text-gray-400">
                        Escuela de skate para todas las edades.
                        Aprende, mejora y disfruta del skate en un ambiente seguro y amigable.
                    </p>

                    {/* Redes */}
                    <div className="flex gap-4 mt-6">
                        <a
                            href="#"
                            className="bg-primary p-3 rounded-full hover:bg-primaryDark transition"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            className="bg-primary p-3 rounded-full hover:bg-primaryDark transition"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://wa.me/549XXXXXXXXXX"
                            className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* Columna 2 - Contacto */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contacto</h3>

                    <p className="text-gray-400 mb-2">
                        📱 WhatsApp: +54 9 XXX XXX XXXX
                    </p>

                    <p className="text-gray-400">
                        📍 Ubicación: Rivadavia, Mendoza Argentina
                    </p>
                </div>

                {/* Columna 3 - Mapa */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">
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
            </div>

            {/* Línea inferior */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Rivapark Escuela de Skateboarding. Todos los derechos reservados.
            </div>
        </footer>
    );
}

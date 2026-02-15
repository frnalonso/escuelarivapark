import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp, Heart, Shield } from 'lucide-react';
import logo from "../../assets/images/logorivapark.png";

const AboutPage = () => {

    const values = [
        {
            icon: Heart,
            title: 'Pasión',
            description: 'Amamos el skateboarding y transmitimos esa pasión a cada alumno'
        },
        {
            icon: Users,
            title: 'Comunidad',
            description: 'Creamos un ambiente inclusivo donde todos son bienvenidos'
        },
        {
            icon: Target,
            title: 'Excelencia',
            description: 'Nos esforzamos por ofrecer la mejor formación posible'
        },
        {
            icon: Shield,
            title: 'Seguridad',
            description: 'La seguridad de nuestros alumnos es nuestra prioridad'
        },
        {
            icon: TrendingUp,
            title: 'Progreso',
            description: 'Celebramos cada logro, grande o pequeño'
        },
        {
            icon: Award,
            title: 'Profesionalismo',
            description: 'Combinamos un entrenamiento constante y un enfoque en la consistencia de trucos técnicos'
        }
    ];


    return (
        <>

            <div className="min-h-screen pt-16 pb-16 bg-[#F47C2A]">
                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Sobre <span className="text-[#ffffff]">Nosotros</span>
                        </h1>
                        <p className="text-slate-100 text-lg max-w-3xl mx-auto">
                            Más que una escuela de skateboarding, somos una familia unida por la pasión de andar en skate
                        </p>
                        <div className="flex justify-center">
                            <img
                                src={logo}
                                alt="Rivapark Logo"
                                className="h-60 w-auto object-contain"
                            />
                        </div>
                    </motion.div>
                </section>

                {/* History Section */}
                <section className="container mx-auto px-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-800 rounded-xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Nuestra Historia</h2>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>
                                Escuelita Rivapark nació en 2025 con un sueño simple: crear un espacio donde el skateboarding
                                pudiera ser accesible para todos, sin importar la edad o el nivel de experiencia.
                            </p>
                            <p>
                                Comenzó como un pequeño grupo de amigos compartiendo su pasión por el skate,
                                y pasó a ser una comunidad que ha formado a más de 50 alumnos, desde niños que dan sus primeros pasos sobre una tabla hasta
                                competidores que han estado trabajando con nosotros durante años.
                            </p>
                            <p>
                                Nuestro compromiso siempre ha sido el mismo: ofrecer una enseñanza de calidad en un
                                ambiente seguro, divertido y motivador. Creemos que el skateboarding es más que un
                                deporte; es una forma de vida, una expresión artística y una comunidad.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Mission Section */}
                <section className="container mx-auto px-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-[#FF8C00] to-[#FF7700] rounded-xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Nuestra Misión</h2>
                        <p className="text-white text-lg leading-relaxed">
                            Inspirar y formar a la próxima generación de skaters, proporcionando una educación
                            de excelencia que combine técnica, creatividad y valores. Queremos que cada alumno
                            descubra su potencial, supere sus límites y se convierta en parte de nuestra familia
                            del skateboarding.
                        </p>
                    </motion.div>
                </section>

                {/* Values Section */}
                <section className="container mx-auto px-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Nuestros <span className="text-[#ffffff]">Valores</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-slate-800 rounded-xl p-6 shadow-lg text-center"
                            >
                                <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <value.icon size={32} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-slate-400">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>


            </div>
        </>
    );
};

export default AboutPage;
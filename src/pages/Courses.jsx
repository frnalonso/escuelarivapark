import React from 'react'
import { motion } from 'framer-motion';

const Courses = () => {

  const clases = [
  {
    title: 'Principiantes',
    description: 'Aprende los fundamentos del skateboarding desde cero. Ideal para quienes comienzan su camino en la tabla y quieren construir una base sólida.',
    features: [
      'Fundamentos técnicos',
      'Seguridad y control',
      'Grupos reducidos',
      'Acompañamiento personalizado'
    ]
  },
  {
    title: 'Intermedios',
    description: 'Perfecciona tu técnica y amplía tu repertorio de trucos. Diseñado para skaters que buscan mayor control y fluidez.',
    features: [
      'Mejora de técnica',
      'Transiciones y rampas',
      'Trabajo de estilo',
      'Seguimiento individual'
    ]
  },
  {
    title: 'Avanzados',
    description: 'Entrenamiento enfocado en rendimiento y progresión avanzada. Para quienes buscan llevar su nivel al máximo.',
    features: [
      'Trucos complejos',
      'Preparación competitiva',
      'Análisis técnico',
      'Coaching especializado'
    ]
  }
];


  return (
    <div>

         {/* Clases Section */}
        <section id="clases" className="py-16 md:py-24 bg-[#F47C2A]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Nuestras <span className="text-[#ffffff]">Clases</span>
              </h2>
              <p className="text-slate-100 text-lg max-w-2xl mx-auto">
                Programas diseñados para todos los niveles, desde principiantes hasta avanzados
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clases.map((clase, index) => (
                <motion.div
                  key={clase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700"
                >
                  <h3 className="text-2xl font-bold text-[#FF8C00] mb-4">{clase.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{clase.description}</p>
                  <div className="text-3xl font-bold text-white mb-6">{clase.price}</div>
                  <ul className="space-y-3 mb-8">
                    {clase.features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate-400">
                        <span className="w-2 h-2 bg-[#FF8C00] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      
    </div>
  )
}

export default Courses

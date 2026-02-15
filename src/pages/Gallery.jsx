import { motion } from "framer-motion";
import foto1 from "../assets/images/escuela1.jpeg";
import foto2 from "../assets/images/escuela2.jpeg";
import foto3 from "../assets/images/escuela3.jpeg";
import foto4 from "../assets/images/escuela4.jpeg";
import foto5 from "../assets/images/escuela5.jpeg";
import foto6 from "../assets/images/escuela6.jpeg";
import foto7 from "../assets/images/escuela7.jpeg";
import foto8 from "../assets/images/escuela8.jpeg";
import foto9 from "../assets/images/escuela9.jpeg";
import foto10 from "../assets/images/escuela10.jpeg";
import foto11 from "../assets/images/escuela11.jpeg";
import foto12 from "../assets/images/escuela12.jpeg";

export default function Gallery() {
  const images = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12];

  return (
    <section className="bg-[#F47C2A] py-14 sm:py-16 px-4 sm:px-6">
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Nuestra Galería
        </h2>
        <p className="text-white/90 mt-3 text-sm sm:text-base">
          Capturando la pasión, el progreso y la diversión en cada sesión
        </p>
      </motion.div>

      {/* Grid mobile-first */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Skater ${index + 1}`}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.45,
              delay: Math.min(index * 0.05, 0.25), // 👈 micro-delay (no lento en mobile)
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.18 },
            }}
            className="
              w-full rounded-2xl shadow-lg
              aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]
              object-cover
              cursor-pointer
              transition-transform
              hover:scale-[1.03]
              motion-reduce:transform-none
              [@media(hover:none)]:hover:scale-100
            "
          />
        ))}
      </div>
    </section>
  );
}

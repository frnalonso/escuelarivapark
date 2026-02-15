import heroImage from "../../assets/images/escuela6.jpeg"; // cambia por tu imagen

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Aprende Skate en{" "}
          <span className="text-primary">Rivapark</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Clases para niños, jóvenes y adultos.
          Mejora tu técnica, gana confianza y disfruta del skate.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <NavLink
            to="/clases"
            className="bg-primary hover:bg-primaryDark text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
          >
            Ver Clases
          </NavLink>

        </div>
      </div>
    </section>
  );
}

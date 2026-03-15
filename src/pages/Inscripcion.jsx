const Inscripcion = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/autorizacion.pdf";
    link.download = "Autorizacion_Escuela_Skateboarding.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-soft flex flex-col items-center p-8">

      <h1 className="text-3xl font-bold text-dark mb-6">
        Inscripción
      </h1>

      <p className="text-gray-600 mb-6 text-center max-w-xl">
        Descargue la autorización y complete los datos correspondiente y presentarlo en la Escuela de Skateboarding.
      </p>

      {/* Vista previa del PDF */}
      <div className="w-full max-w-4xl h-[600px] bg-white rounded-xl shadow-lg overflow-hidden mb-6">
        <iframe
          src="/autorizacion.pdf"
          title="Autorización"
          className="w-full h-full"
        />
      </div>

      {/* Botón descargar */}
      <button
        onClick={handleDownload}
        className="bg-primary hover:bg-primaryDark text-white font-semibold px-6 py-3 rounded-lg transition"
      >
        Descargar autorización
      </button>

    </div>
  );
};

export default Inscripcion;
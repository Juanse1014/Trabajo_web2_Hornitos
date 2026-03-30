export default function AboutUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          {/* Un recuadro de color para simular una foto de la panadería */}
          <div className="bg-orange-100 w-full h-80 rounded-2xl flex items-center justify-center text-8xl shadow-inner">
            🧑‍🍳
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Nuestra Historia</h2>
          <p className="text-lg text-gray-600 mb-6">
            En Hornitos llevamos años horneando sonrisas. Somos una empresa familiar dedicada a ofrecer los mejores productos de panadería, pastelería y repostería, utilizando ingredientes frescos y recetas tradicionales.
          </p>
          <button className="text-orange-600 font-bold hover:underline">
            Conoce más de nosotros &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
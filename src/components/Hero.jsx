export default function Hero() {
  return (
    <section className="bg-orange-50 py-24 px-4 text-center border-b border-orange-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
          El sabor de la tradición en tu mesa
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Panadería, pastelería y repostería hecha con amor. Disfruta de nuestros productos frescos todos los días en Hornitos.
        </p>
        <button className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-700 transition shadow-lg transform hover:scale-105">
          Conoce nuestro menú
        </button>
      </div>
    </section>
  );
}
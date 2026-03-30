// Sub-componente (Estructura reutilizable sin usar props, como pide la guía)
function ProductCard() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
      {/* Usamos un color de fondo y un emoji como imagen de reemplazo */}
      <div className="bg-orange-200 w-full h-48 flex items-center justify-center text-6xl">
        🥐
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Delicia Horneada</h3>
        <p className="text-gray-500 mb-4 line-clamp-2">Producto recién horneado, crujiente por fuera y suave por dentro. Preparado con los mejores ingredientes.</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-extrabold text-orange-600">$5.000</span>
          <button className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente Principal de la sección
export default function ProductSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Nuestros Favoritos
        </h2>
        
        {/* Grilla responsiva: 1 columna en móvil, 3 en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}
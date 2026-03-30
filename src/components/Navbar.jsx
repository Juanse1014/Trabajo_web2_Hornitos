export default function Navbar() {
  return (
    <nav className="bg-orange-600 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight">
          🍞 HORNITOS
        </div>
        
        {/* Enlaces de navegación */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-orange-200 cursor-pointer transition">Inicio</li>
          <li className="hover:text-orange-200 cursor-pointer transition">Productos</li>
          <li className="hover:text-orange-200 cursor-pointer transition">Nuestras Sedes</li>
          <li className="hover:text-orange-200 cursor-pointer transition">Contacto</li>
        </ul>

        {/* Botón */}
        <button className="bg-white text-orange-600 px-5 py-2 rounded-full font-bold hover:bg-orange-100 transition shadow">
          🛒 Pedir ahora
        </button>
      </div>
    </nav>
  );
}
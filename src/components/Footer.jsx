export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Columna 1 */}
        <div>
          <h4 className="text-white font-bold text-2xl mb-4 tracking-tight">🍞 HORNITOS</h4>
          <p className="text-sm">El sabor de la tradición en tu mesa. Horneamos con amor todos los días.</p>
        </div>
        
        {/* Columna 2: Contacto */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Contacto</h4>
          <p className="text-sm mb-2">📍 Bogotá, Colombia</p>
          <p className="text-sm mb-2">📞 Línea de Atención: 310 481 45 29</p>
          <p className="text-sm">✉️ servicioalcliente@hornitos.co</p>
        </div>
        
        {/* Columna 3: Enlaces */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Términos y Condiciones</li>
            <li className="hover:text-white cursor-pointer transition">Política de Privacidad</li>
            <li className="hover:text-white cursor-pointer transition">Trabaja con nosotros</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>© 2026 Proyecto Académico - Reconstrucción UI Hornitos.</p>
      </div>
    </footer>
  );
}
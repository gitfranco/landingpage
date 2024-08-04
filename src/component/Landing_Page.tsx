import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const Landing_Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const properties = [
    {
      id: 1,
      name: "Laguna del Mar",
      location: "Sector Puertas del Mar",
      rating: 4.9,
      price: "80.000",
    },
    {
      id: 2,
      name: "Norte Verde",
      location: "Av. del Mar",
      rating: 4.8,
      price: "60.000",
    },
    {
      id: 3,
      name: "Jardines del Pacífico",
      location: "Av. Pacifico Norte",
      rating: 4.9,
      price: "60.000",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + properties.length) % properties.length
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-orange-100 font-sans pt-16">
      {/* Barra de navegación fija */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg transition-all duration-300 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-800 hover:text-orange-500 transition-colors duration-300">
            Casanort
          </div>
          <div className="hidden md:flex space-x-4">
            {["Inicio", "Propiedades", "Sobre Nosotros", "Contacto"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-orange-500 hover:text-blue-800 transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>
          <button
            className="md:hidden text-orange-500 hover:text-blue-800 transition-colors duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            {["Inicio", "Propiedades", "Sobre Nosotros", "Contacto"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-2 px-6 text-orange-500 hover:text-blue-800 hover:bg-gray-100 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-orange-500 mb-4 animate-fade-in-down">
          Descubre Tu Hogar Lejos de Casa
        </h1>
        <p className="text-xl text-blue-600 mb-8 animate-fade-in-up">
          Departamentos en sectores prime de La Serena.
        </p>
        <div className="max-w-md mx-auto">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Busca por ciudad o propiedad..."
              className="w-full px-4 py-3 rounded-full border-2 border-orange-500 bg-white bg-opacity-70 text-blue-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
            />
            <button className="absolute right-3 text-orange-500 hover:text-blue-800 transition-colors duration-300">
              <Search size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Sección de Propiedades Destacadas */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
          Nuestras Propiedades
        </h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className={`w-full flex-shrink-0 transition-all duration-500 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <Link to="/landingpage/galeria">
                    <img
                      src={`/api/placeholder/800/500?text=${property.name}`}
                      alt={property.name}
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">
                      {property.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <MapPin size={16} className="text-orange-500 mr-1" />
                      <span className="text-blue-600">{property.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 mr-1" />
                        <span className="text-blue-600">{property.rating}</span>
                      </div>
                      <span className="text-orange-500 font-semibold">
                        ${property.price}/noche
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-70 transition-all duration-300"
          >
            <ChevronLeft size={24} className="text-blue-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-70 transition-all duration-300"
          >
            <ChevronRight size={24} className="text-blue-800" />
          </button>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-16 bg-gradient-to-r from-blue-400 to-orange-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Departamentos Full Equipados",
                description:
                  "Condominios con quinchos, piscinas, salón de eventos, gimnasio.",
              },
              {
                title: "Servicio Personalizado",
                description:
                  "Nuestro equipo está disponible 24/7 para atender tus necesidades.",
              },
              {
                title: "Muy Buenas Ubicaciones",
                description:
                  "Encuentra alojamientos en los mejores condominios de la IV Región.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg hover:shadow-2xl hover:bg-opacity-30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-900">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-blue-800 to-blue-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Casanort</h3>
              <p className="text-blue-200">
                Tu mejor destino Casanort La Serena.
              </p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Enlaces Rápidos</h3>
              <ul className="text-blue-200">
                {["Inicio", "Propiedades", "Sobre Nosotros", "Contacto"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-orange-300 transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
              <p className="text-blue-200">info@casanort.cl</p>
              <p className="text-blue-200">+569 89480575</p>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
              <div className="flex space-x-4">
                <h3 className="text-lg font-semibold mb-2">
                  ICONOS DE REDES SOCIALES
                </h3>
                {/* Aquí puedes agregar iconos de redes sociales */}
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Casanort. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing_Page;

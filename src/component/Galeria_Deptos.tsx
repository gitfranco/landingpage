import { SetStateAction, useState } from "react";
import { MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";

const Galeria_Deptos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  const properties = [
    {
      id: 1,
      name: "Laguna del Mar",
      location: "Sector Puertas del Mar",
      rating: 4.9,
      price: "80.000",
      images: [
        "/api/placeholder/800/600?text=Laguna del Mar 1",
        "/api/placeholder/800/600?text=Laguna del Mar 2",
      ],
    },
    {
      id: 2,
      name: "Norte Verde",
      location: "Av. del Mar",
      rating: 4.8,
      price: "60.000",
      images: [
        "/api/placeholder/800/600?text=Norte Verde 1",
        "/api/placeholder/800/600?text=Norte Verde 2",
      ],
    },
    {
      id: 3,
      name: "Jardines del Pacífico",
      location: "Av. Pacifico Norte",
      rating: 4.9,
      price: "60.000",
      images: [
        "/api/placeholder/800/600?text=Jardines del Pacífico 1",
        "/api/placeholder/800/600?text=Jardines del Pacífico 2",
      ],
    },
    {
      id: 4,
      name: "Jardines del Pacífico",
      location: "Av. Pacifico Norte",
      rating: 4.9,
      price: "60.000",
      images: [
        "/api/placeholder/800/600?text=Jardines del Pacífico 1",
        "/api/placeholder/800/600?text=Jardines del Pacífico 2",
      ],
    },
    {
      id: 5,
      name: "Jardines del Pacífico",
      location: "Av. Pacifico Norte",
      rating: 4.9,
      price: "60.000",
      images: [
        "/api/placeholder/800/600?text=Jardines del Pacífico 1",
        "/api/placeholder/800/600?text=Jardines del Pacífico 2",
      ],
    },
    {
      id: 6,
      name: "Jardines del Pacífico",
      location: "Av. Pacifico Norte",
      rating: 4.9,
      price: "60.000",
      images: [
        "/api/placeholder/800/600?text=Jardines del Pacífico 1",
        "/api/placeholder/800/600?text=Jardines del Pacífico 2",
      ],
    },
    // Agrega más propiedades aquí...
  ];

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-orange-100 font-sans">
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-blue-800">
            Nuestras Propiedades
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-2 py-1 m-2 rounded">
                  ${property.price}/noche
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">
                  {property.name}
                </h2>
                <div className="flex items-center mb-2">
                  <MapPin size={16} className="text-orange-500 mr-1" />
                  <span className="text-blue-600">{property.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <span className="text-blue-600">{property.rating}</span>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors duration-300">
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <ChevronLeft size={20} />
            </button>
            {[...Array(Math.ceil(properties.length / propertiesPerPage))].map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 border border-gray-300 text-sm font-medium ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(properties.length / propertiesPerPage)
              }
              className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <ChevronRight size={20} />
            </button>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default Galeria_Deptos;

import Image from 'next/image';

export default function Restaurants() {
  const restaurants = [
    {
      name: "Pizzaria da Esquina",
      image: "https://via.placeholder.com/400x300",
      description: "Deliciosas pizzas artesanais feitas no forno a lenha.",
      hours: "Segunda a Domingo, das 18h às 23h",
      contact: "(99) 99999-9999",
      whatsapp: "https://wa.me/5599999999999",
      address: "Av. Principal, 123, Centro",
      maps: "https://goo.gl/maps/example",
    },
    {
      name: "Restaurante Japonês Sakura",
      image: "https://via.placeholder.com/400x300",
      description: "Sushis e sashimis frescos no melhor ambiente japonês.",
      hours: "Terça a Domingo, das 12h às 22h",
      contact: "(98) 88888-8888",
      whatsapp: "https://wa.me/5598888888888",
      address: "Rua Japão, 456, Bairro Oriental",
      maps: "https://goo.gl/maps/example2",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Restaurantes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative w-full h-48">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{restaurant.name}</h2>
              <p className="text-gray-400 mt-2">{restaurant.description}</p>
              <p className="mt-2">
                <strong>Horário:</strong> {restaurant.hours}
              </p>
              <p className="mt-2">
                <strong>Contato:</strong>{" "}
                <a href={`tel:${restaurant.contact}`} className="text-blue-400">
                  {restaurant.contact}
                </a>{" "}
                |{" "}
                <a
                  href={restaurant.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400"
                >
                  WhatsApp
                </a>
              </p>
              <p className="mt-2">
                <strong>Endereço:</strong> {restaurant.address}
              </p>
              <a
                href={restaurant.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

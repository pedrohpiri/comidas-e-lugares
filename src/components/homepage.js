import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Search, 
  Menu, 
  Instagram, 
  Star, 
  Clock, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  Share2,
  Link
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function HomePage() {
  const [shareMenuOpen, setShareMenuOpen] = useState(null);

  const handleShare = async (platform, restaurantName) => {
    const shareUrl = window.location.href;
    const shareText = `Confira ${restaurantName} no Comidas e Lugares!`;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`);
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(shareUrl);
          alert('Link copiado!');
        } catch (err) {
          console.error('Falha ao copiar:', err);
        }
        break;
    }
    setShareMenuOpen(null);
  };

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=600&fit=crop',
      title: 'Descubra Teresina',
      subtitle: 'Os melhores lugares para comer desde 2015'
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=600&fit=crop',
      title: 'Gastronomia Local',
      subtitle: 'Experimente os sabores únicos da nossa cidade'
    },
    {
      image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1920&h=600&fit=crop',
      title: 'Novos Restaurantes',
      subtitle: 'Conheça as últimas novidades gastronômicas'
    }
  ];

  const restaurantImages = [
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=300&fit=crop'
  ];

  const instaImages = [
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-black p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative">
              <Image
                src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=50&h=50&fit=crop"
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
                priority
              />
            </div>
            <span className="font-bold text-xl">Comidas e Lugares</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <input 
                type="text"
                placeholder="Buscar restaurantes, pratos..."
                className="bg-gray-800 rounded-full py-2 px-4 pl-10 w-64 text-sm"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </nav>

      {/* Hero Section com Carrossel */}
      <div className="relative h-96 group">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-96">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover brightness-50"
                  sizes="100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl mb-8">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Botões de navegação */}
          <button className="swiper-button-prev hidden group-hover:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next hidden group-hover:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full">
            <ChevronRight className="w-6 h-6" />
          </button>
        </Swiper>
      </div>

      {/* Seção Trending */}
      <div className="container mx-auto py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Trending da Semana</h2>
          <button className="text-blue-400 hover:text-blue-300 transition-colors">Ver todos</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restaurantImages.map((image, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer relative"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={`Restaurante ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Botão de compartilhar */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShareMenuOpen(shareMenuOpen === index ? null : index);
                  }}
                  className="absolute top-4 right-4 p-2 bg-gray-900/50 hover:bg-gray-900/75 rounded-full transition-all duration-300 z-20"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                
                {/* Menu de compartilhamento */}
                {shareMenuOpen === index && (
                  <div 
                    className="absolute top-16 right-4 bg-gray-800 rounded-lg shadow-xl z-30 p-2 w-48"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => handleShare('whatsapp', `Restaurante ${index + 1}`)}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded-lg w-full transition-colors"
                    >
                      <Share2 className="w-5 h-5 text-green-400" />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      onClick={() => handleShare('facebook', `Restaurante ${index + 1}`)}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded-lg w-full transition-colors"
                    >
                      <Share2 className="w-5 h-5 text-blue-500" />
                      <span>Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare('twitter', `Restaurante ${index + 1}`)}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded-lg w-full transition-colors"
                    >
                      <Share2 className="w-5 h-5 text-blue-400" />
                      <span>Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare('copy', `Restaurante ${index + 1}`)}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded-lg w-full transition-colors"
                    >
                      <Link className="w-5 h-5 text-gray-400" />
                      <span>Copiar Link</span>
                    </button>
                  </div>
                )}
                
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 transform transition-transform duration-300">
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400">Restaurante {index + 1}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center hover:text-yellow-400 transition-colors">
                    <Star className="h-4 w-4 mr-1" />
                    <span>4.{index + 5}</span>
                  </div>
                  <div className="flex items-center hover:text-blue-400 transition-colors">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>30-45 min</span>
                  </div>
                  <div className="flex items-center hover:text-green-400 transition-colors">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{index + 1}.5 km</span>
                  </div>
                </div>
                {/* Botão "Ver mais" que aparece no hover */}
                <div className="mt-4 overflow-hidden h-0 group-hover:h-10 transition-all duration-300">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full w-full hover:bg-blue-600 transition-colors">
                    Ver mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feed Instagram */}
      <div className="bg-gray-800 py-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Instagram Feed</h2>
            <a href="#" className="flex items-center text-blue-400 hover:text-blue-300">
              <Instagram className="h-5 w-5 mr-2" />
              Seguir @comidaselugaresteresina
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instaImages.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`Post Instagram ${index + 1}`}
                  fill
                  className="object-cover rounded-lg hover:opacity-75 transition"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
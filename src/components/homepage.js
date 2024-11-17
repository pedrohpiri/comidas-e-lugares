// Importando React e os ícones necessários do lucide-react
import React from 'react';
import { Search, Menu, Instagram, Star, Clock, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    // Container principal com fundo escuro e texto branco
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Barra de navegação */}
      <nav className="bg-black p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Lado esquerdo da navbar com logo e nome */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img
                src="/api/placeholder/48/48"
                alt="Logo"
                className="w-8 h-8"
              />
            </div>
            <span className="font-bold text-xl">Comidas e Lugares</span>
          </div>
          
          {/* Lado direito da navbar com busca e menu */}
          <div className="flex items-center space-x-6">
            {/* Campo de busca - visível apenas em telas médias ou maiores */}
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

      {/* Seção Hero com imagem de fundo */}
      <div className="relative h-96">
        <img
          src="/api/placeholder/1920/600"
          alt="Featured"
          className="w-full h-full object-cover brightness-50"
        />
        {/* Texto sobreposto na imagem */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Descubra Teresina
            </h1>
            <p className="text-xl mb-8">Os melhores lugares para comer desde 2015</p>
          </div>
        </div>
      </div>

      {/* Seção de Categorias */}
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Map através das categorias para criar os cards */}
          {['Luis Correia', 'Utilidade', 'Peixe', 'Mercado'].map((category) => (
            <div key={category} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4"></div>
              <span className="font-medium">{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Seção Trending da Semana */}
      <div className="container mx-auto py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Trending da Semana</h2>
          <button className="text-blue-400 hover:text-blue-300">Ver todos</button>
        </div>
        {/* Grid de cards de restaurantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/400/300"
                alt="Food"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Nome do Restaurante</h3>
                {/* Informações do restaurante com ícones */}
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    <span>4.5</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>30-45 min</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>2.5 km</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de integração com Instagram */}
      <div className="bg-gray-800 py-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Instagram Feed</h2>
            <a href="#" className="flex items-center text-blue-400 hover:text-blue-300">
              <Instagram className="h-5 w-5 mr-2" />
              Seguir @comidaselugaresteresina
            </a>
          </div>
          {/* Grid de fotos do Instagram */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square">
                <img
                  src="/api/placeholder/300/300"
                  alt="Instagram post"
                  className="w-full h-full object-cover rounded-lg hover:opacity-75 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
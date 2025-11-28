import React from 'react';
import ProductCard from './components/ProductCard';

function App() {
  // Example product data
  const products = [
    {
      id: '1',
      name: 'Smartphone X',
      description: 'A powerful smartphone with a stunning display.',
      price: 699.99,
      imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=SmartphoneX'
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Immersive sound with comfortable earcups.',
      price: 199.99,
      imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Headphones'
    },
    {
      id: '3',
      name: 'Smartwatch Pro',
      description: 'Track your fitness and stay connected.',
      price: 249.99,
      imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Smartwatch'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow p-6 mb-8 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Mobile E-commerce</h1>
      </header>
      <main className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

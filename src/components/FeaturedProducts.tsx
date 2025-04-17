import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag } from 'react-icons/fi';

type ProductImage = {
  name: string;
  imageUrl: string;
};

const FeaturedProducts: React.FC = () => {
  const [images, setImages] = useState<ProductImage[]>([]);
  const backendURL = 'https://uzosolutions.com';

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${backendURL}/api/uploads`);
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Promotional Items</h2>
          <p className="mt-4 text-xl text-red-600">Price is inclusive of branding</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">Promotional item</h3>
                <p className="text-sm text-gray-500">Name: {item.name}</p>
                <div className="mt-3 flex justify-between">
                  <button 
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="Add to cart"
                  >
                    <FiShoppingBag className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

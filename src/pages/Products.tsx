import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag } from 'react-icons/fi';

// Computers & Laptops
import laptop1 from '../assets/Computers & Laptops/laptop1.jpg';
import laptop2 from '../assets/Computers & Laptops/laptop2.jpg';
import laptop3 from '../assets/Computers & Laptops/laptop3.jpg';
import laptop4 from '../assets/Computers & Laptops/laptop4.jpg';
import laptop5 from '../assets/Computers & Laptops/laptop5.jpg';
import laptop6 from '../assets/Computers & Laptops/laptop6.jpg';
import laptop7 from '../assets/Computers & Laptops/laptop7.jpg';
import laptop8 from '../assets/Computers & Laptops/laptop8.jpg';
import laptop9 from '../assets/Computers & Laptops/laptop9.jpg';
import laptop10 from '../assets/Computers & Laptops/laptop10.jpg';
import laptop11 from '../assets/Computers & Laptops/laptop11.jpg';
import laptop12 from '../assets/Computers & Laptops/laptop12.jpg';
import laptop13 from '../assets/Computers & Laptops/laptop13.jpg';
import laptop14 from '../assets/Computers & Laptops/laptop14.jpg';
import laptop15 from '../assets/Computers & Laptops/laptop15.jpg';
import laptop16 from '../assets/Computers & Laptops/laptop16.jpg';
import laptop17 from '../assets/Computers & Laptops/laptop17.jpg';
import laptop18 from '../assets/Computers & Laptops/laptop18.jpg';
import laptop19 from '../assets/Computers & Laptops/laptop19.jpg';
import laptop20 from '../assets/Computers & Laptops/laptop20.jpg';
import laptop21 from '../assets/Computers & Laptops/laptop21.jpg';
import laptop22 from '../assets/Computers & Laptops/laptop22.jpg';
import laptop23 from '../assets/Computers & Laptops/laptop23.jpg';
import laptop24 from '../assets/Computers & Laptops/laptop24.jpg';
import laptop25 from '../assets/Computers & Laptops/laptop25.jpg';
import laptop26 from '../assets/Computers & Laptops/laptop26.jpg';
import laptop27 from '../assets/Computers & Laptops/laptop27.jpg';
import laptop28 from '../assets/Computers & Laptops/laptop28.jpg';
import laptop29 from '../assets/Computers & Laptops/laptop29.jpg';
import laptop30 from '../assets/Computers & Laptops/laptop30.jpg';
import laptop31 from '../assets/Computers & Laptops/laptop31.jpg';

// Mouses
import mouse1 from '../assets/Mouses/mouse1.jpg';
import mouse2 from '../assets/Mouses/mouse2.jpg';
import mouse3 from '../assets/Mouses/mouse3.jpg';
import mouse4 from '../assets/Mouses/mouse4.jpg';
import mouse5 from '../assets/Mouses/mouse5.jpg';
import mouse6 from '../assets/Mouses/mouse6.jpg';
import mouse7 from '../assets/Mouses/mouse7.jpg';
import mouse8 from '../assets/Mouses/mouse8.jpg';
import mouse9 from '../assets/Mouses/mouse9.jpg';
import mouse10 from '../assets/Mouses/mouse10.jpg';

// Photocopiers and Printers
import photocopier1 from '../assets/Photocopiers and Printers/photocopier1.jpg';
import photocopier2 from '../assets/Photocopiers and Printers/photocopier2.jpg';
import photocopier3 from '../assets/Photocopiers and Printers/photocopier3.jpg';
import printer1 from '../assets/Photocopiers and Printers/printer1.jpg';
import printer2 from '../assets/Photocopiers and Printers/printer2.jpg';
import printer3 from '../assets/Photocopiers and Printers/printer3.jpg';

// Other Accessories
import item1 from '../assets/Other Accessories/item1.jpg';
import item2 from '../assets/Other Accessories/item2.jpg';
import item3 from '../assets/Other Accessories/item3.jpg';
import item4 from '../assets/Other Accessories/item4.jpg';
import item5 from '../assets/Other Accessories/item5.jpg';
import item6 from '../assets/Other Accessories/item6.jpg';
import item7 from '../assets/Other Accessories/item7.jpg';
import item8 from '../assets/Other Accessories/item8.jpg';
import item9 from '../assets/Other Accessories/item9.jpg';

interface Product {
  id: string;
  category: string;
  image: string;
}

const Products: React.FC = () => {
  // Create arrays of all imported images
  const laptopImages = [
    laptop1, laptop2, laptop3, laptop4, laptop5, laptop6, laptop7, laptop8, laptop9, laptop10, 
    laptop11, laptop12, laptop13, laptop14, laptop15, laptop16, laptop17, laptop18, laptop19, laptop20, 
    laptop21, laptop22, laptop23, laptop24, laptop25, laptop26, laptop27, laptop28, laptop29, laptop30, laptop31
  ];
  
  const mouseImages = [
    mouse1, mouse2, mouse3, mouse4, mouse5, mouse6, mouse7, mouse8, mouse9, mouse10
  ];
  
  const photocopierImages = [
    photocopier1, photocopier2, photocopier3,
  ];
  
  const printerImages = [
    printer1, printer2, printer3,
  ];
  
  const accessoryImages = [
    item1, item2, item3, item4, item5, item6, item7, item8, item9
  ];

  // All products data
  const allProducts: Product[] = [
    // Computers & Laptops
    ...laptopImages.map((image, index) => ({
      id: `laptop-${index + 1}`,
      category: 'Computers & Laptops',
      image: image
    })),
    
    // Mouses
    ...mouseImages.map((image, index) => ({
      id: `mouse-${index + 1}`,
      category: 'Mouses',
      image: image
    })),
    
    // Photocopiers
    ...photocopierImages.map((image, index) => ({
      id: `photocopier-${index + 1}`,
      category: 'Photocopiers and Printers',
      image: image
    })),
    
    // Printers
    ...printerImages.map((image, index) => ({
      id: `printer-${index + 1}`,
      category: 'Photocopiers and Printers',
      image: image
    })),
    
    // Other Accessories
    ...accessoryImages.map((image, index) => ({
      id: `item-${index + 1}`,
      category: 'Other Accessories',
      image: image
    }))
  ];

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filterProducts = (category: string) => {
    setActiveCategory(category);
    setFilteredProducts(category === 'All' ? allProducts : allProducts.filter(p => p.category === category));
  };

  const categories: string[] = [
    'All',
    'Computers & Laptops',
    'Mouses',
    'Photocopiers and Printers',
    'Other Accessories'
  ];

  return (
    <div className="py-12 px-4 mt-9 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Our Products</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileTap={{ scale: 0.95 }}
                onClick={() => filterProducts(category)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 relative"
            >
              <div className="w-full aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md"
              >
                <FiShoppingBag className="h-5 w-5 text-blue-600" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
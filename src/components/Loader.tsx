import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/business-logo.png";

const Loader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
    >
      <div className="text-center">
        {/* Your logo with animation */}
        <motion.img
          src={logo}
          alt="UZO Business Solutions"
          className="h-16 w-auto mx-auto mb-6"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index: number) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-blue-600 rounded-full"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </div>
        
        <motion.p
          className="mt-4 text-gray-600 font-medium"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const phrases: string[] = [
    'IT solutions',
    'General supplies',
    'computer sales',
    'assorted items as per your requirements'
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => 
          (prevIndex + 1) % phrases.length
        );
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);

  return (
    <div className="relative bg-gradient-to-r mt-16 from-blue-700 to-blue-600 text-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            UZO <span className="text-red-600">BUSINESS</span> SOLUTIONS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl mb-6 md:mb-8 mx-auto flex flex-col items-center justify-center min-h-[60px] md:min-h-[72px]"
          >
            <div className="text-center">
              <p>Your trusted partner for</p>
              <div className="h-8 md:h-10 flex items-center justify-center">
                <span className="text-black font-medium">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              <p>in Nairobi</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/services"
              className="bg-white text-blue-700 px-4 py-2 md:px-6 md:py-3 rounded-md font-medium shadow-md text-sm md:text-base"
            >
              Our Services
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="bg-transparent border-2 border-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition-colors text-sm md:text-base"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold sm:text-4xl mb-6"
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl mb-8 max-w-3xl mx-auto"
        >
          Contact us today for all your IT and business supply needs
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-8"
        >
          <div className="flex items-center justify-center">
            <FiPhone className="mr-2" />
            <a href="tel:0712138543" className="hover:underline">0712138543</a>
          </div>
          <div className="flex items-center justify-center">
            <FiMail className="mr-2" />
            <a href="mailto:uzobusiness@gmail.com" className="hover:underline">uzobusinesss@gmail.com</a>
          </div>
        </motion.div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md font-medium shadow-lg text-lg"
        >
          Get In Touch
        </motion.a>
      </div>
    </section>
  );
};

export default CallToAction;
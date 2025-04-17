import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptop,
  FaPrint,
  FaNetworkWired,
  FaTools,
  FaBoxes,
  FaServer
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

interface ServiceCategory {
  title: string;
  icon: React.ReactNode;
  services: string[];
}

const Services: React.FC = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      title: "IT Equipment Sales & Repair",
      icon: <FaLaptop className="text-4xl text-blue-600" />,
      services: [
        "Computer & Laptop Sales",
        "Phone Sales & Repair",
        "Printer & Copier Sales",
        "UPS Systems & Accessories",
        "Hardware Upgrades"
      ]
    },
    {
      title: "Networking Solutions",
      icon: <FaNetworkWired className="text-4xl text-blue-600" />,
      services: [
        "Network Cabling & Installation",
        "CCTV Camera Installation",
        "Structured Wiring",
        "Wi-Fi Network Setup",
        "Network Security Solutions"
      ]
    },
    {
      title: "Printing & Graphic Design",
      icon: <FaPrint className="text-4xl text-blue-600" />,
      services: [
        "Business Cards & Letterheads",
        "Flyers, Brochures & Posters",
        "Banners & Signage",
        "Invoices & Receipt Books",
        "Custom Stamps & Seals"
      ]
    },
    {
      title: "Office Supplies",
      icon: <FaBoxes className="text-4xl text-blue-600" />,
      services: [
        "All Toners & Cartridges",
        "Keyboards & Mice",
        "Flash Disks & Memory Cards",
        "Stationery & Writing Materials",
        "Empty CD/DVDs"
      ]
    },
    {
      title: "Software & Development",
      icon: <FaServer className="text-4xl text-blue-600" />,
      services: [
        "Custom Software Development",
        "Website Design & Development",
        "Business Management Systems",
        "POS System Installation",
        "Database Solutions"
      ]
    },
    {
      title: "Additional Services",
      icon: <FaTools className="text-4xl text-blue-600" />,
      services: [
        "IT Consultancy",
        "Equipment Maintenance",
        "Data Recovery",
        "Virus Removal",
        "On-Site Technical Support"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen mt-9 bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-xl text-red-600 max-w-3xl mx-auto"
          >
            Comprehensive IT and business solutions tailored to meet your specific needs
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {category.title}
                  </h2>
                </div>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="/contact"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-blue-600 font-medium text-sm"
                >
                  Request this service
                  <FiArrowRight className="ml-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-700 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            We specialize in tailored IT and business solutions. Contact us to discuss your specific requirements.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-md font-medium shadow-md"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
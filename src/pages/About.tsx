import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaServer, 
  FaNetworkWired, 
  FaLaptop, 
  FaMobileAlt,
  FaPrint,
  FaIdCard,
  FaCode,
  FaShieldAlt,
  FaTools
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import teamImage from '../assets/team.jpg';
import serviceImage from '../assets/services.png';

interface Service {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const About: React.FC = () => {
  const services: Service[] = [
    {
      icon: <FaPrint className="text-blue-600 text-2xl" />,
      title: "Printing/Graphic Design",
      items: ["Business Cards", "Letterheads", "Flyers", "Brochures", "Banners"]
    },
    {
      icon: <FaCode className="text-blue-600 text-2xl" />,
      title: "Web/Software Development",
      items: ["Business Websites", "Mobile Applications", "Custom Software", "E-Commerce", "POS Systems"]
    },
    {
      icon: <FaLaptop className="text-blue-600 text-2xl" />,
      title: "Computer Sales/Repair",
      items: ["Laptops", "Desktops", "Accessories", "Hardware Repair", "Software Installation"]
    },
    {
      icon: <FaNetworkWired className="text-blue-600 text-2xl" />,
      title: "Network Systems",
      items: ["Cabling", "CCTV Installation", "Wi-Fi Setup", "Network Security", "Server Setup"]
    },
    {
      icon: <FaIdCard className="text-blue-600 text-2xl" />,
      title: "ID Cards",
      items: ["Employee IDs", "Student IDs", "Access Cards", "Custom Designs", "Bulk Printing"]
    },
    {
      icon: <FaTools className="text-blue-600 text-2xl" />,
      title: "Support & Maintenance",
      items: ["IT Consultancy", "System Upgrades", "Data Recovery", "Virus Removal", "On-Site Support"]
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
            About UZO Business Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-xl text-red-600 max-w-3xl mx-auto"
          >
            Your trusted ICT partner for comprehensive technology solutions
          </motion.p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              UZO Business Solutions is an Information and Telecommunication Technology company specializing in providing both computer products and services to businesses of all sizes - small, medium, and large enterprises.
            </p>
            <p className="text-gray-600 mb-6">
              We are particularly focused on delivering comprehensive hardware solutions, software systems, network infrastructure, and ongoing support/maintenance services. Our commitment is to provide the best IT services and products at competitive prices, tailored to your specific business needs.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
              <p className="text-gray-800 italic">
                "We would love to work with your organization, company, or firm. Our team is dedicated to delivering reliable, innovative solutions that drive your business forward."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={teamImage} 
              alt="UZO Business Solutions team" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Our Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-12">Our Products & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-blue-100 p-3 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
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
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:order-last"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-4">
              At UZO Business Solutions, we understand that technology is the backbone of modern business operations. That's why we're committed to:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <FaShieldAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Providing reliable, secure solutions that protect your business data</span>
              </li>
              <li className="flex items-start">
                <FaTools className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Offering prompt maintenance and support services</span>
              </li>
              <li className="flex items-start">
                <FaMobileAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Delivering customized solutions that grow with your business</span>
              </li>
              <li className="flex items-start">
                <FaServer className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Ensuring your IT infrastructure remains operational and efficient</span>
              </li>
            </ul>
            <motion.a
              href="/contact"
              whileHover={{ x: 5 }}
              className="inline-flex items-center text-blue-600 font-medium"
            >
              Get a free consultation
              <FiArrowRight className="ml-2" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={serviceImage} 
              alt="UZO Business Solutions services" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-blue-700 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to enhance your business technology?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Whether you need hardware, software, networking solutions, or ongoing support, our team is ready to deliver exceptional service at competitive prices.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-md font-medium shadow-md"
          >
            Contact Our Team
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
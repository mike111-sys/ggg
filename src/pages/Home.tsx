import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptop,
  FaMobileAlt,
  FaPrint,
  FaNetworkWired,
  FaTools,
  FaBoxOpen,
  FaHeadset
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import FeaturedProducts from '../components/FeaturedProducts';
import CallToAction from '../components/CallToAction';
import work from '../assets/work.jpg';
import Aboutt from '../components/Aboutt';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}



const Home: React.FC = () => {
  const services: Service[] = [
    {
      icon: <FaLaptop className="text-4xl text-blue-600" />,
      title: "Computer Sales & Repair",
      description: "High-quality computers and expert repair services",
      items: ["Laptops", "Desktops", "Hardware Upgrades", "Software Installation"]
    },
    {
      icon: <FaMobileAlt className="text-4xl text-blue-600" />,
      title: "Phone Sales & Repair",
      description: "Latest smartphones and professional repair services",
      items: ["Screen Replacement", "Battery Change", "Software Issues", "Accessories"]
    },
    {
      icon: <FaPrint className="text-4xl text-blue-600" />,
      title: "Printers & Copiers",
      description: "Sales and maintenance for all office equipment",
      items: ["Inkjet Printers", "Laser Printers", "Multifunction Devices", "Toners"]
    },
    {
      icon: <FaNetworkWired className="text-4xl text-blue-600" />,
      title: "Networking Solutions",
      description: "Complete networking infrastructure services",
      items: ["Cabling", "CCTV Installation", "Wi-Fi Setup", "Network Security"]
    },
    {
      icon: <FaTools className="text-4xl text-blue-600" />,
      title: "IT Support",
      description: "Comprehensive technical support services",
      items: ["Troubleshooting", "System Maintenance", "Data Recovery", "Virus Removal"]
    },
    {
      icon: <FaBoxOpen className="text-4xl text-blue-600" />,
      title: "Office Supplies",
      description: "All your business stationery needs",
      items: ["Toners", "Cartridges", "Stationery", "Flash Disks"]
    }
  ];

  return (
    <div className="bg-white mt-5">
      {/* Hero Section */}
      <HeroSection />

      {/* Aboutt */}
      <Aboutt />
      
      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-xl text-red-600">
              Comprehensive solutions for all your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts  />

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">About UZO Business Solutions</h2>
              <p className="mt-4 text-lg text-gray-600">
                Based in Nairobi, we are your trusted partner for IT solutions and general business supplies. 
                With years of experience, we provide quality products and reliable services to businesses of all sizes.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaHeadset className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-700">
                      <span className="font-medium">Expert Support:</span> Our team is always ready to assist with any technical issues.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaTools className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-base text-gray-700">
                      <span className="font-medium">Quality Assurance:</span> We only provide products and services that meet our high standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <motion.a
                  href="/about"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-blue-600 font-medium"
                >
                  Learn more about us
                  <FiArrowRight className="ml-2" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-10 lg:mt-0"
            >
              <img
                className="w-full rounded-lg shadow-lg"
                src={work}
                alt="UZO Business Solutions office"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Home;
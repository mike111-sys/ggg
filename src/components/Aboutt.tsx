import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiServer, FiCode, FiHardDrive, FiShield } from 'react-icons/fi';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Aboutt: React.FC = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const services: ServiceItem[] = [
    {
      icon: <FiHardDrive className="text-3xl text-blue-600" />,
      title: "Hardware Solutions",
      description: "High-quality computer systems and peripherals tailored to your needs"
    },
    {
      icon: <FiCode className="text-3xl text-blue-600" />,
      title: "Software Systems",
      description: "Custom and off-the-shelf software to streamline your operations"
    },
    {
      icon: <FiServer className="text-3xl text-blue-600" />,
      title: "Network Infrastructure",
      description: "Reliable networking solutions for seamless connectivity"
    },
    {
      icon: <FiShield className="text-3xl text-blue-600" />,
      title: "Support & Maintenance",
      description: "Proactive IT support to keep your business running smoothly"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About UZO Business Solutions
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-red-600 max-w-3xl mx-auto">
            UZO Business Solutions is a leading ICT firm delivering top-tier technology products and services to businesses of all sizes. We're committed to providing cost-effective, customized solutions that drive your growth.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-blue-50 p-6 sm:p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h3>
          <p className="text-gray-700">
            We combine technical expertise with business understanding to deliver solutions that are not just innovative, but also practical and results-driven. Whether you're a startup or an enterprise, we have the right technology to support your success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutt;
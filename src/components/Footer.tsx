import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaArrowRight,
  FaTiktok,
  FaWhatsapp,
  FaInstagram
} from 'react-icons/fa';
import { 
  FiHome, 
  FiInfo, 
  FiSettings, 
  FiShoppingBag, 
  FiMail,
} from 'react-icons/fi';
import logo from "../assets/business-logo.png";

interface NavItem {
  path: string;
  name: string;
  icon: React.ReactNode;
}

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

interface ContactItem {
  icon: React.ReactNode;
  text: string;
  path?: string;
}

interface FooterSection {
  title: string;
  items: (NavItem | ContactItem)[];
}

const Footer: React.FC = () => {
  const navItems: NavItem[] = [
    { path: '/', name: 'Home', icon: <FiHome className="inline" /> },
    { path: '/about', name: 'About', icon: <FiInfo className="inline" /> },
    { path: '/services', name: 'Services', icon: <FiSettings className="inline" /> },
    { path: '/products', name: 'Products', icon: <FiShoppingBag className="inline" /> },
    { path: '/contact', name: 'Contact', icon: <FiMail className="inline" /> }
  ];

  const socialLinks: SocialLink[] = [
    { icon: <FaTiktok size={18} />, url: "#" },
    { icon: <FaInstagram size={18} />, url: "#" },
    { icon: <FaWhatsapp size={18} />, url: "#" },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 150,
        damping: 12
      }
    }
  };

  const mobileSections: FooterSection[] = [
    { title: "Quick Links", items: navItems },
    { 
      title: "Contact", 
      items: [
        { icon: <FaMapMarkerAlt className="inline mr-2" />, text: "JAMIA NAIL 1st floor NBI (Near Nation Centre)" },
        { icon: <FaPhone className="inline mr-2" />, text: "0712138543" },
        { icon: <FaEnvelope className="inline mr-2" />, text: "uzobusinesss@gmail.com" }
      ] 
    }
  ];

  return (
    <motion.footer 
      className="bg-white text-gray-700 border-t border-gray-200 py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      <div className="container mx-auto px-4">
        {/* Mobile Accordion Layout */}
        <div className="md:hidden space-y-6">
          <motion.div variants={item}>
            <Link to="/" className="flex items-center justify-center mb-6">
              <img 
                src={logo} 
                alt="UZO Business Solutions" 
                className="h-10 w-auto mr-2"
              />
              <span className="text-xl font-semibold text-gray-800">
                UZO Solutions
              </span>
            </Link>
          </motion.div>

          {mobileSections.map((section, i) => (
            <motion.div key={i} variants={item} className="border-b border-gray-100 pb-4">
              <details className="group" open={i === 0}>
                <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer list-none">
                  <span>{section.title}</span>
                  <span className="transition-transform group-open:rotate-180">
                    <FaArrowRight className="text-blue-500" />
                  </span>
                </summary>
                <div className="mt-3 space-y-2 pl-2">
                  {section.items.map((item, j) => (
                    'path' in item ? (
                      <Link 
                        key={j}
                        to={item.path || '/'}
                        className="flex items-center py-1.5 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item.icon}
                        <span className="ml-2">{ 'name' in item && <span>{item.name}</span> }
                        </span>
                      </Link>
                    ) : (
                      <div key={j} className="flex items-start py-1.5 text-gray-600">
                        {item.icon}
                        <span className="ml-2">{item.text}</span>
                      </div>
                    )
                  ))}
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div variants={item} className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="UZO Business Solutions" 
                className="h-12 w-auto mr-2"
              />
              <span className="text-xl font-semibold text-gray-800">
                UZO Business Solutions
              </span>
            </Link>
            <p className="text-gray-600">
              Your one-stop shop for IT solutions and general business supplies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, color: "#3b82f6" }}
                  className="text-gray-500 hover:text-blue-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={item.path} 
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-blue-500" />
                <p className="text-gray-600">
                  JAMIA NAIL 1st floor NBI (Near Nation Centre)
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-blue-500" />
                <a href="tel:0712138543" className="text-gray-600 hover:text-blue-600 transition-colors">
                  0712138543
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-500" />
                <a href="mailto:uzobusiness@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  uzobusinesss@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Newsletter</h3>
            <p className="text-gray-600">
              Subscribe for updates and special offers
            </p>
            <form className="mt-2 space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          className="border-t border-gray-200 mt-8 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm">
            Powered by{' '}
            <a href="https://ujuzicreations.co.ke" className="text-blue-500 hover:underline">
              Ujuzi Digital Creations
            </a>. All rights reserved. &copy; {new Date().getFullYear()}.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
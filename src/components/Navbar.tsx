import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiInfo, FiSettings, FiShoppingBag, FiMail } from 'react-icons/fi';
import logo from "../assets/business-logo.png";

interface NavItem {
  path: string;
  name: string;
  icon: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const navItems: NavItem[] = [
    { path: '/', name: 'Home', icon: <FiHome className="inline mr-2" /> },
    { path: '/about', name: 'About', icon: <FiInfo className="inline mr-2" /> },
    { path: '/services', name: 'Services', icon: <FiSettings className="inline mr-2" /> },
    { path: '/products', name: 'Products', icon: <FiShoppingBag className="inline mr-2" /> },
    { path: '/contact', name: 'Contact', icon: <FiMail className="inline mr-2" /> }
  ];

  const menuVariants = {
    open: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        type: "spring" as const, 
        stiffness: 300, 
        damping: 20,
        when: "beforeChildren" as const,
        staggerChildren: 0.1
      }
    },
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { 
        type: "spring" as const, 
        stiffness: 300,
        damping: 20,
        when: "afterChildren" as const
      } 
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring" as const, stiffness: 300 }}
      className="bg-white text-gray-800 shadow-md fixed w-full z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="UZO Business Solutions Logo" 
                className="h-10 w-auto mr-2"
              />
              <span className="text-xl font-semibold text-red-600 hidden sm:inline">
                UZO Business Solutions
              </span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item: NavItem) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.path} 
                  className="text-gray-700 hover:text-blue-600 font-medium flex items-center"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile menu with animation */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="md:hidden bg-white overflow-hidden"
          style={{ originY: 0 }}
        >
          <div className="pt-2 pb-3 space-y-1 px-2">
            {navItems.map((item: NavItem) => (
              <motion.div
                key={item.path}
                variants={linkVariants}
                className="py-2"
              >
                <Link 
                  to={item.path} 
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
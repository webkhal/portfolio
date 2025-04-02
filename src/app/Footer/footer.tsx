"use client";
import React, { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaHeart 
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState(2023); // Default fallback

  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialItems = [
    { 
      href: "https://github.com/webkhal", 
      icon: <FaGithub size={18} />, 
      label: "GitHub" 
    },
    { 
      href: "https://linkedin.com/in/webkhal", 
      icon: <FaLinkedin size={18} />, 
      label: "LinkedIn" 
    },
    { 
      href: "mailto:khalidcodes034@gmail.com", 
      icon: <FaEnvelope size={18} />, 
      label: "Email" 
    }
  ];

  if (!mounted) {
    // Return simplified server-side version
    return (
      <footer className="bg-gray-100 text-gray-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <div className="flex space-x-4">
                {socialItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="p-3 rounded-full text-gray-700"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-sm text-center">
              <p>© 2023 Khalid Ahmed Khan</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="mb-6">
            <div className="flex space-x-4">
              {socialItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-all"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-center">
            <p className="flex items-center">
              Made with <FaHeart className="mx-1 text-red-500" /> © {currentYear} Khalid Ahmed Khan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
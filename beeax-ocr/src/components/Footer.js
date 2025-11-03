import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiTwitter, 
  FiLinkedin, 
  FiGithub 
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Features', path: '/features' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'API Docs', path: '/docs' },
      { label: 'Status', path: '/status' }
    ],
    Company: [
      { label: 'About', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press', path: '/press' }
    ],
    Support: [
      { label: 'Help Center', path: '/help' },
      { label: 'Contact', path: '/contact' },
      { label: 'Community', path: '/community' },
      { label: 'Feedback', path: '/feedback' }
    ]
  };

  const socialLinks = [
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiGithub, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-deep-brown text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-honey-yellow rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-warm-beige rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-honey-yellow rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full honey-gradient flex items-center justify-center">
                  <span className="text-2xl">🐝</span>
                </div>
                <span className="text-2xl font-display font-bold text-gradient">
                  Beeax OCR
                </span>
              </div>
              <p className="text-warm-beige leading-relaxed mb-6">
                Advanced OCR solutions powered by AI, helping businesses extract valuable 
                insights from documents with unprecedented accuracy and speed.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-honey-yellow" />
                <span className="text-warm-beige">hello@beeax.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-honey-yellow" />
                <span className="text-warm-beige">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5 text-honey-yellow" />
                <span className="text-warm-beige">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-warm-beige hover:text-honey-yellow transition-colors duration-300 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-warm-beige border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex space-x-4 mb-4 md:mb-0"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-warm-beige bg-opacity-20 rounded-full flex items-center justify-center text-warm-beige hover:bg-honey-yellow hover:text-deep-brown transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-warm-beige bg-opacity-20 border border-warm-beige border-opacity-30 text-white placeholder-warm-beige focus:outline-none focus:border-honey-yellow transition-colors"
              />
              <button className="btn-primary px-6 py-2">
                Subscribe
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-beige border-opacity-20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-warm-beige text-sm mb-2 md:mb-0">
              © {currentYear} Beeax OCR. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-warm-beige hover:text-honey-yellow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-warm-beige hover:text-honey-yellow transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-warm-beige hover:text-honey-yellow transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
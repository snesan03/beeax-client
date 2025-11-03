import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiZap, FiShield, FiGlobe } from 'react-icons/fi';
import heroImage from '../assets/hero-bee.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-display font-bold leading-tight"
            >
              <span className="text-gradient">Intelligent</span>
              <br />
              <span className="text-deep-brown">Text Extraction</span>
              <br />
              <span className="text-gradient">Powered by AI</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-earthy-brown leading-relaxed max-w-lg"
            >
              Transform your documents into actionable data with our advanced OCR technology. 
              Extract text from images, PDFs, and scanned documents with unprecedented accuracy.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="#upload"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <span>Start Extracting</span>
                <FiZap className="w-5 h-5" />
              </Link>
              <Link
                to="/features"
                className="btn-secondary text-lg px-8 py-4"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-honey-yellow">98%</div>
                <div className="text-sm text-earthy-brown">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-honey-yellow">100+</div>
                <div className="text-sm text-earthy-brown">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-honey-yellow">24/7</div>
                <div className="text-sm text-earthy-brown">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="AI-powered OCR technology"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-honey-yellow rounded-full opacity-20"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-warm-beige rounded-full opacity-30"
            />
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          <div className="card glass text-center">
            <div className="w-16 h-16 honey-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <FiZap className="w-8 h-8 text-deep-brown" />
            </div>
            <h3 className="text-xl font-semibold text-deep-brown mb-2">
              Lightning Fast
            </h3>
            <p className="text-earthy-brown">
              Process documents in seconds with our optimized AI algorithms
            </p>
          </div>

          <div className="card glass text-center">
            <div className="w-16 h-16 honey-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <FiShield className="w-8 h-8 text-deep-brown" />
            </div>
            <h3 className="text-xl font-semibold text-deep-brown mb-2">
              Secure & Private
            </h3>
            <p className="text-earthy-brown">
              Your documents are processed securely with end-to-end encryption
            </p>
          </div>

          <div className="card glass text-center">
            <div className="w-16 h-16 honey-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <FiGlobe className="w-8 h-8 text-deep-brown" />
            </div>
            <h3 className="text-xl font-semibold text-deep-brown mb-2">
              Global Support
            </h3>
            <p className="text-earthy-brown">
              Extract text from documents in over 100 languages worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
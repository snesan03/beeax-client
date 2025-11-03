import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import OCRUploader from '../components/OCRUploader';
import FeatureCard from '../components/FeatureCard';
import { 
  FiImage, 
  FiFileText, 
  FiDatabase, 
  FiCloud, 
  FiCode, 
  FiTrendingUp 
} from 'react-icons/fi';

const Home = () => {
  const features = [
    {
      icon: FiImage,
      title: 'Multi-Format Support',
      description: 'Process JPEG, PNG, PDF, TIFF, and BMP files with equal precision',
      color: 'honey-yellow'
    },
    {
      icon: FiFileText,
      title: 'Handwriting Recognition',
      description: 'Advanced AI models that can read and extract handwritten text',
      color: 'earthy-brown'
    },
    {
      icon: FiDatabase,
      title: 'Batch Processing',
      description: 'Upload and process multiple documents simultaneously',
      color: 'deep-brown'
    },
    {
      icon: FiCloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with popular cloud storage services',
      color: 'honey-yellow'
    },
    {
      icon: FiCode,
      title: 'API Access',
      description: 'Developer-friendly REST API for custom integrations',
      color: 'earthy-brown'
    },
    {
      icon: FiTrendingUp,
      title: 'Real-time Analytics',
      description: 'Monitor processing metrics and accuracy statistics',
      color: 'deep-brown'
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* OCR Upload Section */}
      <section id="upload" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-brown mb-4">
              Try Our <span className="text-gradient">OCR Technology</span>
            </h2>
            <p className="text-xl text-earthy-brown max-w-2xl mx-auto">
              Upload your documents and experience the power of AI-driven text extraction
            </p>
          </motion.div>
          
          <OCRUploader />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-brown mb-4">
              Why Choose <span className="text-gradient">Beeax OCR</span>
            </h2>
            <p className="text-xl text-earthy-brown max-w-2xl mx-auto">
              Discover the features that make our OCR solution the preferred choice for businesses worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard feature={feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card glass-dark text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-warm-beige mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust Beeax OCR for their document processing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4 bg-white text-deep-brown hover:bg-honey-yellow">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
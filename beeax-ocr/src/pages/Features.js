import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiImage, 
  FiFileText, 
  FiLayers, 
  FiGlobe, 
  FiZap, 
  FiShield,
  FiCpu,
  FiEye,
  FiDownload,
  FiSettings
} from 'react-icons/fi';
import ocrTechImage from '../assets/ocr-tech.jpg';

const Features = () => {
  const coreFeatures = [
    {
      icon: FiImage,
      title: 'Multi-Format Document Processing',
      description: 'Support for JPEG, PNG, PDF, TIFF, BMP, and GIF formats with automatic format detection and optimization.',
      details: ['Maximum file size: 10MB', 'Multi-page PDF support', 'Automatic image preprocessing', 'Quality enhancement filters']
    },
    {
      icon: FiGlobe,
      title: '100+ Language Support',
      description: 'Extract text from documents in over 100 languages including complex scripts and special characters.',
      details: ['Latin, Cyrillic, Arabic scripts', 'Asian languages (Chinese, Japanese, Korean)', 'Right-to-left text support', 'Language auto-detection']
    },
    {
      icon: FiFileText,
      title: 'Handwriting Recognition',
      description: 'Advanced AI models trained to recognize and extract handwritten text with high accuracy.',
      details: ['Cursive and print handwriting', 'Multiple handwriting styles', 'Mathematical notation support', 'Signature detection']
    },
    {
      icon: FiLayers,
      title: 'Batch Processing',
      description: 'Process multiple documents simultaneously with our scalable infrastructure.',
      details: ['Up to 50 files per batch', 'Parallel processing', 'Progress tracking', 'Bulk export options']
    }
  ];

  const advancedFeatures = [
    {
      icon: FiCpu,
      title: 'AI-Powered Accuracy',
      description: 'Machine learning models continuously improve recognition accuracy through user feedback and data training.',
      percentage: 98.5
    },
    {
      icon: FiEye,
      title: 'Smart Layout Detection',
      description: 'Automatically detect and preserve document structure including tables, columns, and formatting.',
      percentage: 95.2
    },
    {
      icon: FiZap,
      title: 'Lightning Fast Processing',
      description: 'Optimized algorithms deliver results in seconds, not minutes, for improved workflow efficiency.',
      percentage: 99.9
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2 Type II standards.',
      percentage: 100
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: 'Upload Document',
      description: 'Drag and drop or browse to select your documents'
    },
    {
      step: 2,
      title: 'AI Processing',
      description: 'Our AI analyzes and extracts text with high precision'
    },
    {
      step: 3,
      title: 'Review & Edit',
      description: 'Review extracted text and make corrections if needed'
    },
    {
      step: 4,
      title: 'Export Results',
      description: 'Download in multiple formats or integrate via API'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-deep-brown mb-6">
              Powerful <span className="text-gradient">OCR Features</span>
            </h1>
            <p className="text-xl text-earthy-brown max-w-3xl mx-auto">
              Discover the comprehensive suite of features that make Beeax OCR the most 
              advanced text extraction solution for modern businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-4xl mx-auto mb-20"
          >
            <img
              src={ocrTechImage}
              alt="OCR Technology"
              className="w-full h-64 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-brown to-transparent opacity-50 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Advanced AI Technology</h3>
                <p className="text-lg">Powered by cutting-edge machine learning</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
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
              Core <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-earthy-brown max-w-2xl mx-auto">
              Essential features designed to handle all your document processing needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card glass"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 honey-gradient rounded-2xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-deep-brown" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-deep-brown mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-earthy-brown mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-1">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-deep-brown flex items-center">
                          <span className="w-2 h-2 bg-honey-yellow rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
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
              Advanced <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-xl text-earthy-brown max-w-2xl mx-auto">
              Cutting-edge AI and machine learning for superior performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card glass text-center"
              >
                <div className="w-20 h-20 honey-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-10 h-10 text-deep-brown" />
                </div>
                <h3 className="text-lg font-semibold text-deep-brown mb-3">
                  {feature.title}
                </h3>
                <p className="text-earthy-brown text-sm mb-4">
                  {feature.description}
                </p>
                <div className="text-center">
                  <div className="text-3xl font-bold text-honey-yellow">
                    {feature.percentage}%
                  </div>
                  <div className="text-xs text-deep-brown">Performance</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
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
              Simple <span className="text-gradient">Workflow</span>
            </h2>
            <p className="text-xl text-earthy-brown max-w-2xl mx-auto">
              Get started in minutes with our intuitive 4-step process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 honey-gradient rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-deep-brown">
                      {step.step}
                    </span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-20 w-full h-0.5 bg-honey-yellow opacity-30"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-deep-brown mb-3">
                  {step.title}
                </h3>
                <p className="text-earthy-brown">
                  {step.description}
                </p>
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
              Experience the Future of OCR
            </h2>
            <p className="text-xl text-warm-beige mb-8 max-w-2xl mx-auto">
              Start your free trial today and see why thousands of businesses trust Beeax OCR
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4 bg-white text-deep-brown hover:bg-honey-yellow">
                View API Docs
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;
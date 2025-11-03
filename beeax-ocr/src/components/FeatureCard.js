import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ feature }) => {
  const getColorClasses = (color) => {
    const colors = {
      'honey-yellow': 'bg-honey-yellow text-deep-brown',
      'earthy-brown': 'bg-earthy-brown text-white',
      'deep-brown': 'bg-deep-brown text-white'
    };
    return colors[color] || colors['honey-yellow'];
  };

  return (
    <motion.div
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      className="card glass h-full group"
    >
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl ${getColorClasses(feature.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <feature.icon className="w-8 h-8" />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-deep-brown mb-3 group-hover:text-honey-yellow transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-earthy-brown leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Learn More Link */}
        <div className="mt-6">
          <span className="text-honey-yellow font-medium group-hover:underline cursor-pointer">
            Learn more →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
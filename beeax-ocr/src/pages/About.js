import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiTarget, 
  FiEye, 
  FiAward, 
  FiUser, 
  FiMail, 
  FiLinkedin,
  FiTwitter,
  FiGithub
} from 'react-icons/fi';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      image: '👩‍💼',
      bio: 'Former Google AI researcher with 10+ years in computer vision and OCR technology.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@beeax.com'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      image: '👨‍💻',
      bio: 'Led engineering teams at Microsoft and Amazon, specializing in scalable AI systems.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'marcus@beeax.com'
      }
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      image: '👩‍🔬',
      bio: 'PhD in Computer Vision from MIT, published researcher in OCR and document analysis.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@beeax.com'
      }
    },
    {
      name: 'David Kim',
      role: 'Lead Product Designer',
      image: '👨‍🎨',
      bio: 'Award-winning designer with expertise in creating intuitive user experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@beeax.com'
      }
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Beeax OCR was born from a vision to make document intelligence accessible to everyone.'
    },
    {
      year: '2022',
      title: 'First Product Launch',
      description: 'Released our MVP with core OCR functionality and gained our first 100 customers.'
    },
    {
      year: '2023',
      title: 'AI Breakthrough',
      description: 'Achieved 99% accuracy rate with our new neural network architecture.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded to support 100+ languages and processed over 10 million documents.'
    },
    {
      year: '2025',
      title: 'Enterprise Solutions',
      description: 'Launched enterprise-grade features and custom AI model training services.'
    }
  ];

  const values = [
    {
      icon: FiTarget,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and OCR technology.'
    },
    {
      icon: FiEye,
      title: 'User-Centric',
      description: 'Every feature we build is designed with our users\' needs and feedback in mind.'
    },
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to customer service.'
    }
  ];

  const stats = [
    { label: 'Documents Processed', value: '10M+', suffix: '' },
    { label: 'Languages Supported', value: '100+', suffix: '' },
    { label: 'Customer Satisfaction', value: '98', suffix: '%' },
    { label: 'Processing Accuracy', value: '99.5', suffix: '%' }
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
              About <span className="text-gradient">Beeax OCR</span>
            </h1>
            <p className="text-xl text-earthy-brown max-w-3xl mx-auto">
              We're on a mission to revolutionize how businesses extract and process information 
              from documents, making data accessible and actionable for everyone.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-honey-yellow mb-2">
                  {stat.value}
                  <span className="text-2xl text-deep-brown">{stat.suffix}</span>
                </div>
                <div className="text-earthy-brown">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-brown mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-earthy-brown leading-relaxed">
                <p>
                  Beeax OCR was founded in 2021 by a team of AI researchers and engineers who recognized 
                  the growing need for intelligent document processing in the digital age. What started 
                  as a research project at Stanford University has evolved into a comprehensive platform 
                  that serves millions of users worldwide.
                </p>
                <p>
                  Our name, "Beeax," is inspired by the efficiency and precision of bees in nature. 
                  Just as bees transform nectar into honey, we transform raw document data into 
                  actionable insights. The "ax" represents our cutting-edge technology that slices 
                  through the complexity of document processing.
                </p>
                <p>
                  Today, we're proud to help businesses of all sizes - from startups to Fortune 500 
                  companies - automate their document workflows, reduce manual data entry, and unlock 
                  the value hidden in their documents.
                </p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-honey-yellow to-warm-beige rounded-2xl flex items-center justify-center">
                <div className="text-8xl">🐝</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-deep-brown rounded-full flex items-center justify-center">
                <span className="text-3xl text-white">⚡</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-earthy-brown max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card glass text-center"
              >
                <div className="w-20 h-20 honey-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-deep-brown" />
                </div>
                <h3 className="text-xl font-semibold text-deep-brown mb-4">
                  {value.title}
                </h3>
                <p className="text-earthy-brown">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-earthy-brown max-w-2xl mx-auto">
              From a research project to a global platform serving millions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 px-6">
                  <div className="card glass">
                    <div className="text-honey-yellow text-2xl font-bold mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-deep-brown mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-earthy-brown">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-honey-yellow rounded-full flex items-center justify-center relative z-10">
                  <span className="text-deep-brown font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-earthy-brown max-w-2xl mx-auto">
              The passionate individuals behind Beeax OCR's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card glass text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-honey-yellow to-warm-beige rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold text-deep-brown mb-2">
                  {member.name}
                </h3>
                <p className="text-honey-yellow font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-earthy-brown text-sm mb-6">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-earthy-brown hover:text-honey-yellow transition-colors">
                      <FiLinkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-earthy-brown hover:text-honey-yellow transition-colors">
                      <FiTwitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-earthy-brown hover:text-honey-yellow transition-colors">
                      <FiGithub className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-earthy-brown hover:text-honey-yellow transition-colors">
                      <FiMail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
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
              Let's Connect
            </h2>
            <p className="text-xl text-warm-beige mb-8 max-w-2xl mx-auto">
              Have questions about our technology or interested in joining our team? 
              We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Contact Us
              </button>
              <button className="btn-secondary text-lg px-8 py-4 bg-white text-deep-brown hover:bg-honey-yellow">
                Join Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
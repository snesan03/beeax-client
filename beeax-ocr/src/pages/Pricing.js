import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheck, 
  FiX, 
  FiZap, 
  FiShield, 
  FiUsers, 
  FiTrendingUp,
  FiInfo
} from 'react-icons/fi';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 9,
      yearlyPrice: 90,
      yearlySave: 18,
      features: [
        { text: '100 pages per month', included: true },
        { text: 'Basic OCR accuracy', included: true },
        { text: 'Email support', included: true },
        { text: 'Standard processing', included: true },
        { text: 'PDF & Image support', included: true },
        { text: 'Batch processing', included: false },
        { text: 'API access', included: false },
        { text: 'Priority support', included: false }
      ],
      highlight: false,
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      monthlyPrice: 29,
      yearlyPrice: 290,
      yearlySave: 58,
      features: [
        { text: '1,000 pages per month', included: true },
        { text: 'Advanced OCR accuracy', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Fast processing', included: true },
        { text: 'All file formats', included: true },
        { text: 'Batch processing up to 10 files', included: true },
        { text: 'Basic API access', included: true },
        { text: 'Phone support', included: false }
      ],
      highlight: true,
      popular: true
    },
    {
      name: 'Business',
      description: 'For enterprises with high-volume needs',
      monthlyPrice: 99,
      yearlyPrice: 990,
      yearlySave: 198,
      features: [
        { text: '5,000 pages per month', included: true },
        { text: 'Premium OCR accuracy', included: true },
        { text: '24/7 phone & email support', included: true },
        { text: 'Lightning fast processing', included: true },
        { text: 'All file formats + handwriting', included: true },
        { text: 'Unlimited batch processing', included: true },
        { text: 'Full API access + webhooks', included: true },
        { text: 'Dedicated account manager', included: true }
      ],
      highlight: false,
      popular: false
    }
  ];

  const enterpriseFeatures = [
    'Custom page volume limits',
    'White-label solutions',
    'On-premise deployment',
    'Custom AI model training',
    'SLA guarantees',
    'Custom integrations',
    'Advanced security features',
    'Dedicated support team'
  ];

  const faqs = [
    {
      question: 'What happens if I exceed my monthly page limit?',
      answer: 'Additional pages are charged at $0.10 per page for Starter, $0.05 for Professional, and $0.02 for Business plans.'
    },
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial with full access to all Professional plan features.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise accounts.'
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
              Simple <span className="text-gradient">Pricing</span> for Everyone
            </h1>
            <p className="text-xl text-earthy-brown max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your needs. All plans include our core OCR technology 
              with flexible pricing that scales with your business.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg font-medium ${
                billingCycle === 'monthly' ? 'text-deep-brown' : 'text-earthy-brown'
              }`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-warm-beige rounded-full transition-colors duration-300"
              >
                <motion.div
                  className="absolute top-1 w-6 h-6 bg-honey-yellow rounded-full"
                  animate={{
                    left: billingCycle === 'monthly' ? '4px' : '36px'
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-lg font-medium ${
                billingCycle === 'yearly' ? 'text-deep-brown' : 'text-earthy-brown'
              }`}>
                Yearly
              </span>
              <span className="bg-honey-yellow text-deep-brown px-3 py-1 rounded-full text-sm font-semibold">
                Save up to 20%
              </span>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-honey-yellow text-deep-brown px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`card glass h-full ${
                  plan.highlight ? 'border-2 border-honey-yellow transform scale-105' : ''
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-deep-brown mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-earthy-brown mb-6">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-deep-brown">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-earthy-brown">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-honey-yellow mb-4">
                        Save ${plan.yearlySave} per year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        {feature.included ? (
                          <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <FiX className="w-5 h-5 text-red-500 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? 'text-deep-brown' : 'text-earthy-brown'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.highlight
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    Choose {plan.name}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enterprise Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }
            }
            className="card glass-dark text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-warm-beige mb-8 max-w-2xl mx-auto">
              Custom solutions for large organizations with specific requirements and high-volume processing needs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FiCheck className="w-5 h-5 text-honey-yellow flex-shrink-0" />
                  <span className="text-warm-beige">{feature}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary text-lg px-8 py-4">
              Contact Sales
            </button>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-deep-brown mb-12 text-center">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card glass"
                >
                  <h3 className="text-lg font-semibold text-deep-brown mb-3 flex items-center">
                    <FiInfo className="w-5 h-5 text-honey-yellow mr-2" />
                    {faq.question}
                  </h3>
                  <p className="text-earthy-brown">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-warm-beige mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Beeax OCR to transform their document workflows
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

export default Pricing;
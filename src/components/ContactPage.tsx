import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Building2, Landmark, Circle, Square, Triangle, Building, Cpu, Factory } from 'lucide-react';
import AnimatedText from './AnimatedText';
import FloatingParticles from './FloatingParticles';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    details: ''
  });

  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const getInputClassName = (fieldName: string) => `
    w-full px-4 py-3 rounded-lg transition-all duration-200
    border-2 focus:outline-none
    ${activeField === fieldName 
      ? 'border-[#ED184F]' 
      : 'border-primary/20 hover:border-primary/40'
    }
  `;

  const getLabelClassName = (fieldName: string) => `
    block text-sm font-medium mb-2 cursor-pointer transition-colors duration-200
    ${activeField === fieldName ? 'text-[#ED184F]' : 'text-dark/70 hover:text-primary/70'}
  `;

  const offices = [
    {
      city: "Bengaluru , Karnataka , India",
      icon: <Cpu className="w-8 h-8 text-primary" />,
      gradient: "from-[#ED184F]/10 to-[#893168]/10"
    },
    {
      city: "Ahmedabad , Gujarat , India",
      icon: <Factory className="w-8 h-8 text-primary" />,
      gradient: "from-[#4158D0]/10 to-[#2D3A8C]/10"
    }
  ];

  const animatedShapes = [
    { component: Circle, delay: 0 },
    { component: Square, delay: 0.2 },
    { component: Triangle, delay: 0.4 }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Background Elements */}
      <FloatingParticles />
      <motion.div 
        className="absolute top-40 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/10 to-primary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Create Something <AnimatedText text="Amazing" type="gradient" />
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to start your project? We're here to help bring your vision to life.
          </motion.p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-primary mb-2">GET IN TOUCH</h2>
            <p className="text-2xl text-dark/70 mb-8">Looking for a solution? Let's talk</p>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-dark/60">Email</p>
                  <p className="text-dark">info@uimitra.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-dark/60">India</p>
                  <p className="text-dark">+91-9724823602</p>
                </div>
              </motion.div>
            </div>

            {/* Animated Floating Graphics */}
            <div className="relative h-64 mt-12">
              {/* Circle - Top Left */}
              <motion.div
                className="absolute left-[15%] top-[20%]"
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 15, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#ED184F] bg-transparent" />
              </motion.div>

              {/* Square - Top Right */}
              <motion.div
                className="absolute right-[25%] top-[15%]"
                animate={{ 
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="w-10 h-10 border-2 border-[#ED184F] bg-transparent" />
              </motion.div>

              {/* Triangle - Middle Center */}
              <motion.div
                className="absolute left-[45%] top-[45%]"
                animate={{ 
                  y: [-15, 25, -15],
                  rotate: [0, 360, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <svg width="40" height="35" viewBox="0 0 40 35" fill="none" className="transform-gpu">
                  <path 
                    d="M20 2L37.3205 32H2.67949L20 2Z" 
                    stroke="#ED184F" 
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </motion.div>

              {/* Circle - Bottom Right */}
              <motion.div
                className="absolute right-[20%] bottom-[25%]"
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [10, -10, 10]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <div className="w-10 h-10 rounded-full border-2 border-[#ED184F] bg-transparent" />
              </motion.div>

              {/* Square - Bottom Left */}
              <motion.div 
                className="absolute left-[25%] bottom-[20%]"
                animate={{ 
                  rotate: [-45, 45, -45],
                  scale: [1, 0.9, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="w-9 h-9 border-2 border-[#ED184F] bg-transparent" />
              </motion.div>
            </div>

            
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">We are here to give you solution!</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label 
                    className={getLabelClassName('fullName')}
                    onClick={() => setActiveField('fullName')}
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    className={getInputClassName('fullName')}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    onFocus={() => setActiveField('fullName')}
                    onBlur={() => setActiveField(null)}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label 
                    className={getLabelClassName('email')}
                    onClick={() => setActiveField('email')}
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    required
                    className={getInputClassName('email')}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label 
                    className={getLabelClassName('phone')}
                    onClick={() => setActiveField('phone')}
                  >
                    Phone Number*
                  </label>
                    <input
                      type="tel"
                      required
                    className={getInputClassName('phone')}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setActiveField('phone')}
                    onBlur={() => setActiveField(null)}
                    />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label 
                    className={getLabelClassName('companyName')}
                    onClick={() => setActiveField('companyName')}
                  >
                    Company Name*
                  </label>
                  <input
                    type="text"
                    required
                    className={getInputClassName('companyName')}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    onFocus={() => setActiveField('companyName')}
                    onBlur={() => setActiveField(null)}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label 
                  className={getLabelClassName('details')}
                  onClick={() => setActiveField('details')}
                >
                  Project Details*
                </label>
                <textarea
                  required
                  rows={4}
                  className={getInputClassName('details')}
                  placeholder="Please provide details of the project you have in mind. The more information you provide the better."
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  onFocus={() => setActiveField('details')}
                  onBlur={() => setActiveField(null)}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Submit</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <AnimatedText text="Offices" type="highlight" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              className={`backdrop-blur-sm bg-gradient-to-br ${office.gradient} border-2 border-primary/20 text-dark rounded-xl p-8 shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-full bg-primary/5">
                {office.icon}
                </div>
                <h3 className="text-2xl font-bold">{office.city}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
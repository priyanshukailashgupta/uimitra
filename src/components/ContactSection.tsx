import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Circle, Square, Triangle } from 'lucide-react';
import AnimatedText from './AnimatedText';
import FAQSection from './FAQSection';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus('success');
    
    // Reset form after success
    if (formRef.current) {
      formRef.current.reset();
    }
    setTimeout(() => setFormStatus('idle'), 2000);
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+91 98765 43210",
      delay: 0.1
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "hello@landin.com",
      delay: 0.2
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "123 Design Street, NY 10001",
      delay: 0.3
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden" ref={sectionRef}>
      {/* Geometric Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 opacity-10"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.div 
          className="absolute top-0 right-0 w-full h-full border-2 border-primary rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div 
        className="absolute bottom-0 left-0 w-72 h-72 opacity-10"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-full border-2 border-secondary"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-primary font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            GET IN TOUCH
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's Create Something <AnimatedText text="Amazing" type="gradient" className="text-[#ED184F]" />
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-dark/70"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind? We'd love to hear about it. Tell us what you're
            looking for and we'll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8"
              animate={{
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Square className="text-primary/30" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 w-8 h-8"
              animate={{
                rotate: [360, 270, 180, 90, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Triangle className="text-secondary/30" />
            </motion.div>

            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-primary/10 relative z-10"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-dark mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-dark mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-dark mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center gap-2 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus !== 'idle'}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    {formStatus === 'idle' && (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                    {formStatus === 'sending' && 'Sending...'}
                    {formStatus === 'success' && 'Message Sent!'}
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:pl-12"
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: info.delay }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">{info.title}</h3>
                    <p className="text-dark/70">{info.value}</p>
                  </div>
                </motion.div>
              ))}
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
        </div>
      </div>

      {/* Background geometric shapes */}
      <motion.div 
        className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/10 to-primary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FAQSection/>
    </section>
  );
};

export default ContactSection;
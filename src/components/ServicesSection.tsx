import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Layout, Smartphone, Wand2, ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive digital experiences that delight users and drive engagement.",
      icon: <Wand2 size={24} />,
      color: "from-[#FF3366] to-[#FF6B6B]"
    },
    {
      title: "Web Development",
      description: "Building fast, responsive, and scalable web applications with modern technologies.",
      icon: <Code size={24} />,
      color: "from-[#4158D0] to-[#C850C0]"
    },
    {
      title: "Mobile Apps",
      description: "Crafting native and cross-platform mobile applications that users love.",
      icon: <Smartphone size={24} />,
      color: "from-[#0093E9] to-[#80D0C7]"
    },
    {
      title: "Digital Products",
      description: "End-to-end product design and development for startups and enterprises.",
      icon: <Layout size={24} />,
      color: "from-[#8EC5FC] to-[#E0C3FC]"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-light"
    >
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
            OUR EXPERTISE
          </motion.p>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatedText text="Services" type="highlight" /> that Drive{' '}
            <AnimatedText text="Growth" type="gradient" delay={0.2} />
          </motion.h2>

          <motion.p 
            className="max-w-2xl mx-auto text-dark/70"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We combine creativity and technology to help businesses thrive in the digital age.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div 
                className={`h-full p-8 md:p-10 rounded-2xl bg-white border border-primary/10 relative overflow-hidden
                  ${hoveredIndex === index ? 'shadow-lg transform -translate-y-1' : 'shadow-sm'}
                  transition-all duration-300`}
              >
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5
                    transition-opacity duration-300`}
                />

                <motion.div 
                  className="w-16 h-16 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6
                    group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-dark/70 mb-6">{service.description}</p>

                <motion.div 
                  className="flex items-center text-primary font-medium"
                  whileHover={{ x: 5 }}
                >
                  Learn more <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-20"
                  style={{
                    background: `linear-gradient(to right, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`
                  }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            className="bg-primary text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(237, 24, 79, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div 
        className="absolute top-40 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="absolute bottom-40 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/10 to-primary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default ServicesSection;
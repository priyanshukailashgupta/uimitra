import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Palette, PenTool, MessageSquare, Layout, FileText, 
  Image, Type, Grid, Layers, Users, Target, Sparkles,
  ArrowRight, CheckCircle, Briefcase, Eye, Lightbulb,
  FileCheck, Rocket, Zap, Heart, Globe, Shield, Brain, MessageCircle
} from 'lucide-react';
import AnimatedText from '../../AnimatedText';

const BrandIdentityPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Stand Out",
      description: "Create a unique and memorable brand presence that sets you apart."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Build Trust",
      description: "Develop emotional connections with your audience through consistent branding."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Scale Globally",
      description: "Create a brand identity that resonates across cultures and markets."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Brand Protection",
      description: "Safeguard your brand with professional, legally-sound identity elements."
    }
  ];

  const services = [
    {
      title: "Visual Identity Design",
      description: "Creating a cohesive visual system that reflects your brand values",
      icon: <Palette className="w-6 h-6" />,
      items: [
        "Logo Design",
        "Color Palette",
        "Typography",
        "Visual Elements",
        "Brand Guidelines"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Brand Voice & Messaging",
      description: "Developing a unique tone and messaging strategy",
      icon: <MessageCircle className="w-6 h-6" />,
      items: [
        "Voice Guidelines",
        "Key Messages",
        "Taglines",
        "Content Strategy",
        "Communication Style"
      ],
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Brand Applications",
      description: "Implementing your brand across various touchpoints",
      icon: <Layout className="w-6 h-6" />,
      items: [
        "Digital Assets",
        "Print Materials",
        "Social Media",
        "Packaging",
        "Environmental Design"
      ],
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    }
  ];

  const process = [
    {
      icon: <Brain />,
      title: "Discovery",
      description: "Understanding your vision, values, and market position"
    },
    {
      icon: <Target />,
      title: "Strategy",
      description: "Developing your brand positioning and personality"
    },
    {
      icon: <PenTool />,
      title: "Design",
      description: "Creating your visual identity system"
    },
    {
      icon: <MessageSquare />,
      title: "Voice",
      description: "Crafting your brand messaging and tone"
    },
    {
      icon: <FileCheck />,
      title: "Guidelines",
      description: "Documenting usage rules and standards"
    },
    {
      icon: <Rocket />,
      title: "Launch",
      description: "Rolling out your new brand identity"
    }
  ];

  const features = [
    {
      icon: <Palette />,
      title: "Complete Visual System",
      items: ["Logo Suite", "Color System", "Typography", "Imagery Style", "Icons & Patterns"]
    },
    {
      icon: <MessageSquare />,
      title: "Brand Voice",
      items: ["Tone Guidelines", "Key Messages", "Writing Style", "Brand Story", "Taglines"]
    },
    {
      icon: <Layout />,
      title: "Digital Assets",
      items: ["Web Elements", "Social Media", "Email Templates", "Digital Ads", "UI Components"]
    },
    {
      icon: <FileText />,
      title: "Documentation",
      items: ["Brand Guidelines", "Asset Library", "Templates", "Usage Examples", "Best Practices"]
    }
  ];

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden" ref={sectionRef}>
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #ED184F 0%, #D1002E 100%)',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-white/10 backdrop-blur-sm"
        />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4 px-6 py-2 rounded-full bg-white/20 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Brand Identity
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Creating Memorable{' '}
              <AnimatedText text="Brand Identities" type="gradient" />{' '}That{' '}
              <AnimatedText text="Stand Out" type="gradient" delay={0.2} />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We craft distinctive brand identities that capture your essence and resonate
              with your audience, creating lasting impressions and emotional connections.
            </motion.p>

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Identity</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#ED184F] to-[#D1002E]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Why Brand Identity <AnimatedText text="Matters" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-dark/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gradient-to-b from-white to-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our Brand Identity <AnimatedText text="Services" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative p-8 bg-white rounded-xl shadow-sm border border-primary/10 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-dark">{service.title}</h3>
                <p className="text-dark/70 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-dark/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our Brand Identity <AnimatedText text="Process" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-white rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-dark/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-gradient-to-b from-white to-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              What You'll <AnimatedText text="Receive" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-dark/70">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-2xl text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                ]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Ready to Build Your Brand Identity ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's create something memorable together.<br/>
              Start your brand transformation today.
            </p>
            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
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
    </div>
  );
};

export default BrandIdentityPage;
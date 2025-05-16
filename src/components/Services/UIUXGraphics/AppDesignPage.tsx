import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Smartphone, Tablet, Laptop, Palette, Code, Zap, 
  Monitor, Layers, ArrowRight, CheckCircle, Wand2, 
  Users, Target, Sparkles, Eye, ChevronDown, Apple, 
  Cuboid, Globe, MessageSquare, Rocket, 
  Settings, Shield, Cpu, Smartphone as Phone, 
  Tablet as TabletIcon, Laptop as LaptopIcon, 
  Palette as PaletteIcon, Code as CodeIcon, 
  Zap as ZapIcon, Monitor as MonitorIcon, 
  Layers as LayersIcon, ArrowRight as ArrowRightIcon, 
  CheckCircle as CheckCircleIcon, Wand2 as Wand2Icon, 
  Users as UsersIcon, Target as TargetIcon, 
  Sparkles as SparklesIcon, Eye as EyeIcon, 
  ChevronDown as ChevronDownIcon, Apple as AppleIcon, 
  Cuboid as AndroidIcon, Globe as GlobeIcon, 
  MessageSquare as MessageSquareIcon, Rocket as RocketIcon, 
  Settings as SettingsIcon, Shield as ShieldIcon, 
  Cpu as CpuIcon 
} from 'lucide-react';
import AnimatedText from '../../AnimatedText';

const AppDesignPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const features = [
    {
      icon: <AppleIcon className="w-6 h-6" />,
      title: "iOS App Design",
      description: "Beautiful interfaces following Apple's Human Interface Guidelines",
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      icon: <AndroidIcon className="w-6 h-6" />,
      title: "Android App Design",
      description: "Material Design-inspired interfaces for Android devices",
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      icon: <GlobeIcon className="w-6 h-6" />,
      title: "Cross-Platform Design",
      description: "Consistent experiences across all platforms",
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      icon: <Wand2Icon className="w-6 h-6" />,
      title: "Custom App UI/UX",
      description: "Tailor-made interfaces for unique app experiences",
      gradient: "from-[#0093E9]/90 to-[#80D0C7]/95"
    }
  ];

  const benefits = [
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "User-Centered Design",
      description: "We put your users first, creating interfaces that feel natural and intuitive."
    },
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: "Engaging Experiences",
      description: "Delightful micro-interactions and smooth animations that users love."
    },
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: "Platform Best Practices",
      description: "Following platform guidelines while maintaining unique brand identity."
    },
    {
      icon: <CpuIcon className="w-6 h-6" />,
      title: "Performance Optimized",
      description: "Fast, responsive interfaces that work smoothly on all devices."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Research & Strategy",
      description: "Understanding your users, market, and app goals",
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Wireframing",
      description: "Creating the blueprint of your app's interface",
      icon: <LayersIcon className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Visual Design",
      description: "Crafting beautiful, on-brand UI components",
      icon: <PaletteIcon className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Prototyping",
      description: "Building interactive prototypes for testing",
      icon: <Phone className="w-6 h-6" />
    },
    {
      step: "05",
      title: "Testing",
      description: "Validating designs with real users",
      icon: <SettingsIcon className="w-6 h-6" />
    },
    {
      step: "06",
      title: "Handoff",
      description: "Delivering development-ready design assets",
      icon: <CodeIcon className="w-6 h-6" />
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
              App Design Services
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Design Apps That Users{' '}
              <AnimatedText text="Love" type="gradient" />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We create beautiful, intuitive mobile experiences that engage users and drive results. 
              From iOS to Android, we design apps that make an impact.
            </motion.p>

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your App Project</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

      {/* Features Grid */}
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
              Our App Design <AnimatedText text="Services" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden group bg-white p-8 shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-dark">{feature.title}</h3>
                <p className="text-dark/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
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
              Why Choose Our <AnimatedText text="App Design" type="highlight" />
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
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
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
              Our App Design <AnimatedText text="Process" type="highlight" />
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
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
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
              Ready to Build Your Dream App ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's create something extraordinary together.<br/>
              Your vision, our expertise.
            </p>
            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRightIcon className="w-5 h-5" />
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

export default AppDesignPage;
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Palette, Eye, Globe, Boxes, FileSearch, 
  Monitor, Smartphone, Layout, Code, Gamepad,
  Wallet, Pencil, Users, TestTube, Book, 
  ShoppingBag, Glasses, LineChart, Circle, Square, Triangle 
} from 'lucide-react';
import AnimatedText from './AnimatedText';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  features,
  index 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm border border-primary/10"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
    >
      <div className="p-6">
        <motion.div 
          className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>

        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-dark/70 mb-6">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-dark/80">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Animated border */}
      <motion.div 
        className="absolute inset-0 rounded-xl z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="absolute inset-0 rounded-xl border-2 border-primary/50"
          animate={{
            borderColor: [
              "rgba(237, 24, 79, 0.5)",
              "rgba(240, 90, 40, 0.5)",
              "rgba(244, 122, 82, 0.5)",
              "rgba(240, 77, 117, 0.5)",
              "rgba(237, 24, 79, 0.5)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "1. User Interface (UI) Design",
      description: "Creating intuitive and visually appealing interfaces that enhance user engagement",
      icon: <Palette size={24} />,
      features: [
        "Web UI Design",
        "Mobile App UI Design (Android, iOS)",
        "Dashboard & Admin Panel UI",
        "SaaS Platform UI",
        "Enterprise Software UI",
        "Game UI Design",
        "Web3 & NFT UI"
      ]
    },
    {
      title: "2. User Experience (UX) Design",
      description: "Crafting seamless user experiences through research and testing",
      icon: <Eye size={24} />,
      features: [
        "Wireframing & Prototyping",
        "User Journey Mapping",
        "Interaction Design",
        "Accessibility & Usability Testing",
        "AI-Driven UX Design"
      ]
    },
    {
      title: "3. Website & Mobile App Design",
      description: "End-to-end digital product design solutions",
      icon: <Globe size={24} />,
      features: [
        "Custom Website UI/UX",
        "Responsive Design",
        "Landing Page Design",
        "E-commerce UX",
        "AR/VR Experiences"
      ]
    },
    {
      title: "4. Design Systems & Guidelines",
      description: "Building scalable and consistent design foundations",
      icon: <Boxes size={24} />,
      features: [
        "Design System Development",
        "UI Style Guide Creation",
        "Component Libraries",
        "Design Token Management",
        "Documentation"
      ]
    },
    {
      title: "5. UX Research & Audits",
      description: "Data-driven design decisions and optimization",
      icon: <FileSearch size={24} />,
      features: [
        "UX Design Audits",
        "Usability Testing",
        "User Research",
        "Analytics & Insights",
        "UX Strategy Consulting"
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden">
      {/* Floating Shapes */}
      <motion.div 
        className="absolute top-40 right-0 w-64 h-64"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Circle className="w-full h-full text-primary/20" />
      </motion.div>

      <motion.div 
        className="absolute bottom-40 left-0 w-48 h-48"
        animate={{
          rotate: [45, 405],
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Square className="w-full h-full text-secondary/20" />
      </motion.div>

      <motion.div 
        className="absolute top-1/2 left-1/4 w-56 h-56"
        animate={{
          rotate: [-45, 315],
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ 
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Triangle className="w-full h-full text-accent/20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            OUR SERVICES
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatedText text="UI/UX Design" type="highlight" /> Services
          </motion.h1>
          
          <motion.p 
            className="text-dark/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive design solutions tailored to your unique needs and business objectives.
            From concept to implementation, we help you create exceptional digital experiences.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
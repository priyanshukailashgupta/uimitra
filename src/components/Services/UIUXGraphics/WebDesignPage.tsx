import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Layout, Code, Smartphone, Globe, Palette, 
  Zap, Monitor, Layers, ArrowRight, CheckCircle,
  Wand2, Users, Target, Sparkles, Eye, ChevronDown,
  Building2, ShoppingBag, GraduationCap, Megaphone,
  Rocket, MessageSquare, Briefcase, LineChart, Code2, ShoppingCart, Settings
} from 'lucide-react';
import AnimatedText from '../../AnimatedText';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  color,
  index 
}) => {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden bg-white p-8 shadow-lg border border-primary/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
    >
      <motion.div 
        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center mb-4 text-white`}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-dark/70">{description}</p>
    </motion.div>
  );
};

interface ImageSectionProps {
  images: { title: string; url: string }[];
}

const ImageSection: React.FC<ImageSectionProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative rounded-xl overflow-hidden aspect-video"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <img 
            src={image.url} 
            alt={image.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/10 to-dark/80 flex items-end">
            <h3 className="text-white font-bold p-6">{image.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const WebDesignPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Builds Trust Instantly",
      description: "Users make judgments in seconds. Clean, consistent design boosts credibility right away."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Boosts Conversions",
      description: "Smart layouts and clear calls to action make it easier for users to take the next step."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Improves User Experience",
      description: "A smooth, intuitive experience keeps people coming back—and sharing your site."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Strengthens Brand Identity",
      description: "Your website should feel like your brand—every element matters."
    }
  ];

  const services = [
    {
      title: "Custom Website Design",
      description: "Creating unique and engaging web experiences",
      icon: <Palette className="w-6 h-6" />,
      items: [
        "UI/UX Design",
        "Responsive Design",
        "Interactive Elements",
        "Visual Design",
        "Prototyping"
      ],
      gradient: "from-[#FF6B6B]/90 to-[#FF8E8E]/95"
    },
    {
      title: "Development & Integration",
      description: "Building robust and scalable web solutions",
      icon: <Code2 className="w-6 h-6" />,
      items: [
        "Frontend Development",
        "Backend Integration",
        "CMS Implementation",
        "API Integration",
        "Performance Optimization"
      ],
      gradient: "from-[#4ECDC4]/90 to-[#45B7AF]/95"
    },
    {
      title: "E-commerce Solutions",
      description: "Creating seamless online shopping experiences",
      icon: <ShoppingCart className="w-6 h-6" />,
      items: [
        "Store Setup",
        "Payment Integration",
        "Product Management",
        "Checkout Flow",
        "Inventory System"
      ],
      gradient: "from-[#A78BFA]/90 to-[#8B5CF6]/95"
    },
    {
      title: "Website Maintenance & Support",
      description: "Ensuring your website runs smoothly and stays up-to-date",
      icon: <Settings className="w-6 h-6" />,
      items: [
        "Regular Updates",
        "Security Monitoring",
        "Performance Optimization",
        "Technical Support",
        "Backup & Recovery"
      ],
      gradient: "from-[#FCD34D]/90 to-[#F59E0B]/95"
    }
  ];

  const portfolioImages = [
    {
      title: "Modern E-commerce Platform",
      description: "A fully responsive e-commerce solution with seamless user experience",
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Responsive Web Application",
      description: "Cross-platform web application with modern UI/UX design",
      icon: <Monitor className="w-8 h-8" />,
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Corporate Website Design",
      description: "Professional corporate website with brand-focused design",
      icon: <Building2 className="w-8 h-8" />,
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      title: "Digital Marketing Platform",
      description: "Comprehensive digital marketing solution with analytics",
      icon: <LineChart className="w-8 h-8" />,
      gradient: "from-[#F47A52]/90 to-[#B54F2E]/95"
    }
  ];

  const process = [
    {
      icon: <Briefcase />,
      title: "Discovery & Research",
      description: "We learn about your business, audience, goals, and competitors to set the right foundation."
    },
    {
      icon: <Layers />,
      title: "Planning & Wireframing",
      description: "We map out user journeys and build low-fidelity wireframes to define structure and flow."
    },
    {
      icon: <Palette />,
      title: "Visual Design",
      description: "We bring your brand to life with bold visuals, color schemes, typography, and layout."
    },
    {
      icon: <Monitor />,
      title: "Prototyping & Feedback",
      description: "You'll interact with early designs through prototypes. We gather feedback and refine the experience."
    },
    {
      icon: <Code />,
      title: "Design Handoff",
      description: "Final designs are prepared for developers—with assets, guides, and documentation."
    },
    {
      icon: <MessageSquare />,
      title: "Post-Delivery Support",
      description: "We're here to support you after the design phase, for tweaks, updates, or design audits."
    }
  ];

  const industries = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startups & Tech",
      description: "Launch with a brand that attracts investors and users. We specialize in creating modern, scalable web solutions that help startups establish their digital presence, showcase their innovation, and drive user adoption. From MVP websites to full-scale platforms, we help tech companies make a lasting impression.",
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "E-commerce & Retail",
      description: "Stand out in the crowded direct-to-consumer space. Our e-commerce solutions combine beautiful design with powerful functionality, creating seamless shopping experiences that convert visitors into customers. We focus on intuitive navigation, fast loading times, and mobile-first design to maximize sales and customer satisfaction.",
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education & Portfolios",
      description: "Build trust and authority in the learning space. Whether you're an educational institution, online course provider, or professional portfolio, we create engaging digital experiences that showcase your expertise and facilitate learning. Our designs focus on accessibility, content organization, and user engagement.",
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Agencies & Creatives",
      description: "Capture attention in the content economy. We help creative agencies, marketing firms, and individual creatives build stunning digital portfolios and websites that reflect their unique style and capabilities. Our designs emphasize visual storytelling, brand consistency, and interactive elements that showcase your work effectively.",
      gradient: "from-[#F47A52]/90 to-[#B54F2E]/95"
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
              Web Design Services
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Where <AnimatedText text="Vision" type="gradient" /> Meets{' '}
              <AnimatedText text="Precision" type="gradient" delay={0.2} />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              In today's digital world, a website isn't just a presence—it's your brand's first impression, 
              your voice, and your most powerful marketing tool. We create digital experiences that engage 
              users, tell your story, and drive results.
            </motion.p>

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#ED184F]/90 to-[#893168]/95"
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
              Why Web Design <AnimatedText text="Matters" type="highlight" />
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

      {/* Services Grid Section */}
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
              Our Web Design <AnimatedText text="Services" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl overflow-hidden bg-white shadow-lg border border-primary/10 ${
                  index % 2 === 0 ? 'md:translate-y-12' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-dark/70 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        className="flex items-center gap-3 text-dark/80"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
          </div>

      {/* Featured Projects Section */}
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
              Featured <AnimatedText text="Projects" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioImages.map((project, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden group bg-white shadow-lg border border-primary/10"
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
                <div className="relative p-8">
                  <motion.div 
                    className="w-16 h-16 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-dark/70">{project.description}</p>
                </div>
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
              Our Design <AnimatedText text="Process" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
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
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-dark/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
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
              Industries We <AnimatedText text="Serve" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-full md:w-1/2">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-primary/10">
                    <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                    <p className="text-dark/70 text-lg">{industry.description}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-64 flex items-center justify-center">
                  {index === 0 && (
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Tech/Startup Illustration - More detailed tech elements */}
                      <motion.path 
                        d="M100 40L160 70V130L100 160L40 130V70L100 40Z" 
                        stroke="var(--primary)" 
                        strokeWidth="3" 
                        fill="none"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut" 
                        }}
                      />
                      <motion.path 
                        d="M100 70L130 85V115L100 130L70 115V85L100 70Z" 
                        stroke="var(--primary)" 
                        strokeWidth="3" 
                        fill="none"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                      <motion.circle 
                        cx="100" 
                        cy="100" 
                        r="15" 
                        fill="var(--primary)"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                      />
                      <motion.path 
                        d="M85 100H115M100 85V115" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.3
                        }}
                      />
                      {/* Additional tech elements */}
                      <motion.path 
                        d="M60 60L80 80M140 60L120 80M60 140L80 120M140 140L120 120" 
                        stroke="var(--primary)" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.7
                        }}
                      />
                      <motion.circle 
                        cx="100" 
                        cy="100" 
                        r="5" 
                        fill="white"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* E-commerce/Retail Illustration - Shopping elements */}
                      <motion.rect 
                        x="60" 
                        y="60" 
                        width="80" 
                        height="80" 
                        rx="10" 
                        stroke="var(--primary)" 
                        strokeWidth="3" 
                        fill="none"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut" 
                        }}
                      />
                      <motion.path 
                        d="M70 90H130M70 110H110" 
                        stroke="var(--primary)" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                      <motion.circle 
                        cx="130" 
                        cy="90" 
                        r="10" 
                        fill="var(--primary)"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                      />
                      <motion.path 
                        d="M125 90L130 95L135 85" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.3
                        }}
                      />
                      {/* Shopping cart elements */}
                      <motion.path 
                        d="M50 140C50 140 60 130 70 130C80 130 90 140 100 140C110 140 120 130 130 130C140 130 150 140 150 140" 
                        stroke="var(--primary)" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.7
                        }}
                      />
                      <motion.circle 
                        cx="70" 
                        cy="150" 
                        r="5" 
                        fill="var(--primary)"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                      />
                      <motion.circle 
                        cx="130" 
                        cy="150" 
                        r="5" 
                        fill="var(--primary)"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.3
                        }}
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Education/Portfolio Illustration - Book and graduation cap */}
                      <motion.path 
                        d="M60 60H140V140H60V60Z" 
                        stroke="var(--primary)" 
                        strokeWidth="3" 
                        fill="none"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut" 
                        }}
                      />
                      <motion.path 
                        d="M80 80H120M80 100H120M80 120H100" 
                        stroke="var(--primary)" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                      <motion.path 
                        d="M100 40L120 60H80L100 40Z" 
                        fill="var(--primary)"
                        animate={{ 
                          y: [0, -5, 0],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                      />
                      {/* Graduation cap */}
                      <motion.path 
                        d="M40 80L100 50L160 80L100 110L40 80Z" 
                        stroke="var(--primary)" 
                        strokeWidth="2" 
                        fill="none"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.7
                        }}
                      />
                      <motion.path 
                        d="M100 110V140" 
                        stroke="var(--primary)" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.9
                        }}
                      />
                      <motion.circle 
                        cx="100" 
                        cy="140" 
                        r="5" 
                        fill="var(--primary)"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                      />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Agencies/Creatives Illustration - Design elements */}
                      <motion.circle 
                        cx="100" 
                        cy="100" 
                        r="50" 
                        stroke="var(--primary)" 
                        strokeWidth="3" 
                        fill="none"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut" 
                        }}
                      />
                      <motion.path 
                        d="M100 70C82.33 70 68 84.33 68 102C68 119.67 82.33 134 100 134C117.67 134 132 119.67 132 102C132 84.33 117.67 70 100 70Z" 
                        stroke="var(--primary)" 
                        strokeWidth="3" 
                        fill="none"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                      <motion.path 
                        d="M100 90C91.16 90 84 97.16 84 106C84 114.84 91.16 122 100 122C108.84 122 116 114.84 116 106C116 97.16 108.84 90 100 90Z" 
                        fill="var(--primary)"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                      />
                      <motion.path 
                        d="M100 100L110 110M90 110L100 100" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.3
                        }}
                      />
                      {/* Creative design elements */}
                      <motion.path 
                        d="M50 50L70 70M150 50L130 70M50 150L70 130M150 150L130 130" 
                        stroke="var(--primary)" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.7
                        }}
                      />
                      <motion.path 
                        d="M100 50L100 150M50 100L150 100" 
                        stroke="var(--primary)" 
                        strokeWidth="1" 
                        strokeDasharray="5 5"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.9
                        }}
                      />
                    </svg>
                  )}
                </div>
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
              Ready to Transform Your Web Presence?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's create something extraordinary together.<br/>
              Your success story starts with a stunning website.
            </p>
            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
            >
              Start Your Journey
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

export default WebDesignPage;
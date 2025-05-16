import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Target, Lightbulb, MessageSquare, Palette, 
  Globe, Users, Rocket, Heart, Sparkles,
  PenTool, BarChart, ArrowRight, Briefcase,
  LineChart, Megaphone, Brain, CheckCircle,
  Zap, Monitor, Smartphone, Layout, Code,
  FileImage, Film, Layers, Eye, Book,
  ShoppingBag, Headphones, Award
} from 'lucide-react';
import AnimatedText from '../../AnimatedText';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  index: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, items, icon, index }) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepRef, { once: true });

  return (
    <motion.div
      ref={stepRef}
      className="relative p-8 bg-white rounded-xl shadow-lg border border-primary/10"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
    >
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <motion.div 
        className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-dark/70 mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-dark/70">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const BrandStrategyPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const benefits = [
    {
      icon: <Target />,
      title: "Stand Out",
      description: "Cut through the noise in a crowded market with a distinctive brand voice."
    },
    {
      icon: <MessageSquare />,
      title: "Connect Deeply",
      description: "Build emotional connections that turn customers into loyal advocates."
    },
    {
      icon: <LineChart />,
      title: "Scale Faster",
      description: "Strong branding lets you charge premium prices and attract better talent."
    },
    {
      icon: <Heart />,
      title: "Build Trust",
      description: "Establish credibility and long-term loyalty with your audience."
    }
  ];

  const services = [
    {
      title: "Brand Strategy",
      description: "We create your brand's foundation through deep research and strategic positioning",
      icon: <Brain className="w-6 h-6" />,
      items: [
        "Brand DNA Development",
        "Market Research",
        "Audience Analysis",
        "Positioning Strategy",
        "Voice & Tone Guidelines"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Brand Identity",
      description: "Transform your strategy into stunning visuals that capture your essence",
      icon: <Palette className="w-6 h-6" />,
      items: [
        "Logo Design",
        "Color Psychology",
        "Typography System",
        "Icon Design",
        "Brand Guidelines"
      ],
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Brand Applications",
      description: "Bring your brand to life across all touchpoints and platforms",
      icon: <Layout className="w-6 h-6" />,
      items: [
        "Website Design",
        "Social Media Kits",
        "Marketing Materials",
        "Packaging Design",
        "Brand Templates"
      ],
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description: "Deep dive into your brand's world",
      icon: <Eye />,
      items: [
        "Brand interviews and audits",
        "Stakeholder discussions",
        "Market research",
        "Competitor analysis"
      ]
    },
    {
      number: "02",
      title: "Define",
      description: "Create your brand's strategic foundation",
      icon: <Target />,
      items: [
        "Mission and vision",
        "Brand story and values",
        "Tone and voice",
        "Positioning strategy"
      ]
    },
    {
      number: "03",
      title: "Design",
      description: "Craft your visual identity system",
      icon: <Palette />,
      items: [
        "Logo concepts",
        "Color and typography",
        "Visual elements",
        "Brand applications"
      ]
    },
    {
      number: "04",
      title: "Deliver",
      description: "Package and implement your brand",
      icon: <Rocket />,
      items: [
        "Asset preparation",
        "Guidelines creation",
        "Team training",
        "Launch support"
      ]
    },
    {
      number: "05",
      title: "Deploy",
      description: "Activate your brand across channels",
      icon: <Zap />,
      items: [
        "Website implementation",
        "Social media rollout",
        "Marketing materials",
        "Ongoing support"
      ]
    },
    {
      number: "06",
      title: "Monitor & Optimize",
      description: "Measure and enhance brand performance",
      icon: <BarChart />,
      items: [
        "Performance tracking",
        "Audience feedback",
        "Brand health metrics",
        "Continuous improvement"
      ]
    }
  ];

  const industries = [
    {
      icon: <Rocket />,
      title: "Startups",
      description: "Launch with a brand that attracts investors and users"
    },
    {
      icon: <ShoppingBag />,
      title: "D2C Brands",
      description: "Stand out in the crowded direct-to-consumer space"
    },
    {
      icon: <Monitor />,
      title: "Tech Companies",
      description: "Humanize your technology with relatable branding"
    },
    {
      icon: <Book />,
      title: "Educational",
      description: "Build trust and authority in the learning space"
    },
    {
      icon: <Headphones />,
      title: "Media & Entertainment",
      description: "Capture attention in the content economy"
    },
    {
      icon: <Award />,
      title: "Professional Services",
      description: "Elevate your expertise with premium positioning"
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
              Brand Strategy
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Crafting Your Brand's{' '}
              <AnimatedText text="Strategic Foundation" type="gradient" />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building a strong brand starts with a solid strategy. We help you define your brand's purpose,
              position, and personality to create meaningful connections with your audience.
            </motion.p>

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Strategy</span>
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
              Why Strong Branding <AnimatedText text="Matters" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg border border-primary/10 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-dark">{benefit.title}</h3>
                <p className="text-dark/70 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
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
              Our Brand Strategy <AnimatedText text="Services" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Our Brand Building <AnimatedText text="Process" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                items={step.items}
                icon={step.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
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
              Industries We <AnimatedText text="Serve" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-3xl shadow-lg border border-primary/10 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {industry.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-dark">{industry.title}</h3>
                <p className="text-dark/70 leading-relaxed">{industry.description}</p>
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
              Ready to Build Your Brand Strategy ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's create a brand that stands out and drives growth.<br/>
              Your success story starts with a solid strategy.
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

export default BrandStrategyPage;
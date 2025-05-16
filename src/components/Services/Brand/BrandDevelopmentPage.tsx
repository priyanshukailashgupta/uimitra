import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  TrendingUp, Target, Users, Rocket, 
  Globe, LineChart, ArrowRight, CheckCircle,
  BarChart, MessageSquare, Layout, FileText,
  Briefcase, PenTool, Eye, ChevronDown,
  Building2, ShoppingBag, GraduationCap, Megaphone,
  Palette, Layers, Brain, Zap, Heart, Shield,
  TrendingUp as TrendingUpIcon, Target as TargetIcon, 
  Users as UsersIcon, Rocket as RocketIcon, 
  Globe as GlobeIcon, LineChart as LineChartIcon, 
  ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon,
  BarChart as BarChartIcon, MessageSquare as MessageSquareIcon, 
  Layout as LayoutIcon, FileText as FileTextIcon,
  Briefcase as BriefcaseIcon, PenTool as PenToolIcon, 
  Eye as EyeIcon, ChevronDown as ChevronDownIcon,
  Building2 as Building2Icon, ShoppingBag as ShoppingBagIcon, 
  GraduationCap as GraduationCapIcon, Megaphone as MegaphoneIcon,
  Palette as PaletteIcon, Layers as LayersIcon, 
  Brain as BrainIcon, Zap as ZapIcon, 
  Heart as HeartIcon, Shield as ShieldIcon
} from 'lucide-react';
import AnimatedText from '../../AnimatedText';

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  gradient: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  items,
  gradient,
  icon,
  index 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-xl overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="relative p-8 text-white">
        <motion.div 
          className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/80 mb-6">{description}</p>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-white/80" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const BrandDevelopmentPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const benefits = [
    {
      icon: <TrendingUpIcon className="w-6 h-6" />,
      title: "Continuous Growth",
      description: "Evolve your brand strategically to stay ahead of market trends and competition."
    },
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Market Positioning",
      description: "Position your brand effectively to capture and retain your target audience."
    },
    {
      icon: <GlobeIcon className="w-6 h-6" />,
      title: "Global Reach",
      description: "Scale your brand presence across different markets and cultures."
    },
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: "Brand Loyalty",
      description: "Build lasting relationships with customers through consistent brand experiences."
    }
  ];

  const services = [
    {
      title: "Strategic Brand Growth",
      description: "Comprehensive brand development strategy",
      icon: <RocketIcon className="w-6 h-6" />,
      items: [
        "Market Research & Analysis",
        "Competitive Positioning",
        "Brand Architecture",
        "Growth Strategy",
        "Performance Metrics"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Brand Experience Design",
      description: "Creating cohesive brand experiences",
      icon: <LayoutIcon className="w-6 h-6" />,
      items: [
        "Customer Journey Mapping",
        "Touchpoint Design",
        "Digital Experience",
        "Content Strategy",
        "Brand Activation"
      ],
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Brand Evolution",
      description: "Keeping your brand relevant and impactful",
      icon: <LayersIcon className="w-6 h-6" />,
      items: [
        "Brand Refresh",
        "Asset Evolution",
        "Market Adaptation",
        "Channel Optimization",
        "Growth Metrics"
      ],
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    }
  ];

  const process = [
    {
      icon: <BrainIcon className="w-6 h-6" />,
      title: "Research & Analysis",
      description: "Understanding market position and opportunities"
    },
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Strategy Development",
      description: "Creating actionable growth plans"
    },
    {
      icon: <PaletteIcon className="w-6 h-6" />,
      title: "Experience Design",
      description: "Crafting cohesive brand experiences"
    },
    {
      icon: <LayersIcon className="w-6 h-6" />,
      title: "Implementation",
      description: "Rolling out brand development initiatives"
    },
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: "Monitoring",
      description: "Tracking performance and adjusting strategy"
    },
    {
      icon: <ZapIcon className="w-6 h-6" />,
      title: "Optimization",
      description: "Continuous improvement and adaptation"
    }
  ];

  const industries = [
    {
      icon: <RocketIcon className="w-6 h-6" />,
      title: "Startups & Scale-ups",
      description: "Building brands that grow with your business",
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      icon: <Building2Icon className="w-6 h-6" />,
      title: "Enterprise",
      description: "Evolving established brands for modern markets",
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      icon: <ShoppingBagIcon className="w-6 h-6" />,
      title: "E-commerce",
      description: "Creating brands that convert and retain",
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      icon: <MegaphoneIcon className="w-6 h-6" />,
      title: "Digital Services",
      description: "Developing brands for the digital age",
      gradient: "from-[#0093E9]/90 to-[#80D0C7]/95"
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
              Brand Development
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Building Brands That{' '}
              <AnimatedText text="Grow" type="gradient" />{' '}and{' '}
              <AnimatedText text="Thrive" type="gradient" delay={0.2} />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We guide you through every stage of brand development, from initial concept
              to market launch, ensuring your brand stands out and achieves its full potential.
            </motion.p>

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Development</span>
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
              Why Brand Development <AnimatedText text="Matters" type="highlight" />
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
              Our Brand Development <AnimatedText text="Services" type="highlight" />
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
              Our Development <AnimatedText text="Process" type="highlight" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="relative p-10 bg-white rounded-2xl shadow-sm border border-primary/10 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-6">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {industry.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-dark">{industry.title}</h3>
                    <p className="text-dark/70 leading-relaxed">{industry.description}</p>
                  </div>
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
              Ready to Evolve Your Brand ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's develop your brand into something extraordinary.<br/>
              Your evolution starts here.
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

export default BrandDevelopmentPage;
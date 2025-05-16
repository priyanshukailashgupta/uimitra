import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, Send, Target, TrendingUp, Users, Zap,
  BarChart, LineChart, Heart, Brain, Rocket,
  MessageSquare, FileText, Settings, ArrowRight,
  CheckCircle, Inbox, Clock, PieChart, Palette,
  Lightbulb, Eye, Share2, Layout,
  Mail as MailIcon, Send as SendIcon, 
  Target as TargetIcon, TrendingUp as TrendingUpIcon, 
  Users as UsersIcon, Zap as ZapIcon,
  BarChart as BarChartIcon, LineChart as LineChartIcon, 
  Heart as HeartIcon, Brain as BrainIcon, 
  Rocket as RocketIcon, MessageSquare as MessageSquareIcon, 
  FileText as FileTextIcon, Settings as SettingsIcon, 
  ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, 
  Inbox as InboxIcon, Clock as ClockIcon, 
  PieChart as PieChartIcon, Palette as PaletteIcon,
  Lightbulb as LightbulbIcon, Eye as EyeIcon, 
  Share2 as Share2Icon, Layout as LayoutIcon
} from 'lucide-react';
import AnimatedText from '../../AnimatedText';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  features,
  icon,
  gradient,
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
      <div className="relative p-8 bg-white rounded-xl shadow-sm border border-primary/10">
        <motion.div 
          className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-2 text-dark">{title}</h3>
        <p className="text-dark/70 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-dark/70">
              <CheckCircleIcon className="w-4 h-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const EmailMarketingPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const benefits = [
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Direct Connection",
      description: "Reach your audience directly in their inbox, no algorithms in between."
    },
    {
      icon: <TrendingUpIcon className="w-6 h-6" />,
      title: "High ROI",
      description: "Email marketing consistently delivers the highest return on investment."
    },
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: "Build Relationships",
      description: "Create lasting connections through personalized communication."
    },
    {
      icon: <ZapIcon className="w-6 h-6" />,
      title: "Drive Action",
      description: "Convert subscribers into customers with targeted campaigns."
    }
  ];

  const services = [
    {
      title: "Email Strategy & Planning",
      description: "Data-driven email marketing strategies that convert",
      icon: <BrainIcon className="w-6 h-6" />,
      features: [
        "Audience Segmentation",
        "Campaign Planning",
        "Content Strategy",
        "Automation Mapping",
        "Performance Goals"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Email Design & Content",
      description: "Beautiful, responsive emails that drive engagement",
      icon: <LayoutIcon className="w-6 h-6" />,
      features: [
        "Custom Templates",
        "Mobile Optimization",
        "Dynamic Content",
        "A/B Testing",
        "Brand Consistency"
      ],
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Automation & Workflows",
      description: "Smart automation that nurtures and converts",
      icon: <SettingsIcon className="w-6 h-6" />,
      features: [
        "Welcome Series",
        "Nurture Sequences",
        "Abandoned Cart",
        "Re-engagement",
        "Behavioral Triggers"
      ],
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      title: "Analytics & Optimization",
      description: "Data-driven insights for continuous improvement",
      icon: <PieChartIcon className="w-6 h-6" />,
      features: [
        "Performance Tracking",
        "List Management",
        "Deliverability",
        "ROI Analysis",
        "Growth Strategy"
      ],
      gradient: "from-[#0093E9]/90 to-[#80D0C7]/95"
    }
  ];

  const features = [
    {
      icon: <InboxIcon className="w-8 h-8" />,
      title: "Smart Inbox Placement",
      description: "Optimized deliverability to reach the primary inbox"
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "Perfect Timing",
      description: "Send at the right time for maximum engagement"
    },
    {
      icon: <Share2Icon className="w-8 h-8" />,
      title: "Easy Sharing",
      description: "Social integration and viral sharing options"
    },
    {
      icon: <EyeIcon className="w-8 h-8" />,
      title: "Real-time Tracking",
      description: "Monitor opens, clicks, and conversions live"
    }
  ];

  const process = [
    {
      icon: <LightbulbIcon className="w-6 h-6" />,
      title: "Strategy",
      description: "Define goals and plan campaigns"
    },
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Audience",
      description: "Segment and understand subscribers"
    },
    {
      icon: <PaletteIcon className="w-6 h-6" />,
      title: "Design",
      description: "Create engaging email templates"
    },
    {
      icon: <MessageSquareIcon className="w-6 h-6" />,
      title: "Content",
      description: "Write compelling copy"
    },
    {
      icon: <SettingsIcon className="w-6 h-6" />,
      title: "Automation",
      description: "Set up smart workflows"
    },
    {
      icon: <RocketIcon className="w-6 h-6" />,
      title: "Launch",
      description: "Test and send campaigns"
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
              Email Marketing
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Connect with Your{' '}
              <AnimatedText text="Audience" type="gradient" />{' '}and{' '}
              <AnimatedText text="Convert" type="gradient" delay={0.2} />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help businesses build strong email marketing campaigns that drive engagement,
              nurture leads, and convert subscribers into loyal customers.
            </motion.p>

            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Start Your Email Marketing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#ED184F] to-[#D1002E]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
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
              Why Email Marketing <AnimatedText text="Matters" type="highlight" />
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
              Our Email Marketing <AnimatedText text="Services" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                gradient={service.gradient}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
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
              Key <AnimatedText text="Features" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm border border-primary/10 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-[#FFF1F4] text-primary flex items-center justify-center mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-3 text-dark">{feature.title}</h3>
                <p className="text-dark/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
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
              Our Email Marketing <AnimatedText text="Process" type="highlight" />
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
              Ready to Transform Your Email Marketing ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's create email campaigns that connect and convert.<br/>
              Your success story starts in the inbox.
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
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

export default EmailMarketingPage;
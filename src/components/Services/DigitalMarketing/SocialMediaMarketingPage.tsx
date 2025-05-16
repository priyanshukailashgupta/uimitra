import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Instagram, Youtube, Twitter, Linkedin, Facebook, 
  TrendingUp, Users, Globe, Zap, Target, Sparkles,
  ArrowRight, CheckCircle, MessageSquare, BarChart,
  Share2, Heart, Eye, Brain, Rocket, FileCheck,
  PieChart, LineChart, Megaphone, Palette,
  Instagram as InstagramIcon, Youtube as YoutubeIcon, 
  Twitter as TwitterIcon, Linkedin as LinkedinIcon, 
  Facebook as FacebookIcon, TrendingUp as TrendingUpIcon, 
  Users as UsersIcon, Globe as GlobeIcon, 
  Zap as ZapIcon, Target as TargetIcon, 
  Sparkles as SparklesIcon, ArrowRight as ArrowRightIcon, 
  CheckCircle as CheckCircleIcon, MessageSquare as MessageSquareIcon, 
  BarChart as BarChartIcon, Share2 as Share2Icon, 
  Heart as HeartIcon, Eye as EyeIcon, 
  Brain as BrainIcon, Rocket as RocketIcon, 
  FileCheck as FileCheckIcon, PieChart as PieChartIcon, 
  LineChart as LineChartIcon, Megaphone as MegaphoneIcon, 
  Palette as PaletteIcon
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
      className="relative rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
    >
      <div className="relative p-8 bg-white rounded-xl shadow-sm border border-primary/10">
        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
          {icon}
        </div>
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

const SocialMediaMarketingPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const benefits = [
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Targeted Reach",
      description: "Connect with your ideal audience where they spend time online."
    },
    {
      icon: <LineChartIcon className="w-6 h-6" />,
      title: "Measurable Results",
      description: "Track and optimize every campaign with real-time analytics."
    },
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: "Brand Love",
      description: "Build lasting relationships and grow your brand community."
    },
    {
      icon: <ZapIcon className="w-6 h-6" />,
      title: "Fast ROI",
      description: "Generate leads and sales with performance-driven campaigns."
    }
  ];

  const services = [
    {
      title: "Content Strategy & Creation",
      description: "Engaging content that resonates with your audience",
      icon: <BrainIcon className="w-6 h-6" />,
      features: [
        "Content Calendar Planning",
        "Visual Content Creation",
        "Copywriting & Captions",
        "Hashtag Strategy",
        "Brand Voice Development"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Social Media Management",
      description: "Full-service platform management and engagement",
      icon: <Share2Icon className="w-6 h-6" />,
      features: [
        "Profile Optimization",
        "Community Management",
        "Response Management",
        "Crisis Management",
        "Competitor Monitoring"
      ],
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Paid Social Advertising",
      description: "Strategic ad campaigns that drive results",
      icon: <BarChartIcon className="w-6 h-6" />,
      features: [
        "Ad Strategy Development",
        "Campaign Management",
        "Audience Targeting",
        "Budget Optimization",
        "Performance Analytics"
      ],
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights for continuous improvement",
      icon: <PieChartIcon className="w-6 h-6" />,
      features: [
        "Performance Tracking",
        "ROI Measurement",
        "Audience Insights",
        "Competitive Analysis",
        "Monthly Reporting"
      ],
      gradient: "from-[#0093E9]/90 to-[#80D0C7]/95"
    }
  ];

  const platforms = [
    {
      icon: <InstagramIcon className="w-8 h-8" />,
      name: "Instagram",
      description: "Build brand awareness through visually content",
      features: [
        "Reels & Stories",
        "Influencer Marketing",
        "Shopping Features",
        "Engagement Strategy"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      icon: <YoutubeIcon className="w-8 h-8" />,
      name: "YouTube",
      description: "Create engaging video content and grow your channel",
      features: [
        "Video Production",
        "Channel Growth",
        "SEO Optimization",
        "Community Building"
      ],
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      icon: <LinkedinIcon className="w-8 h-8" />,
      name: "LinkedIn",
      description: "Establish professional presence and generate leads",
      features: [
        "B2B Marketing",
        "Lead Generation",
        "Content Strategy",
        "Networking"
      ],
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      icon: <FacebookIcon className="w-8 h-8" />,
      name: "Facebook",
      description: "Reach and engage with your target audience",
      features: [
        "Ad Campaigns",
        "Community Building",
        "E-commerce",
        "Analytics"
      ],
      gradient: "from-[#0093E9]/90 to-[#80D0C7]/95"
    },
    {
      icon: <TwitterIcon className="w-8 h-8" />,
      name: "Twitter",
      description: "Connect with your audience in real-time and build community",
      features: [
        "Trend Analysis",
        "Engagement",
        "Hashtag Strategy",
        "Brand Voice"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    }
  ];

  const process = [
    {
      icon: <EyeIcon className="w-6 h-6" />,
      title: "Research & Strategy",
      description: "Understanding your goals, audience, and competition"
    },
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Content Planning",
      description: "Creating engaging content calendars"
    },
    {
      icon: <PaletteIcon className="w-6 h-6" />,
      title: "Content Creation",
      description: "Producing high-quality content"
    },
    {
      icon: <Share2Icon className="w-6 h-6" />,
      title: "Implementation",
      description: "Publishing and engagement"
    },
    {
      icon: <BarChartIcon className="w-6 h-6" />,
      title: "Analytics",
      description: "Tracking and optimization"
    },
    {
      icon: <RocketIcon className="w-6 h-6" />,
      title: "Growth",
      description: "Scaling successful strategies"
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
              Social Media Marketing
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Grow Your Brand{' '}
              <AnimatedText text="Socially" type="gradient" />{' '}and{' '}
              <AnimatedText text="Virtually" type="gradient" delay={0.2} />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help businesses build a strong social media presence and engage with their audience
              through strategic content and community management.
            </motion.p>

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Social Media</span>
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
              Why Social Media Marketing <AnimatedText text="Matters" type="highlight" />
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
              Our Social Media <AnimatedText text="Services" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
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

      {/* Platforms Section */}
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
              Platforms We <AnimatedText text="Master" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
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
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {platform.icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-3 text-dark">{platform.name}</h3>
                <p className="text-dark/70 mb-4">{platform.description}</p>
                <ul className="space-y-2 w-full">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-dark/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Our Social Media <AnimatedText text="Process" type="highlight" />
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
              Ready to Grow Your Social Presence ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's create content that connects and converts.<br/>
              Your social success story starts here.
            </p>
            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
            >
              Get Started
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

export default SocialMediaMarketingPage;
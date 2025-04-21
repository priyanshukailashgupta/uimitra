import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, Users, Target, TrendingUp, MessageSquare, 
  BarChart, ArrowRight, CheckCircle, Briefcase, Award,
  Globe, Zap, Star, Heart, Share2, FileText, Building2,
  GraduationCap, Rocket, Brain, Eye, Layout,
  Shield, Network, Code2, Clock, Search, Lightbulb, Package,
  UserCircle, LineChart, Crown, Youtube, Play, Video
} from 'lucide-react';
import AnimatedText from './AnimatedText';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, index }) => {
  return (
    <motion.div
      className="p-6 bg-white rounded-xl shadow-lg border border-primary/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
    >
      <motion.div 
        className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>
      <div className="text-2xl font-bold text-primary mb-1">{value}</div>
      <div className="text-dark/70">{label}</div>
    </motion.div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, items, index }) => {
  return (
    <motion.div
      className="relative p-8 bg-white rounded-xl shadow-lg border border-primary/10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
    >
      <motion.div 
        className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-dark/70 mb-6">{description}</p>
      
      <ul className="space-y-3">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-center gap-2 text-dark/70"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                {item}
              </motion.li>
            ))}
      </ul>
    </motion.div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon, gradient, index }) => {
  return (
    <motion.div
      className="relative p-8 bg-white rounded-xl shadow-lg border border-primary/10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
    >
      <motion.div
        className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-dark/70 mb-6">{description}</p>
      
      <ul className="space-y-3">
        {features.map((item, idx) => (
          <motion.li
            key={idx}
            className="flex items-center gap-2 text-dark/70"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <CheckCircle className="w-4 h-4 text-primary" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const LinkedInMarketingPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const stats = [
    { icon: <Users />, value: "50K+", label: "Community Members" },
    { icon: <Star />, value: "98%", label: "Client Success Rate" },
    { icon: <TrendingUp />, value: "300%", label: "Average Growth" },
    { icon: <Heart />, value: "1M+", label: "Post Impressions" }
  ];

  const features = [
    {
      title: "Professional Branding",
      description: "Build a compelling company presence that attracts top talent and clients",
      icon: <Building2 />,
      items: [
        "Company Page Optimization",
        "Employee Advocacy",
        "Thought Leadership Content",
        "Brand Voice Development",
        "Visual Identity Management"
      ]
    },
    {
      title: "Content Strategy",
      description: "Create engaging content that resonates with your professional audience",
      icon: <FileText />,
      items: [
        "Industry Insights",
        "Case Studies",
        "Company Updates",
        "Employee Spotlights",
        "Event Coverage"
      ]
    },
    {
      title: "Lead Generation",
      description: "Convert your LinkedIn presence into valuable business opportunities",
      icon: <Target />,
      items: [
        "Lead Magnet Creation",
        "InMail Campaigns",
        "Connection Strategy",
        "Group Engagement",
        "Sales Navigator Optimization"
      ]
    },
    {
      title: "Analytics & Growth",
      description: "Track and optimize your LinkedIn performance metrics",
      icon: <BarChart />,
      items: [
        "Engagement Analytics",
        "Audience Insights",
        "Content Performance",
        "Lead Tracking",
        "ROI Measurement"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Brain />,
      title: "Industry Insights",
      description: "Stay ahead with cutting-edge trends and analysis"
    },
    {
      icon: <Users />,
      title: "Network Growth",
      description: "Build meaningful professional connections"
    },
    {
      icon: <Eye />,
      title: "Brand Visibility",
      description: "Increase your reach in the professional sphere"
    },
    {
      icon: <Rocket />,
      title: "Career Growth",
      description: "Open doors to new opportunities and partnerships"
    }
  ];

  const contentTypes = [
    {
      title: "Company Updates",
      description: "Share milestones, achievements, and culture",
      icon: <Building2 className="w-6 h-6 text-white" />,
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Industry Insights",
      description: "Thought leadership and expert analysis",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Case Studies",
      description: "Real success stories with measurable results",
      icon: <FileText className="w-6 h-6 text-white" />,
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      title: "Team Spotlights",
      description: "Showcase your talented team members",
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: "from-[#0093E9]/90 to-[#80D0C7]/95"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden" ref={sectionRef}>
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
              LinkedIn Marketing
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Build Your Professional{' '}
              <AnimatedText text="Brand" type="gradient" />{' '}on{' '}
              <AnimatedText text="LinkedIn" type="gradient" delay={0.2} />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help businesses establish a strong professional presence on LinkedIn
              through strategic content and networking.
            </motion.p>

            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Start Your LinkedIn Growth</span>
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

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Why LinkedIn Growth Matters Section */}
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
              Why <AnimatedText text="LinkedIn Growth" type="highlight" /> Matters
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "1B+ Active Users",
                description: "Your next client, partner, or hire is here"
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "3x Higher Reach",
                description: "Organic reach beats Facebook and Instagram"
              },
              {
                icon: <BarChart className="w-6 h-6" />,
                title: "92% B2B Choice",
                description: "B2B marketers prefer LinkedIn over other platforms"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Professional Trust",
                description: "Highest trust among social networks"
              },
              {
                icon: <Network className="w-6 h-6" />,
                title: "Business Relations",
                description: "Best platform for high-value connections"
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Strategic Growth",
                description: "Clear strategy and human-centric approach"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
                <p className="text-dark/70">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* LinkedIn Growth Services Section */}
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
              What We Offer for <AnimatedText text="LinkedIn Growth" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Personal Brand Optimization",
                description: "Build your professional presence",
                icon: <UserCircle className="w-6 h-6 text-primary" />,
                features: [
                  "Professional profile audits and upgrades",
                  "SEO-friendly keyword integration",
                  "Personal branding strategy",
                  "Visual optimization",
                  "Thought leadership positioning"
                ]
              },
              {
                title: "Company Page Growth",
                description: "Scale your business presence",
                icon: <Building2 className="w-6 h-6 text-primary" />,
                features: [
                  "Company page setup or revamp",
                  "Consistent branded content calendar",
                  "Lead magnet creation",
                  "Building brand advocates",
                  "Paid LinkedIn campaign consulting"
                ]
              },
              {
                title: "Content Strategy & Execution",
                description: "Engage and grow your audience",
                icon: <FileText className="w-6 h-6 text-primary" />,
                features: [
                  "Thought-provoking posts",
                  "Carousel posts and documents",
                  "LinkedIn articles for authority",
                  "Hashtag research and trends",
                  "Strategic engagement"
                ]
              },
              {
                title: "Advanced Analytics & Reporting",
                description: "Track and optimize performance",
                icon: <LineChart className="w-6 h-6 text-primary" />,
                features: [
                  "Custom growth tracking dashboards",
                  "Audience insights and demographics",
                  "Weekly and monthly reporting",
                  "Competitor benchmarking",
                  "Optimization strategies"
                ]
              }
            ].map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                gradient=""
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Technical Services Section - Horizontal cards with icon on left */}
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
              Technical <AnimatedText text="Services" type="highlight" /> for LinkedIn
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "LinkedIn API Integration",
                description: "CRM and lead tracking solutions"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Automated Posting",
                description: "Safe and strategic automation"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Personal CRM Setup",
                description: "Manage connections effectively"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Pixel Integration",
                description: "Retargeting ad campaign setup"
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "LinkedIn SEO",
                description: "Profile and page optimization"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Automation Solutions",
                description: "Safe and compliant automation"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {tech.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                  <p className="text-dark/70">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Target Audience Section - Circular cards with centered content */}
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
              Who Should Invest in <AnimatedText text="LinkedIn Growth" type="highlight" />?
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                icon: <Crown className="w-6 h-6" />,
                title: "Founders & CEOs",
                description: "Build authority and to attract opportunities"
              },
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Business Development",
                description: "Generate high-quality leads for your business"
              },
              {
                icon: <BarChart className="w-6 h-6" />,
                title: "Sales & Marketing",
                description: "Reach decision-makers directly for your business"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Recruiters & HR",
                description: "Access top talent pools for your business"
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Industry Experts",
                description: "Establish thought leadership for your business"
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "Growing Startups",
                description: "Scale business presence for your business"
              }
            ].map((audience, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-full shadow-lg border border-primary/10 text-center aspect-square flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {audience.icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-1 text-dark">{audience.title}</h3>
                <p className="text-dark/70 text-sm">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our LinkedIn Marketing Services - Large featured cards */}
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
              Our LinkedIn Marketing <AnimatedText text="Services" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative p-8 bg-white rounded-xl shadow-lg border border-primary/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <motion.div 
                      className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-dark/70 mb-6">{feature.description}</p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {feature.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-3 p-4 rounded-lg bg-primary/5"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span className="text-dark/70">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Content That Converts - New Layout with Animated SVGs */}
      <div className="py-20 bg-gradient-to-b from-white to-light overflow-hidden">
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
              Content That <AnimatedText text="Converts" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="space-y-24">
            {contentTypes.map((content, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  {/* Content Card */}
                  <div className="md:w-1/2">
                    <motion.div
                      className="relative p-8 bg-white rounded-xl shadow-lg border border-primary/10"
                      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-primary rounded-t-xl" />
                      <div className="flex items-start gap-6">
                        <motion.div 
                          className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {React.cloneElement(content.icon, { className: "w-6 h-6 text-primary" })}
                        </motion.div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-dark">{content.title}</h3>
                            <div className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center font-bold">
                              {index + 1}
                            </div>
                          </div>
                          <p className="text-dark/70">{content.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Animated SVG Section */}
                  <div className="md:w-1/2 flex items-center justify-center">
                    {index === 0 && (
                      <motion.div
                        className="w-40 h-40 relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {/* Company Updates SVG */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <motion.rect
                              x="20" y="20" width="60" height="60"
                              rx="4" fill="none" stroke="#ED184F"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                            />
                            <motion.path
                              d="M30 40 H70 M30 50 H70 M30 60 H70"
                              stroke="#ED184F40"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 0.5 }}
                            />
                            <motion.circle
                              cx="75" cy="25" r="5"
                              fill="#ED184F"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1 }}
                            />
                          </svg>
                        </motion.div>
                      </motion.div>
                    )}

                    {index === 1 && (
                      <motion.div
                        className="w-40 h-40 relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {/* Industry Insights SVG */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{ rotate: [0, 2, -2, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <motion.path
                              d="M20 80 L40 60 L60 70 L80 30"
                              fill="none"
                              stroke="#ED184F"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                            />
                            <motion.circle cx="40" cy="60" r="3" fill="#ED184F" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />
                            <motion.circle cx="60" cy="70" r="3" fill="#ED184F" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} />
                            <motion.circle cx="80" cy="30" r="3" fill="#ED184F" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }} />
                          </svg>
                        </motion.div>
                      </motion.div>
                    )}

                    {index === 2 && (
                      <motion.div
                        className="w-40 h-40 relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {/* Case Studies SVG */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <motion.rect
                              x="25" y="20" width="50" height="60"
                              fill="none"
                              stroke="#ED184F"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                            />
                            <motion.path
                              d="M35 40 H65 M35 50 H65 M35 60 H55"
                              stroke="#ED184F40"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 0.5 }}
                            />
                            <motion.path
                              d="M45 15 L55 15 L55 25 L45 25 Z"
                              fill="#ED184F"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1 }}
                            />
                          </svg>
                        </motion.div>
                      </motion.div>
                    )}

                    {index === 3 && (
                      <motion.div
                        className="w-40 h-40 relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {/* Team Spotlights SVG */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <motion.circle
                              cx="50" cy="50" r="8"
                              fill="#ED184F"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            />
                            {[0, 72, 144, 216, 288].map((angle, i) => (
                              <React.Fragment key={i}>
                                <motion.circle
                                  cx={50 + Math.cos(angle * Math.PI / 180) * 25}
                                  cy={50 + Math.sin(angle * Math.PI / 180) * 25}
                                  r="5"
                                  fill="#ED184F20"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                />
                                <motion.line
                                  x1="50"
                                  y1="50"
                                  x2={50 + Math.cos(angle * Math.PI / 180) * 25}
                                  y2={50 + Math.sin(angle * Math.PI / 180) * 25}
                                  stroke="#ED184F20"
                                  strokeWidth="1"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                />
                              </React.Fragment>
                            ))}
                          </svg>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Why Choose <AnimatedText text="UI Mitra" type="highlight" />
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
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
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

      {/* Final CTA Section */}
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
              Ready to Lead, Not Chase, on LinkedIn ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's build real influence, real opportunities, and real success.<br/>
              LinkedIn is the future of professional networking.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                Contact Us
              <ArrowRight className="w-5 h-5" />
            </motion.button>
              <motion.button
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Packages
                <Package className="w-5 h-5" />
              </motion.button>
            </div>
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

export default LinkedInMarketingPage;
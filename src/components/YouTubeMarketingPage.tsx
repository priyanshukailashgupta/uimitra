import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Youtube, Play, Video, TrendingUp, Users, Target, 
  MessageSquare, BarChart, ArrowRight, CheckCircle, 
  Eye, Heart, Share2, Award, Zap, Star, Film,
  Lightbulb, FileVideo, Megaphone, Rocket, Palette
} from 'lucide-react';
import AnimatedText from './AnimatedText';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  index: number;
}

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
      whileHover={{ y: -5 }}
    >
      <div className="relative p-8 bg-white rounded-xl shadow-sm border border-primary/10">
        <motion.div 
          className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-2 text-dark">{title}</h3>
        <p className="text-dark/70 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-dark/70">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

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
      className="relative p-6 bg-white rounded-xl shadow-lg border border-primary/10 overflow-hidden"
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
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-dark/70 mb-4">{description}</p>
      
      <ul className="space-y-2">
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

const YouTubeMarketingPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const stats = [
    { icon: <Users />, value: "500+", label: "New Freelancers Helped" },
    { icon: <Star />, value: "98%", label: "Student Success Rate" },
    { icon: <TrendingUp />, value: "300%", label: "Average Growth" },
    { icon: <Heart />, value: "50K+", label: "Community Members" }
  ];

  const features = [
    {
      title: "YouTube Growth Mastery",
      description: "Unlock the full potential of your channel with proven growth strategies",
      icon: <Rocket className="w-6 h-6" />,
      items: [
        "Master channel branding and optimization",
        "Learn SEO techniques for video discoverability",
        "Develop consistent content strategies",
        "Understand analytics and performance",
        "Explore monetization models"
      ]
    },
    {
      title: "Creative Video Projects",
      description: "Bring your ideas to life with video projects designed for impact",
      icon: <Film className="w-6 h-6" />,
      items: [
        "Create viral-ready video concepts",
        "Plan successful video series",
        "Build compelling storytelling",
        "Enhance professional editing skills",
        "Design eye-catching thumbnails"
      ]
    },
    {
      title: "Channel Career Growth",
      description: "Transform your YouTube passion into a lasting, profitable career",
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        "Build a standout personal brand",
        "Attract brand deals and sponsorships",
        "Diversify income streams",
        "Grow a loyal subscriber community",
        "Create sustainable career path"
      ]
    },
    {
      title: "Community Learning",
      description: "Grow faster and smarter through the power of collaboration",
      icon: <Users className="w-6 h-6" />,
      items: [
        "Share real growth experiences",
        "Collaborate with fellow YouTubers",
        "Join algorithm update discussions",
        "Get content feedback",
        "Network for creative opportunities"
      ]
    }
  ];

  const contentTypes = [
    {
      icon: <FileVideo className="w-8 h-8" />,
      title: "Tutorial Series",
      description: "Step-by-step guides for channel setup, optimization, and video creation"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Growth Case Studies",
      description: "Real-world examples of YouTube growth journeys and their strategies"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Tips & Tricks",
      description: "Actionable hacks for faster growth, engagement, and ranking"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Industry Trends",
      description: "Stay updated on YouTube algorithm changes, trends, and monetization updates"
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
              YouTube Marketing
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Grow Your Brand on{' '}
              <AnimatedText text="YouTube" type="gradient" />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help businesses create engaging video content and grow their YouTube presence
              through strategic content planning and optimization.
            </motion.p>

            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Start Your YouTube Journey</span>
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
              What You'll <AnimatedText text="Learn" type="highlight" />
            </motion.h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto mb-8">
              Master every aspect of YouTube content creation and channel growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-8 items-start bg-white rounded-xl p-8 shadow-sm border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-dark">{feature.title}</h3>
                  <p className="text-dark/70 mb-4">{feature.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-dark/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Types */}
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
              Content <AnimatedText text="Types" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg border border-primary/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {type.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-dark/70">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth Blueprint Section */}
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
              Our YouTube Growth <AnimatedText text="Blueprint" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Strategic Channel Planning",
                description: "Your success begins with a detailed roadmap",
                icon: <Lightbulb className="w-6 h-6 text-primary" />,
                features: [
                  "YouTube Brand Setup & Channel Audit",
                  "Defining audience avatars",
                  "Channel positioning strategy",
                  "Video calendar planning"
                ],
                step: "01"
              },
              {
                title: "Video Production & Optimization",
                description: "Quality content is king, but optimized content is ruler",
                icon: <Film className="w-6 h-6 text-primary" />,
                features: [
                  "Scripting for high watch-time",
                  "Custom thumbnails for CTR",
                  "Playlist architecture for better ranking",
                  "Consistent branding"
                ],
                step: "02"
              },
              {
                title: "YouTube SEO & Organic Growth",
                description: "Ranking isn't luck, it's precision",
                icon: <Target className="w-6 h-6 text-primary" />,
                features: [
                  "Keyword research with intent",
                  "Optimized titles & tags for search",
                  "Video Silos creation for better ranking",
                  "Playlist SEO optimization"
                ],
                step: "03"
              },
              {
                title: "Analytics & Growth Reporting",
                description: "YouTube analytics is complex, we make it work",
                icon: <BarChart className="w-6 h-6 text-primary" />,
                features: [
                  "Watch Time & Retention Analysis",
                  "Custom KPI dashboards for growth",
                  "Growth reports with insights",
                  "Multi-platform analytics"
                ],
                step: "04"
              }
            ].map((blueprint, index) => (
              <motion.div
                key={index}
                className="relative p-8 bg-white rounded-xl shadow-sm border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {blueprint.step}
                </div>
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {blueprint.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-dark">{blueprint.title}</h3>
                <p className="text-dark/70 mb-4">{blueprint.description}</p>
                <ul className="space-y-2">
                  {blueprint.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-dark/70">
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

      {/* What Makes Us Different Section */}
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
              What Makes Our <AnimatedText text="YouTube Growth" type="highlight" /> Services Different?
            </motion.h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              We don't just focus on uploads — we focus on impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Audience-First Growth",
                description: "Strategic audience targeting and engagement",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Data-Driven Campaigns",
                description: "Analytics-backed decision making",
                icon: <BarChart className="w-6 h-6" />
              },
              {
                title: "Content SEO Optimization",
                description: "Maximum visibility and discovery",
                icon: <FileVideo className="w-6 h-6" />
              },
              {
                title: "Monetization Strategies",
                description: "Revenue optimization techniques",
                icon: <Target className="w-6 h-6" />
              },
              {
                title: "Cross-Platform Integration",
                description: "Unified audience funnel management",
                icon: <Share2 className="w-6 h-6" />
              },
              {
                title: "Custom Analytics",
                description: "Detailed performance insights",
                icon: <Eye className="w-6 h-6" />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-dark">{service.title}</h3>
                <p className="text-dark/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section */}
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
              Technologies & <AnimatedText text="Tools" type="highlight" /> We Use
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Youtube className="w-8 h-8" />,
                title: "YouTube Studio Advanced",
                description: "Professional channel management"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Google Trends",
                description: "Content ideation and planning"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "TubeBuddy & VidIQ",
                description: "Channel optimization tools"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Creative Suite",
                description: "Professional video editing"
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: "Data Studio",
                description: "Custom analytics dashboards"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "AI Video Tools",
                description: "Advanced editing automation"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg border border-primary/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {tool.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                <p className="text-dark/70">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
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
              Why Choose <AnimatedText text="UI Mitra" type="highlight" />?
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: "Full-Service Expertise",
                description: "SEO, Ads, Content, Analytics"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Technical Support",
                description: "Complete production assistance"
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Brand Consistency",
                description: "Unified visual identity"
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Partnership Mindset",
                description: "Long-term growth focus"
              }
            ].map((reason, index) => (
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
                  {reason.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-dark/70">{reason.description}</p>
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
              Ready to Build Your YouTube Success Story ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              From 1,000 to 100,000 subscribers — we are your growth partners.<br/>
              Let's make your story seen, heard, and remembered.
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Consultation
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

export default YouTubeMarketingPage;
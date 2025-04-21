import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Share2, Target, TrendingUp, Users, Heart, 
  MessageSquare, BarChart, ArrowRight, CheckCircle, 
  Globe, Zap, Brain, Rocket, FileText, Eye,
  Lightbulb, Megaphone, QrCode, PieChart, LineChart,
  Image as ImageIcon, MessageCircle, Headphones, 
  Gamepad, Send, Palette, Layout, Code, Monitor,
  PenTool, Award
} from 'lucide-react';
import AnimatedText from './AnimatedText';

interface PlatformCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  index: number;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ 
  title, 
  description, 
  icon, 
  features,
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative p-6 bg-white rounded-xl shadow-lg border border-primary/10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
      
      <AnimatePresence>
        {isHovered && (
          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                className="flex items-center gap-2 text-dark/70"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-0"
        animate={{
          opacity: isHovered ? 0.05 : 0,
          background: [
            "linear-gradient(135deg, rgba(237,24,79,0.2), rgba(240,90,40,0.1))",
            "linear-gradient(135deg, rgba(240,90,40,0.2), rgba(244,122,82,0.1))",
            "linear-gradient(135deg, rgba(244,122,82,0.2), rgba(240,77,117,0.1))",
            "linear-gradient(135deg, rgba(237,24,79,0.2), rgba(240,90,40,0.1))"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
};

interface ContentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  index: number;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, description, icon, items, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative p-6 bg-white rounded-xl shadow-lg border border-primary/10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
      
      <AnimatePresence>
        {isHovered && (
          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
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
          </motion.ul>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-0"
        animate={{
          opacity: isHovered ? 0.05 : 0,
          background: [
            "linear-gradient(135deg, rgba(237,24,79,0.2), rgba(240,90,40,0.1))",
            "linear-gradient(135deg, rgba(240,90,40,0.2), rgba(244,122,82,0.1))",
            "linear-gradient(135deg, rgba(244,122,82,0.2), rgba(240,77,117,0.1))",
            "linear-gradient(135deg, rgba(237,24,79,0.2), rgba(240,90,40,0.1))"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
};

const OtherPlatformsPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const platforms = [
    {
      title: "Pinterest Marketing",
      description: "Visual storytelling and lifestyle branding",
      icon: <ImageIcon className="w-6 h-6" />,
      features: [
        "Visual Content Strategy",
        "Pin Optimization",
        "Board Management",
        "Rich Pins Setup",
        "Analytics Tracking"
      ]
    },
    {
      title: "Reddit Marketing",
      description: "Community-driven content and engagement",
      icon: <MessageCircle className="w-6 h-6" />,
      features: [
        "Subreddit Strategy",
        "AMA Management",
        "Content Marketing",
        "Community Building",
        "Karma Growth"
      ]
    },
    {
      title: "Spotify Branding",
      description: "Audio branding and playlist marketing",
      icon: <Headphones className="w-6 h-6" />,
      features: [
        "Branded Playlists",
        "Audio Ads",
        "Podcast Strategy",
        "Music Marketing",
        "Listener Engagement"
      ]
    },
    {
      title: "Twitch Marketing",
      description: "Live streaming and gaming community",
      icon: <Gamepad className="w-6 h-6" />,
      features: [
        "Channel Management",
        "Stream Strategy",
        "Community Building",
        "Influencer Collabs",
        "Live Events"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Niche Targeting",
      description: "Reach specific audience segments with precision"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Higher Engagement",
      description: "Less competition, more meaningful interactions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Market Expansion",
      description: "Tap into underutilized platforms and audiences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "First Mover Advantage",
      description: "Establish presence before competitors"
    }
  ];

  const features = [
    {
      icon: <Brain />,
      title: "Strategic Planning",
      description: "Platform-specific strategies"
    },
    {
      icon: <Palette />,
      title: "Content Creation",
      description: "Native content for each platform"
    },
    {
      icon: <Layout />,
      title: "Profile Optimization",
      description: "Platform-optimized presence"
    },
    {
      icon: <Monitor />,
      title: "Performance Tracking",
      description: "Cross-platform analytics"
    }
  ];

  const stats = [
    { value: "15+", label: "Platforms Managed" },
    { value: "200%", label: "Average Growth" },
    { value: "90%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Coverage" }
  ];

  const platformStats = [
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "33%",
      description: "More Referral Traffic"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "60%",
      description: "Gen Z Buying Influence"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Rapid",
      description: "Threads Growth"
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Deep",
      description: "Reddit Engagement"
    }
  ];

  const platformServices = [
    {
      title: "Platform-Specific Strategy",
      description: "Customized growth plans",
      icon: <Target className="w-6 h-6 text-white" />,
      items: [
        "Platform behavior research",
        "Custom content formats",
        "Tone and design matching",
        "Community guidelines",
        "Growth roadmap"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Content Creation",
      description: "Platform-optimized content",
      icon: <PenTool className="w-6 h-6 text-white" />,
      items: [
        "Viral Pin designs",
        "Engaging Snaps",
        "Threads content",
        "Quora answers",
        "Newsletter designs"
      ],
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Community Management",
      description: "Active engagement",
      icon: <Users className="w-6 h-6 text-white" />,
      items: [
        "Reddit moderation",
        "Quora engagement",
        "Group management",
        "UGC campaigns",
        "Community building"
      ],
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      title: "Paid Promotion",
      description: "Strategic advertising",
      icon: <BarChart className="w-6 h-6 text-white" />,
      items: [
        "Pinterest Ads",
        "Snapchat campaigns",
        "Reddit targeting",
        "Newsletter promotion",
        "Performance tracking"
      ],
      gradient: "from-[#0093E9]/90 to-[#80D0C7]/95"
    }
  ];

  const technicalCapabilities = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "API Integration",
      description: "Telegram & WhatsApp"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Rich Pins Setup",
      description: "Pinterest optimization"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Bot Development",
      description: "Reddit & Telegram"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Cross-platform tracking"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Automation",
      description: "Newsletter & engagement"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Platform-specific tools"
    }
  ];

  const targetBrands = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Audience Diversification",
      description: "Beyond mainstream platforms"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Traffic Sources",
      description: "Multi-channel growth"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Thought Leadership",
      description: "Niche authority building"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Future-Proofing",
      description: "Early platform adoption"
    }
  ];

  const expectedResults = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "2x Growth",
      description: "Multi-platform expansion"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "3x Traffic",
      description: "From niche platforms"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Stronger Authority",
      description: "Cross-channel presence"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Early Advantage",
      description: "On rising platforms"
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
              Other Platforms
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Expand Your Reach on{' '}
              <AnimatedText text="Emerging" type="gradient" />{' '}Platforms
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help businesses establish a presence on emerging social media platforms
              and leverage new opportunities for growth and engagement.
            </motion.p>

            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Explore New Platforms</span>
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
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-dark/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Platforms Grid */}
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
              Platforms We <AnimatedText text="Master" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <PlatformCard
                key={index}
                title={platform.title}
                description={platform.description}
                icon={platform.icon}
                features={platform.features}
                index={index}
              />
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
              Why Choose <AnimatedText text="Alternative Platforms" type="highlight" />
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

      {/* Features Section */}
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
              Our <AnimatedText text="Approach" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-dark/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Other Platforms Matter Section */}
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
              Why <AnimatedText text="Other Platforms" type="highlight" /> Matter
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformStats.map((stat, index) => (
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
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${
                    index % 4 === 0 ? "from-[#ED184F]/90 to-[#893168]/95" :
                    index % 4 === 1 ? "from-[#4158D0]/90 to-[#2D3A8C]/95" :
                    index % 4 === 2 ? "from-[#F05A28]/90 to-[#BE3A1D]/95" :
                    "from-[#0093E9]/90 to-[#80D0C7]/95"
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-primary">{stat.title}</h3>
                <p className="text-dark/70">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Services Section */}
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
              Our <AnimatedText text="Platform Services" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformServices.map((service, index) => (
              <ContentCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                items={service.items}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Technical Capabilities Section */}
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
              Technical <AnimatedText text="Capabilities" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalCapabilities.map((capability, index) => (
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
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${
                    index % 4 === 0 ? "from-[#ED184F]/90 to-[#893168]/95" :
                    index % 4 === 1 ? "from-[#4158D0]/90 to-[#2D3A8C]/95" :
                    index % 4 === 2 ? "from-[#F05A28]/90 to-[#BE3A1D]/95" :
                    "from-[#0093E9]/90 to-[#80D0C7]/95"
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-white">{capability.icon}</div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p className="text-dark/70">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Target Brands Section */}
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
              Perfect for <AnimatedText text="Brands" type="highlight" /> Who Want To
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetBrands.map((brand, index) => (
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
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${
                    index % 4 === 0 ? "from-[#ED184F]/90 to-[#893168]/95" :
                    index % 4 === 1 ? "from-[#4158D0]/90 to-[#2D3A8C]/95" :
                    index % 4 === 2 ? "from-[#F05A28]/90 to-[#BE3A1D]/95" :
                    "from-[#0093E9]/90 to-[#80D0C7]/95"
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-white">{brand.icon}</div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{brand.title}</h3>
                <p className="text-dark/70">{brand.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Expected Results Section */}
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
              Results with <AnimatedText text="UI Mitra" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expectedResults.map((result, index) => (
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
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${
                    index % 4 === 0 ? "from-[#ED184F]/90 to-[#893168]/95" :
                    index % 4 === 1 ? "from-[#4158D0]/90 to-[#2D3A8C]/95" :
                    index % 4 === 2 ? "from-[#F05A28]/90 to-[#BE3A1D]/95" :
                    "from-[#0093E9]/90 to-[#80D0C7]/95"
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-white">{result.icon}</div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{result.title}</h3>
                <p className="text-dark/70">{result.description}</p>
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
              Ready to Explore New Horizons ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's build your presence on platforms that matter.<br/>
              Your audience is waiting.
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

export default OtherPlatformsPage;
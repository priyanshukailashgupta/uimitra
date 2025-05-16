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
import AnimatedText from '../../AnimatedText';

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
      whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
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
    { value: "15+", label: "Platforms Managed", icon: <Target className="w-6 h-6" /> },
    { value: "200%", label: "Average Growth", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "90%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> },
    { value: "24/7", label: "Support Coverage", icon: <Globe className="w-6 h-6" /> }
  ];

  const platformStats = [
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "33% Higher",
      description: "Cross-Platform Traffic"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "60% Growth",
      description: "Niche Platform Engagement"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "2x Faster",
      description: "Community Building"
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "45% Better",
      description: "User Retention Rate"
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
      title: "Audience Expansion",
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

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore New Platforms</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                  {stat.icon}
                </motion.div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
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
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}

              >
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-primary/10 transform group-hover:scale-105 transition-transform duration-300" />
                
                <div className="relative p-8">
                  <div className="flex items-start gap-6">
                <motion.div 
                      className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                      {platform.icon}
                </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{platform.title}</h3>
                      <p className="text-dark/70 text-lg">{platform.description}</p>
                    </div>
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
              Why Choose <AnimatedText text="Alternative Platforms" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Niche Targeting",
                description: "Reach specific audiences"
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Higher Engagement",
                description: "More meaningful interactions"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Market Expansion",
                description: "Tap untapped platforms"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "First Mover Advantage",
                description: "Early platform advantage"
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Strategic Growth",
                description: "Platform-specific wins"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community Focus",
                description: "Build loyal followers"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-full shadow-lg border border-primary/10 text-center aspect-square flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
                >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-1 text-dark">{benefit.title}</h3>
                <p className="text-dark/70 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, delay: 4, repeat: Infinity, ease: "easeInOut" }}
          />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformStats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
              >
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-primary/10 transform group-hover:scale-105 transition-transform duration-300" />
                
                <div className="relative p-8">
                  <div className="flex items-center gap-6 mb-6">
                <motion.div 
                      className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold text-dark mb-2">{stat.title}</h3>
                      <div className="w-16 h-1 bg-primary/20 rounded-full" />
                    </div>
                  </div>
                  <p className="text-dark/70 text-lg mb-4">{stat.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-dark/70">Increased brand visibility</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-dark/70">Higher engagement rates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-dark/70">Better conversion rates</span>
                    </div>
                  </div>
                </div>
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

          <div className="grid grid-cols-1 gap-8">
            {platformServices.map((service, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}

                
              >
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-primary/10 transform group-hover:scale-105 transition-transform duration-300" />
                
                <div className="relative p-8">
                  <div className="flex items-center gap-6 mb-6">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-8 h-8">{service.icon}</div>
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold text-dark mb-2">{service.title}</h3>
                      <div className="w-16 h-1 bg-primary/20 rounded-full" />
                    </div>
                  </div>
                  <p className="text-dark/70 text-lg mb-4">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">{item}</span>
                      </div>
            ))}
          </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-dark/70">Advanced integration features</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-dark/70">Real-time data processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-dark/70">Custom automation workflows</span>
                    </div>
                  </div>
                </div>
              </motion.div>
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

          <div className="space-y-16">
            {technicalCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                
              >
                <div className="w-full md:w-1/2">
                  <motion.div
                    className="p-8 bg-white rounded-xl shadow-lg border border-primary/10 h-full"
                    whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
                    >
                <motion.div 
                      className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                      {capability.icon}
                </motion.div>
                    <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                    <p className="text-dark/70 text-lg mb-6">{capability.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-dark/70">Advanced integration features</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-dark/70">Real-time data processing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-dark/70">Custom automation workflows</span>
                      </div>
                    </div>
              </motion.div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center justify-center h-64">
                    {index === 0 && (
                      <motion.svg
                        viewBox="0 0 200 200"
                        className="w-48 h-48"
                        initial="hidden"
                        animate="visible"
                      >
                        {/* API Integration SVG */}
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="40"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.path
                          d="M60 100 L85 100 M115 100 L140 100 M100 60 L100 85 M100 115 L100 140"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                        />
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="5"
                          fill="var(--primary)"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.svg>
                    )}
                    {index === 1 && (
                      <motion.svg
                        viewBox="0 0 200 200"
                        className="w-48 h-48"
                        initial="hidden"
                        animate="visible"
                      >
                        {/* Rich Pins Setup SVG */}
                        <motion.rect
                          x="70"
                          y="70"
                          width="60"
                          height="60"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1, rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.path
                          d="M100 50 L100 150"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="30"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.svg>
                    )}
                    {index === 2 && (
                      <motion.svg
                        viewBox="0 0 200 200"
                        className="w-48 h-48"
                        initial="hidden"
                        animate="visible"
                      >
                        {/* Bot Development SVG */}
                        <motion.rect
                          x="60"
                          y="80"
                          width="80"
                          height="60"
                          rx="10"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ y: 60 }}
                          animate={{ y: 80 }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.circle
                          cx="80"
                          cy="100"
                          r="5"
                          fill="var(--primary)"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.circle
                          cx="120"
                          cy="100"
                          r="5"
                          fill="var(--primary)"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, delay: 0.5, repeat: Infinity }}
                        />
                        <motion.path
                          d="M90 120 Q100 130 110 120"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.svg>
                    )}
                    {index === 3 && (
                      <motion.svg
                        viewBox="0 0 200 200"
                        className="w-48 h-48"
                        initial="hidden"
                        animate="visible"
                      >
                        {/* Analytics Dashboard SVG */}
                        {/* Background Circle */}
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="45"
                          stroke="var(--primary)"
                          strokeWidth="1"
                          fill="none"
                          strokeDasharray="4,4"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          style={{ transformOrigin: '100px 100px' }}
                        />

                        {/* Animated Chart Lines */}
                        <motion.path
                          d="M60 120 Q80 80 100 110 T140 70"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: [0, 1, 1, 0] }}
                          transition={{ 
                            duration: 4,
                            times: [0, 0.5, 0.8, 1],
                            repeat: Infinity 
                          }}
                        />

                        {/* Moving Data Points */}
                        {[0, 1, 2, 3].map((i) => (
                          <motion.circle
                            key={i}
                            cx="100"
                            cy="100"
                            r="4"
                            fill="var(--primary)"
                            animate={{
                              cx: [60, 80, 100, 120, 140, 120, 100, 80, 60],
                              cy: [100, 80, 100, 90, 70, 90, 100, 80, 100],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 8,
                              delay: i * 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        ))}

                        {/* Rotating Bars */}
                        {[0, 1, 2, 3].map((i) => {
                          const angle = i * 90;
                          return (
                            <motion.rect
                              key={i}
                              x="95"
                              y="60"
                              width="10"
                              height="30"
                              fill="var(--primary)"
                              initial={{ rotate: angle }}
                              animate={{ 
                                rotate: [angle, angle + 360],
                                scaleY: [1, 1.5, 1]
                              }}
                              transition={{
                                rotate: {
                                  duration: 10,
                                  repeat: Infinity,
                                  ease: "linear"
                                },
                                scaleY: {
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.5
                                }
                              }}
                              style={{ transformOrigin: '100px 100px' }}
                            />
                          );
                        })}

                        {/* Pulsing Center */}
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="8"
                          fill="var(--primary)"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                      </motion.svg>
                    )}
                    {index === 4 && (
                      <motion.svg
                        viewBox="0 0 200 200"
                        className="w-48 h-48"
                        initial="hidden"
                        animate="visible"
                      >
                        {/* Automation SVG */}
                        <motion.path
                          d="M60 100 C60 60, 140 60, 140 100 C140 140, 60 140, 60 100"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.circle
                          cx="100"
                          cy="80"
                          r="10"
                          fill="none"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          animate={{ 
                            y: [80, 120, 80],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.path
                          d="M85 100 L115 100"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1, rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity }}
                          style={{ transformOrigin: "100px 100px" }}
                        />
                        {[0, 90, 180, 270].map((angle, i) => {
                          const radian = angle * (Math.PI / 180);
                          return (
                            <motion.circle
                              key={i}
                              cx={100 + 40 * Math.cos(radian)}
                              cy={100 + 40 * Math.sin(radian)}
                              r="4"
                              fill="var(--primary)"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.5,
                                repeat: Infinity
                              }}
                            />
                          );
                        })}
                      </motion.svg>
                    )}
                    {index === 5 && (
                      <motion.svg
                        viewBox="0 0 200 200"
                        className="w-48 h-48"
                        initial="hidden"
                        animate="visible"
                      >
                        {/* Outer rotating circle */}
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="45"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          fill="none"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          style={{ transformOrigin: '100px 100px' }}
                        />

                        {/* Inner rotating gear */}
                        <motion.path
                          d="M100 70 L110 85 L125 85 L115 100 L125 115 L110 115 L100 130 L90 115 L75 115 L85 100 L75 85 L90 85 Z"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          fill="none"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          style={{ transformOrigin: '100px 100px' }}
                        />

                        {/* Connecting lines */}
                        {[0, 90, 180, 270].map((angle, i) => {
                          const radian = angle * (Math.PI / 180);
                          return (
                            <motion.line
                              key={i}
                              x1={100}
                              y1={100}
                              x2={100 + 35 * Math.cos(radian)}
                              y2={100 + 35 * Math.sin(radian)}
                              stroke="var(--primary)"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: [0, 1, 0] }}
                              transition={{ 
                                duration: 2,
                                delay: i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          );
                        })}

                        {/* Orbiting circles */}
                        {[0, 90, 180, 270].map((angle, i) => {
                          const radian = angle * (Math.PI / 180);
                          return (
                            <motion.circle
                              key={i}
                              cx={100 + 35 * Math.cos(radian)}
                              cy={100 + 35 * Math.sin(radian)}
                              r="4"
                              fill="var(--primary)"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3]
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          );
                        })}

                        {/* Center circle */}
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="8"
                          fill="none"
                          stroke="var(--primary)"
                          strokeWidth="2"
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: 360
                          }}
                          transition={{
                            scale: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            },
                            rotate: {
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear"
                            }
                          }}
                          style={{ transformOrigin: '100px 100px' }}
                        />

                        {/* Center dot */}
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="3"
                          fill="var(--primary)"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.svg>
                    )}
                  </div>
                </div>
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

          <div className="relative">
            <motion.div 
              className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 5 }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {targetBrands.map((brand, index) => (
              <motion.div
                key={index}
                  className="group relative h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}

                
              >
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-primary/10 transform group-hover:scale-105 transition-transform duration-300" />
                  
                  <div className="relative p-6 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center flex-grow">
                <motion.div 
                        className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                        <div className="w-8 h-8 text-primary flex items-center justify-center">{brand.icon}</div>
                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
                </motion.div>
                      
                      <h3 className="text-xl font-bold mb-3">{brand.title}</h3>
                      <p className="text-dark/70 text-sm mb-6">{brand.description}</p>
                      
                      <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden mb-6">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>

                      <div className="flex flex-col gap-3 w-full mt-auto">
                        <div className="p-3 bg-primary/5 rounded-lg">
                          <div className="text-base font-bold text-primary mb-1">Key Benefit</div>
                          <div className="text-xs text-dark/70">Unique platform advantages</div>
                        </div>
                        <div className="p-3 bg-secondary/5 rounded-lg">
                          <div className="text-base font-bold text-secondary mb-1">Growth Potential</div>
                          <div className="text-xs text-dark/70">Rapid expansion opportunities</div>
                        </div>
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
            </div>
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
              Results with <AnimatedText text="Uimitra" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 blur-3xl" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {expectedResults.map((result, index) => (
              <motion.div
                key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative p-8">
                    <div className="flex items-start gap-6">
                <motion.div 
                        className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                        <div className="w-8 h-8 text-primary flex items-center justify-center">{result.icon}</div>
                </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-dark">{result.title}</h3>
                        <p className="text-dark/70 text-lg mb-4">{result.description}</p>
                        
                        <div className="mt-4">
                          <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-primary to-secondary"
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
            </div>
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
            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
            >
              Get Started
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

export default OtherPlatformsPage;
import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Instagram, Camera, Heart, Users, Target, MessageSquare,
  BarChart, ArrowRight, CheckCircle, Share2, Eye, Star,
  Globe, Zap, Brain, Rocket, FileImage, Film, Lightbulb,
  Megaphone, Palette, Layout, Code, Smartphone, PenTool,
  BookOpen, TrendingUp, Award, Gift
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
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="relative p-8 text-white">
        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/80 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white/80" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const InstagramMarketingPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const stats = [
    { icon: <Users />, value: "50K+", label: "Community Members" },
    { icon: <Heart />, value: "98%", label: "Engagement Rate" },
    { icon: <Share2 />, value: "1M+", label: "Monthly Impressions" },
    { icon: <Star />, value: "4.9", label: "User Rating" }
  ];

  const contentTypes = [
    {
      title: "Design in Motion",
      description: "From Figma to finished product — see our UI/UX journey visualized",
      icon: <Film />,
      items: [
        "Process Breakdowns",
        "Design Timelapses",
        "Animation Tutorials",
        "Tool Demonstrations",
        "Live Design Sessions"
      ]
    },
    {
      title: "Mini-Tutorial Reels",
      description: "Quick, actionable design and development tips",
      icon: <Camera />,
      items: [
        "Design Hacks",
        "Code Tips",
        "Motion Guides",
        "Tool Tutorials",
        "Workflow Tips"
      ]
    },
    {
      title: "Carousel Wisdom",
      description: "In-depth design knowledge in swipeable format",
      icon: <BookOpen />,
      items: [
        "UX Best Practices",
        "Typography Tips",
        "Color Theory",
        "Design Psychology",
        "Layout Principles"
      ]
    },
    {
      title: "Community Spotlights",
      description: "Celebrating creativity and innovation",
      icon: <Megaphone />,
      items: [
        "Featured Designers",
        "Project Showcases",
        "Success Stories",
        "Team Highlights",
        "Client Features"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Brain />,
      title: "Design Education",
      description: "Learn design principles and best practices"
    },
    {
      icon: <Rocket />,
      title: "Career Growth",
      description: "Insights for professional development"
    },
    {
      icon: <Heart />,
      title: "Community",
      description: "Connect with fellow designers"
    },
    {
      icon: <TrendingUp />,
      title: "Latest Trends",
      description: "Stay updated with industry trends"
    }
  ];

  const features = [
    {
      icon: <Layout />,
      title: "UI Design Tips",
      description: "Daily interface design insights"
    },
    {
      icon: <PenTool />,
      title: "Design Resources",
      description: "Tools and templates to enhance your work"
    },
    {
      icon: <Code />,
      title: "Development Guides",
      description: "Code snippets and best practices"
    },
    {
      icon: <Gift />,
      title: "Exclusive Content",
      description: "Special resources for followers"
    }
  ];

  const growthStats = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "2.35B+",
      description: "Monthly Active Users"
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "79%",
      description: "Search Products on IG"
    },
    {
      icon: <Film className="w-6 h-6 text-white" />,
      title: "22%",
      description: "Higher Reel Engagement"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "70%",
      description: "Shop via Instagram"
    }
  ];

  const growthServices = [
    {
      title: "Profile & Brand Optimization",
      description: "Professional profile setup and branding",
      icon: <PenTool className="w-6 h-6 text-white" />,
      items: [
        "Professional bio crafting with SEO",
        "Profile image and Highlights branding",
        "Story Highlights strategy",
        "Link-in-bio optimization",
        "Grid planning for aesthetics"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Content Creation & Strategy",
      description: "Engaging content that converts",
      icon: <Camera className="w-6 h-6 text-white" />,
      items: [
        "Monthly editorial calendars",
        "Viral Reels production",
        "Carousel post designs",
        "UGC campaigns",
        "Trend adaptation"
      ],
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Audience Growth",
      description: "Building genuine community",
      icon: <Users className="w-6 h-6 text-white" />,
      items: [
        "Organic engagement strategies",
        "Targeted hashtag research",
        "Strategic collaborations",
        "Contest management",
        "Story engagement campaigns"
      ],
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      title: "Paid Promotion",
      description: "Strategic ad campaigns",
      icon: <Target className="w-6 h-6 text-white" />,
      items: [
        "Instagram Ads setup",
        "Retargeting campaigns",
        "Conversion-driven creatives",
        "Story & Carousel Ads",
        "Performance optimization"
      ],
      gradient: "from-[#0093E9]/90 to-[#80D0C7]/95"
    },
    {
      title: "Advanced Analytics",
      description: "Data-driven insights",
      icon: <BarChart className="w-6 h-6 text-white" />,
      items: [
        "Content performance analytics",
        "Audience behavior insights",
        "Hashtag tracking",
        "Monthly growth reports",
        "Strategic recommendations"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    }
  ];

  const technicalServices = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Meta Business Suite",
      description: "Streamlined management"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "API Integration",
      description: "CRM and analytics tools"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Automation",
      description: "Ethical scheduling"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Pixel Setup",
      description: "Retargeting optimization"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Profile discoverability"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Trend Dashboard",
      description: "Viral content tracking"
    }
  ];

  const targetAudience = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "E-commerce",
      description: "Product-based brands"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Influencers",
      description: "Personal brand growth"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Creators",
      description: "Niche authority building"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Industries",
      description: "Travel, beauty, fashion"
    }
  ];

  const expectedResults = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "3x Engagement",
      description: "Within 90 days"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Steady Growth",
      description: "Real, active followers"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "2x CTR",
      description: "Website click-through"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Brand Authority",
      description: "Increased loyalty"
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
              Instagram Marketing
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Showcase Your Brand on{' '}
              <AnimatedText text="Instagram" type="gradient" />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help businesses create visually stunning content and grow their Instagram presence
              through strategic content planning and community engagement.
            </motion.p>

            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Start Your Instagram Growth</span>
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

      {/* Content Types Grid */}
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
              What We <AnimatedText text="Share" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((content, index) => (
              <ContentCard
                key={index}
                title={content.title}
                description={content.description}
                icon={content.icon}
                items={content.items}
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
              Why Follow <AnimatedText text="UI Mitra" type="highlight" />
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
              Content You'll <AnimatedText text="Love" type="highlight" />
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

      {/* Why Instagram Growth Matters Section */}
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
              Why <AnimatedText text="Instagram Growth" type="highlight" /> is Critical
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthStats.map((stat, index) => (
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

      {/* Instagram Growth Services Section */}
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
              Our <AnimatedText text="Instagram Growth" type="highlight" /> Services
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.items}
                icon={service.icon}
                gradient={service.gradient}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Technical Services Section */}
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
              Technical <AnimatedText text="Services" type="highlight" /> for Instagram
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalServices.map((service, index) => (
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
                  <div className="text-white">{service.icon}</div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-dark/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
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
              Who Should Focus on <AnimatedText text="Instagram Growth" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudience.map((audience, index) => (
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
                  <div className="text-white">{audience.icon}</div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                <p className="text-dark/70">{audience.description}</p>
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
              Join Our <AnimatedText text="Creative Community" type="highlight" />
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Follow us for daily inspiration, insights, and interaction.<br/>
              Be part of something extraordinary.
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Follow @UIMitra
              <Instagram className="w-5 h-5" />
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

export default InstagramMarketingPage;
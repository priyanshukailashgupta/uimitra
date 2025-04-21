import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Twitter, MessageSquare, TrendingUp, Users, Target, 
  BarChart, ArrowRight, CheckCircle, Share2, Heart,
  Eye, Star, Globe, Zap, Brain, Rocket, FileText,
  Lightbulb, Megaphone, LineChart, PieChart, UserCircle, Code2
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
      className="relative rounded-xl overflow-hidden bg-white shadow-lg border border-primary/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
    >
      <div className="relative p-8">
        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-dark">{title}</h3>
        <p className="text-dark/80 mb-6">{description}</p>
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

const TwitterMarketingPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const stats = [
    { icon: <Users />, value: "50K+", label: "Community Members" },
    { icon: <Heart />, value: "98%", label: "Engagement Rate" },
    { icon: <Share2 />, value: "1M+", label: "Monthly Impressions" },
    { icon: <Star />, value: "4.9", label: "User Rating" }
  ];

  const features = [
    {
      title: "Threaded Insights",
      description: "Deep dives into UI/UX, coding, and design psychology",
      icon: <Brain />,
      items: [
        "Design Psychology",
        "Code Tutorials",
        "UX Best Practices",
        "Industry Trends",
        "Case Studies"
      ]
    },
    {
      title: "Real-Time Interaction",
      description: "Direct engagement with our expert community",
      icon: <MessageSquare />,
      items: [
        "Live Q&A Sessions",
        "Design Reviews",
        "Community Polls",
        "Expert Advice",
        "Networking"
      ]
    },
    {
      title: "Trend Commentary",
      description: "Stay ahead with our expert analysis",
      icon: <TrendingUp />,
      items: [
        "Tech Trends",
        "Design Evolution",
        "Industry News",
        "Market Analysis",
        "Future Predictions"
      ]
    },
    {
      title: "Community Spotlights",
      description: "Celebrating creativity and innovation",
      icon: <Megaphone />,
      items: [
        "Success Stories",
        "Project Showcases",
        "Team Highlights",
        "Client Features",
        "Community Awards"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Lightbulb />,
      title: "Quick Tips & Hacks",
      description: "Daily design and development insights"
    },
    {
      icon: <Rocket />,
      title: "Growth Resources",
      description: "Tools and strategies for scaling"
    },
    {
      icon: <FileText />,
      title: "Content Library",
      description: "Curated resources and guides"
    },
    {
      icon: <Globe />,
      title: "Global Network",
      description: "Connect with creators worldwide"
    }
  ];

  const tweetTypes = [
    {
      icon: <LineChart />,
      title: "Analytics & Insights",
      description: "Data-driven design decisions"
    },
    {
      icon: <Eye />,
      title: "Design Inspiration",
      description: "Creative sparks daily"
    },
    {
      icon: <PieChart />,
      title: "Industry Reports",
      description: "Market trends and analysis"
    },
    {
      icon: <Target />,
      title: "Career Growth",
      description: "Professional development tips"
    }
  ];

  const growthStats = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "550M+",
      description: "Monthly Active Users"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "79%",
      description: "Users Follow Brands"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "#1",
      description: "For Industry News"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "2-5x",
      description: "Faster Growth"
    }
  ];

  const growthServices = [
    {
      title: "Profile & Brand Setup",
      description: "Professional profile optimization and branding",
      icon: <UserCircle className="w-6 h-6 text-white" />,
      features: [
        "Bio and username optimization (SEO-friendly)",
        "High-converting banner design",
        "Strategic hashtag integration",
        "Distinct brand voice crafting",
        "Profile linking strategy"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Content Calendar & Posting",
      description: "Strategic content planning and execution",
      icon: <FileText className="w-6 h-6 text-white" />,
      features: [
        "Monthly theme-based content calendar",
        "High-performing content strategies",
        "Strategic Tweet timing",
        "Real-time event coverage",
        "Evergreen content archives"
      ],
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Community Building",
      description: "Authentic engagement and growth",
      icon: <Users className="w-6 h-6 text-white" />,
      features: [
        "Organic follower growth",
        "Twitter Spaces participation",
        "AMAs and live Q&A sessions",
        "Targeted engagement campaigns",
        "Micro-influencer collaborations"
      ],
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      title: "Advanced Analytics",
      description: "Data-driven insights and optimization",
      icon: <BarChart className="w-6 h-6 text-white" />,
      features: [
        "Engagement rate monitoring",
        "Follower growth tracking",
        "Top-performing tweet analysis",
        "Hashtag performance reports",
        "Custom recommendations"
      ],
      gradient: "from-[#0093E9]/90 to-[#80D0C7]/95"
    }
  ];

  const technicalServices = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "API Integration",
      description: "Seamless system connectivity"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation Setup",
      description: "Legitimate scheduling tools"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Tweetstorm Creation",
      description: "Dynamic CTA placements"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Social Listening",
      description: "Brand mention tracking"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Pixel Integration",
      description: "Retargeting setup"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Trend Tracking",
      description: "Custom keyword analysis"
    }
  ];

  const targetAudience = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Brands",
      description: "Real-time relevance"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "SaaS Startups",
      description: "Product updates"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Entrepreneurs",
      description: "Authority building"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Media Platforms",
      description: "News distribution"
    }
  ];

  const expectedResults = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "2-5x Growth",
      description: "Faster organic follower growth"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "3x Engagement",
      description: "Higher interaction rates"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "4x Opportunities",
      description: "More inbound leads"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Brand Recognition",
      description: "Increased niche authority"
    }
  ];

  const getGradientByIndex = (index: number): string => {
    const gradients = [
      "from-[#ED184F]/90 to-[#893168]/95",
      "from-[#4158D0]/90 to-[#2D3A8C]/95",
      "from-[#F05A28]/90 to-[#BE3A1D]/95",
      "from-[#0093E9]/90 to-[#80D0C7]/95"
    ];
    return gradients[index % gradients.length];
  };

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
              Twitter Marketing
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Amplify Your Voice on{' '}
              <AnimatedText text="Twitter" type="gradient" />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help businesses build a strong Twitter presence and engage with their audience
              through strategic content and community management.
            </motion.p>

            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Start Your Twitter Growth</span>
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
              What You'll <AnimatedText text="Find" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                items={feature.items}
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

      {/* Tweet Types Grid */}
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
            {tweetTypes.map((type, index) => (
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

      {/* Why X Growth Matters Section */}
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
              Why <AnimatedText text="X Growth" type="highlight" /> Matters
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
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${getGradientByIndex(index)}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-white">{stat.icon}</div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-primary">{stat.title}</h3>
                <p className="text-dark/70">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* X Growth Services Section */}
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
              Our <AnimatedText text="X Growth" type="highlight" /> Services
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthServices.map((service, index) => (
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
              Technical <AnimatedText text="Services" type="highlight" /> for X
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
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${getGradientByIndex(index)}`}
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
              Who Should Focus on <AnimatedText text="X Growth" type="highlight" />
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
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${getGradientByIndex(index)}`}
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
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${getGradientByIndex(index)}`}
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
              Join Our <AnimatedText text="Community" type="highlight" />
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Follow us on X for daily inspiration, insights, and interaction.<br/>
              Be part of something extraordinary.
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Follow @UIMintra
              <Twitter className="w-5 h-5" />
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

export default TwitterMarketingPage;
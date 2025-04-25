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
        <div className="w-6 h-6 text-primary flex items-center justify-center">{icon}</div>
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
        <div className="w-6 h-6 text-primary flex items-center justify-center">{icon}</div>
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
          <div className="w-6 h-6 text-primary flex items-center justify-center">{icon}</div>
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
      description: "Tools and strategies for scaling to grow "
    },
    {
      icon: <FileText />,
      title: "Content Library",
      description: "Curated resources and guides to get content ideas"
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
      icon: <UserCircle className="w-6 h-6" />,
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
      icon: <FileText className="w-6 h-6" />,
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
      icon: <Users className="w-6 h-6" />,
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
      icon: <BarChart className="w-6 h-6" />,
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
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-6 h-6 text-primary flex items-center justify-center">{stat.icon}</div>
                </motion.div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-dark/70">{stat.label}</div>
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

      {/* Benefits Section - Why Follow UI Mitra */}
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

          <div className="relative">
            <div className="absolute left-0 right-0 h-0.5 bg-primary/10 top-24 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="w-6 h-6 text-primary">{benefit.icon}</div>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white rounded-xl p-6 w-full shadow-sm border border-primary/5"
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
                  >
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-dark/70 text-sm leading-relaxed">{benefit.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
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

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 blur-3xl" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {growthStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative p-8">
                    <div className="flex items-start gap-6">
                  <motion.div
                        className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        <div className="w-8 h-8 text-primary flex items-center justify-center">{stat.icon}</div>
                    </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-primary">{stat.title}</h3>
                        <p className="text-dark/70 text-lg mb-4">{stat.description}</p>
                        
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

          <div className="space-y-8">
            {growthServices.map((service, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden bg-white shadow-lg border border-primary/10"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-8 bg-gradient-to-r from-primary to-secondary flex flex-col items-center justify-center text-white">
                  <motion.div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative bg-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                      <div className="w-8 h-8 text-white flex items-center justify-center">{service.icon}</div>
                  </motion.div>
                    <h3 className="text-2xl font-bold text-center text-white">{service.title}</h3>
                    <p className="text-white/90 text-center mt-2">{service.description}</p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                        <motion.div
                        key={idx}
                          className="flex items-start gap-3 p-4 bg-white rounded-lg border border-primary/5 hover:border-primary/20 transition-colors"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                          whileHover={{ y: -2 }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed text-dark/80">{feature}</span>
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
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-6 h-6 text-primary flex items-center justify-center">{service.icon}</div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-dark/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Target Audience Section - Who Should Focus on X Growth */}
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

          <div className="space-y-16">
            {targetAudience.map((audience, index) => (
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
                className="p-6 bg-white rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-6 h-6 text-primary flex items-center justify-center">{audience.icon}</div>
                </motion.div>
                    <h3 className="text-xl font-bold mb-2 text-dark">{audience.title}</h3>
                    <p className="text-dark/70 mb-4">{audience.description}</p>
                    <ul className="space-y-2">
                      {index === 0 && (
                        <>
                          <li className="flex items-center gap-2 text-dark/70">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Real-time brand presence</span>
                          </li>
                          <li className="flex items-center gap-2 text-dark/70">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Customer engagement</span>
                          </li>
                          <li className="flex items-center gap-2 text-dark/70">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Market trend awareness</span>
                          </li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li className="flex items-center gap-2 text-dark/70">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Product updates & launches</span>
                          </li>
                          <li className="flex items-center gap-2 text-dark/70">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>User feedback & support</span>
                          </li>
                          <li className="flex items-center gap-2 text-dark/70">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Community building</span>
                          </li>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <li className="flex items-center gap-2 text-dark/70">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Thought leadership</span>
                          </li>
                          <li className="flex items-center gap-2 text-dark/70">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Networking opportunities</span>
                          </li>
                          <li className="flex items-center gap-2 text-dark/70">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Business growth</span>
                          </li>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <li className="flex items-center gap-2 text-dark/70">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Content distribution</span>
                          </li>
                          <li className="flex items-center gap-2 text-dark/70">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Audience engagement</span>
                          </li>
                          <li className="flex items-center gap-2 text-dark/70">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span>Breaking news coverage</span>
                          </li>
                        </>
                      )}
                    </ul>
              </motion.div>
                </div>
                <div className="w-full md:w-1/2 h-64 flex items-center justify-center">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {index === 0 && (
                      <>
                        {/* Brand Logo Design */}
                        <motion.path 
                          d="M50 50L100 30L150 50L150 150L100 170L50 150L50 50Z" 
                          stroke="var(--primary)" 
                          strokeWidth="3" 
                          fill="none"
                          animate={{ 
                            pathLength: [0, 1],
                            opacity: [0, 1]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut" 
                          }}
                        />
                        <motion.path 
                          d="M70 70L100 55L130 70L130 130L100 145L70 130L70 70Z" 
                          fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        />
                        <motion.path 
                          d="M85 100L100 90L115 100L100 110L85 100Z" 
                          fill="white"
                          animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        />
                      </>
                    )}
                    {index === 1 && (
                      <>
                        {/* SaaS Growth Graph */}
                        <motion.path 
                          d="M50 150L70 120L90 140L110 100L130 130L150 80" 
                          stroke="var(--primary)" 
                          strokeWidth="3" 
                          fill="none"
                          strokeLinecap="round"
                          animate={{ 
                            pathLength: [0, 1],
                            opacity: [0, 1]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut" 
                          }}
                        />
                        <motion.circle 
                          cx="70" 
                          cy="120" 
                          r="5" 
                          fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        />
                        <motion.circle 
                          cx="90" 
                          cy="140" 
                          r="5" 
                          fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.2
                          }}
                        />
                        <motion.circle 
                          cx="110" 
                          cy="100" 
                          r="5" 
                          fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.4
                          }}
                        />
                        <motion.circle 
                          cx="130" 
                          cy="130" 
                          r="5" 
                          fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.6
                          }}
                        />
                        <motion.circle 
                          cx="150" 
                          cy="80" 
                          r="5" 
                          fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.8
                          }}
                        />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        {/* Entrepreneur Network */}
                        <motion.circle 
                          cx="100" 
                          cy="100" 
                          r="40" 
                          stroke="var(--primary)" 
                          strokeWidth="3" 
                          fill="none"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        />
                        <motion.circle 
                          cx="100" 
                          cy="100" 
                          r="20" 
                          fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        />
                        {[0, 1, 2, 3, 4].map((i) => (
                          <motion.circle 
                            key={i}
                            cx={100 + 40 * Math.cos(i * (2 * Math.PI / 5))}
                            cy={100 + 40 * Math.sin(i * (2 * Math.PI / 5))}
                            r="10"
                            fill="var(--primary)"
                            animate={{ 
                              scale: [1, 1.3, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.2
                            }}
                          />
                        ))}
                      </>
                    )}
                    {index === 3 && (
                      <>
                        {/* Media Distribution */}
                        <motion.rect 
                          x="50" 
                          y="50" 
                          width="100" 
                          height="100" 
                          stroke="var(--primary)" 
                          strokeWidth="3" 
                          fill="none"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        />
                        <motion.path 
                          d="M50 50L150 50M50 100L150 100M50 150L150 150" 
                          stroke="var(--primary)" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                          animate={{ 
                            pathLength: [0, 1],
                            opacity: [0, 1]
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: 0.3
                          }}
                        />
                        <motion.path 
                          d="M50 50L50 150M100 50L100 150M150 50L150 150" 
                          stroke="var(--primary)" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                          animate={{ 
                            pathLength: [0, 1],
                            opacity: [0, 1]
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: 0.6
                          }}
                        />
                        <motion.circle 
                          cx="100" 
                          cy="100" 
                          r="15" 
                          fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        />
                      </>
                    )}
                  </svg>
                </div>
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

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 blur-3xl" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
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
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-6 h-6 text-primary flex items-center justify-center">{result.icon}</div>
                </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-dark">{result.title}</h3>
                  <p className="text-dark/70 mb-4">{result.description}</p>
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
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {index === 0 && (
                      <>
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">50%</div>
                          <div className="text-sm text-dark/70">Faster Growth</div>
                        </div>
                        <div className="p-4 bg-secondary/5 rounded-lg">
                          <div className="text-2xl font-bold text-secondary mb-1">2x</div>
                          <div className="text-sm text-dark/70">More Engagement</div>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">75%</div>
                          <div className="text-sm text-dark/70">Higher Retention</div>
                        </div>
                        <div className="p-4 bg-secondary/5 rounded-lg">
                          <div className="text-2xl font-bold text-secondary mb-1">3x</div>
                          <div className="text-sm text-dark/70">More Interactions</div>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">60%</div>
                          <div className="text-sm text-dark/70">More Leads</div>
                        </div>
                        <div className="p-4 bg-secondary/5 rounded-lg">
                          <div className="text-2xl font-bold text-secondary mb-1">4x</div>
                          <div className="text-sm text-dark/70">More Conversions</div>
                        </div>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">80%</div>
                          <div className="text-sm text-dark/70">Brand Recognition</div>
                        </div>
                        <div className="p-4 bg-secondary/5 rounded-lg">
                          <div className="text-2xl font-bold text-secondary mb-1">5x</div>
                          <div className="text-sm text-dark/70">More Authority</div>
                        </div>
                      </>
                    )}
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
              Join Our Community 
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
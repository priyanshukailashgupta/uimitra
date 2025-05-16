import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Instagram, Camera, Heart, Users, Target, MessageSquare,
  BarChart, ArrowRight, CheckCircle, Share2, Eye, Star,
  Globe, Zap, Brain, Rocket, FileImage, Film, Lightbulb,
  Megaphone, Palette, Layout, Code, Smartphone, PenTool,
  BookOpen, TrendingUp, Award, Gift, Code2
} from 'lucide-react';
import AnimatedText from '../../AnimatedText';

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
      whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
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
  return (
    <motion.div
      className="relative p-6 bg-white rounded-xl shadow-lg border border-primary/10 overflow-hidden"
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
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  features,
  icon,
  index 
}) => {
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
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-dark/70 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-dark/70">
            <CheckCircle className="w-4 h-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
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
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "2.35B+",
      description: "Monthly Active Users"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "79%",
      description: "Search Products on IG"
    },
    {
      icon: <Film className="w-6 h-6 text-primary" />,
      title: "22%",
      description: "Higher Reel Engagement"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "70%",
      description: "Shop via Instagram"
    }
  ];

  const growthServices = [
    {
      title: "Profile & Brand Optimization",
      description: "Professional profile setup and branding",
      icon: <PenTool className="w-6 h-6" />,
      items: [
        "Professional bio crafting with SEO",
        "Profile image and Highlights branding",
        "Story Highlights strategy",
        "Link-in-bio optimization",
        "Grid planning for aesthetics"
      ]
    },
    {
      title: "Content Creation & Strategy",
      description: "Engaging content that converts",
      icon: <Camera className="w-6 h-6" />,
      items: [
        "Monthly editorial calendars",
        "Viral Reels production",
        "Carousel post designs",
        "UGC campaigns",
        "Trend adaptation"
      ]
    },
    {
      title: "Audience Growth",
      description: "Building genuine community",
      icon: <Users className="w-6 h-6" />,
      items: [
        "Organic engagement strategies",
        "Targeted hashtag research",
        "Strategic collaborations",
        "Contest management",
        "Story engagement campaigns"
      ]
    },
    {
      title: "Paid Promotion",
      description: "Strategic ad campaigns",
      icon: <Target className="w-6 h-6" />,
      items: [
        "Instagram Ads setup",
        "Retargeting campaigns",
        "Conversion-driven creatives",
        "Story & Carousel Ads",
        "Performance optimization"
      ]
    },
    {
      title: "Advanced Analytics",
      description: "Data-driven insights",
      icon: <BarChart className="w-6 h-6" />,
      items: [
        "Content performance analytics",
        "Audience behavior insights",
        "Hashtag tracking",
        "Monthly growth reports",
        "Strategic recommendations"
      ]
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
              onClick={() => window.open('https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/', '_blank')}
            >
              <span className="relative z-10">Book a Free Instagram Strategy Call</span>
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

      {/* Why Follow Uimitra Section */}
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
              Why Follow <AnimatedText text="Uimitra" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
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
                  {benefit.icon}
                </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-dark/70 text-lg">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Instagram Growth is Critical Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthStats.map((stat, index) => (
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
                  
                  {index === 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">Largest social media platform for brand discovery</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">90% of users follow at least one business</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">44% use Instagram for weekly shopping</span>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">Direct product discovery through Instagram Search</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">83% discover new products on Instagram</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">50% increased interest after seeing ads</span>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">2x higher engagement than other platforms</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">500M+ daily active Stories users</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">58% more interest in brands after Stories</span>
                      </div>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">130M+ shopping taps monthly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">44% use Instagram Shop weekly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-dark/70">78% find brands more transparent</span>
                      </div>
                    </div>
                  )}
                </div>
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

          <div className="grid grid-cols-1 gap-8">
            {growthServices.map((service, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
                >
                <div className="flex items-start gap-6 mb-6">
                <motion.div 
                    className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                    {service.icon}
                </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-dark/70">{service.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-dark/70">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
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
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
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

      {/* Who Should Focus on Instagram Growth Section */}
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

          <div className="relative">
            {/* Decorative background elements */}
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
              {targetAudience.map((audience, index) => (
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
                        <div className="w-8 h-8 text-primary flex items-center justify-center">{audience.icon}</div>
                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
                </motion.div>
                      
                      <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
                      <p className="text-dark/70 text-sm mb-6">{audience.description}</p>
                      
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
                        {index === 0 && (
                          <>
                            <div className="p-3 bg-primary/5 rounded-lg">
                              <div className="text-base font-bold text-primary mb-1">E-commerce</div>
                              <div className="text-xs text-dark/70">Product showcase and sales through Instagram shopping features</div>
                            </div>
                            <div className="p-3 bg-secondary/5 rounded-lg">
                              <div className="text-base font-bold text-secondary mb-1">Brands</div>
                              <div className="text-xs text-dark/70">Visual identity and brand awareness through Instagram stories and reels</div>
                            </div>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <div className="p-3 bg-primary/5 rounded-lg">
                              <div className="text-base font-bold text-primary mb-1">Creators</div>
                              <div className="text-xs text-dark/70">Content growth and monetization through Instagram partnerships and collaborations</div>
                            </div>
                            <div className="p-3 bg-secondary/5 rounded-lg">
                              <div className="text-base font-bold text-secondary mb-1">Artists</div>
                              <div className="text-xs text-dark/70">Portfolio showcase and art sales through Instagram galleries and collaborations</div>
                            </div>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <div className="p-3 bg-primary/5 rounded-lg">
                              <div className="text-base font-bold text-primary mb-1">Agencies</div>
                              <div className="text-xs text-dark/70">Client growth and service showcase through Instagram case studies</div>
                            </div>
                            <div className="p-3 bg-secondary/5 rounded-lg">
                              <div className="text-base font-bold text-secondary mb-1">Startups</div>
                              <div className="text-xs text-dark/70">Brand awareness and product launch through Instagram campaigns</div>
                            </div>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <div className="p-3 bg-primary/5 rounded-lg">
                              <div className="text-base font-bold text-primary mb-1">Influencers</div>
                              <div className="text-xs text-dark/70">Audience growth and engagement through Instagram content strategy</div>
                            </div>
                            <div className="p-3 bg-secondary/5 rounded-lg">
                              <div className="text-base font-bold text-secondary mb-1">Experts</div>
                              <div className="text-xs text-dark/70">Authority building and thought leadership through Instagram insights</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results with Uimitra Section */}
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
                        <h3 className="text-2xl font-bold mb-2 text-primary">{result.title}</h3>
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

      {/* Technical Services Section */}
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
              Technical <AnimatedText text="Services" type="highlight" /> for Instagram
            </motion.h2>
          </motion.div>

          <div className="space-y-16">
            {technicalServices.map((service, index) => (
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
                      {service.icon}
                </motion.div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-dark/70 text-lg mb-6">{service.description}</p>
                    
                    <div className="space-y-4">
                      {index === 0 && (
                        <>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Custom API integration for automation</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Seamless CRM connectivity</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Analytics dashboard setup</span>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Smart post scheduling</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Content queue management</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Auto-response setup</span>
                          </div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Automated story highlights</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Content series automation</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Engagement tracking</span>
                          </div>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Brand mention monitoring</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Competitor analysis</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Sentiment tracking</span>
                          </div>
                        </>
                      )}
                      {index === 4 && (
                        <>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Conversion tracking setup</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Custom audience creation</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">ROI measurement</span>
                          </div>
                        </>
                      )}
                      {index === 5 && (
                        <>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Hashtag performance tracking</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Content trend analysis</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-dark/70">Viral content prediction</span>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  {index === 0 && (
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Meta Business Suite SVG */}
                      <motion.rect
                        x="40"
                        y="40"
                        width="120"
                        height="120"
                        rx="20"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        fill="none"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.path
                        d="M70 80h60M70 100h40M70 120h50"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0.5, 1]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      />
                      <motion.circle
                        cx="150"
                        cy="50"
                        r="8"
                        fill="var(--primary)"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* API Integration SVG */}
                      <motion.path
                        d="M40 100h30l20-20 20 40 20-40 20 20h30"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0.5, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      />
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="40"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        strokeDasharray="6 6"
                        fill="none"
                        animate={{ 
                          rotate: 360
                        }}
                        transition={{ 
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <motion.path
                        d="M85 100l10 10 20-20"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Smart Automation SVG */}
                      <motion.path
                        d="M60 100c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0.5, 1],
                          rotate: [0, 360]
                        }}
                        style={{
                          originX: "100px",
                          originY: "100px"
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <motion.path
                        d="M100 70v30l20 20"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0.3, 1]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      />
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="5"
                        fill="var(--primary)"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="50"
                        stroke="var(--primary)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        fill="none"
                        animate={{
                          rotate: [0, -360]
                        }}
                        style={{
                          originX: "100px",
                          originY: "100px"
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Pixel Setup SVG */}
                      <motion.rect
                        x="80"
                        y="80"
                        width="40"
                        height="40"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        fill="none"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 90, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.path
                        d="M60 60L80 80M120 80L140 60M120 120L140 140M60 140L80 120"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0.5, 1]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      />
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="8"
                        fill="var(--primary)"
                        animate={{ 
                          scale: [1, 0, 1],
                          opacity: [1, 0, 1]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* SEO Optimization SVG */}
                      <motion.path
                        d="M80 120L120 80"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0.5, 1]
                        }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      />
                      <motion.circle
                        cx="80"
                        cy="80"
                        r="30"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        fill="none"
                        animate={{ 
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.path
                        d="M110 110l30 30"
                        stroke="var(--primary)"
                        strokeWidth="6"
                        strokeLinecap="round"
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
                    </svg>
                  )}
                  {index === 5 && (
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Trend Dashboard SVG */}
                      <motion.path
                        d="M40 160h120M40 40v120"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        animate={{ 
                          pathLength: [0, 1]
                        }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      />
                      <motion.path
                        d="M60 140l20-40 30 20 40-80"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0.5, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      />
                      <motion.circle
                        cx="80"
                        cy="100"
                        r="4"
                        fill="var(--primary)"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0
                        }}
                      />
                      <motion.circle
                        cx="110"
                        cy="120"
                        r="4"
                        fill="var(--primary)"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.3
                        }}
                      />
                      <motion.circle
                        cx="150"
                        cy="60"
                        r="4"
                        fill="var(--primary)"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.6
                        }}
                      />
                    </svg>
                  )}
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
              Join Our Creative Community
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Follow us for daily inspiration, insights, and interaction.<br/>
              Be part of something extraordinary.
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/', '_blank')}
            >
              Schedule Your Instagram Growth Consultation
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
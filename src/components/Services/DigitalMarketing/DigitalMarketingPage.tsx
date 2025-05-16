import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Search, BarChart, MessageSquare, Mail, 
  TrendingUp, Target, Users, Globe, Zap,
  ArrowRight, CheckCircle, Rocket, Megaphone,
  LineChart, PieChart, Share2, Instagram,
  Youtube, Linkedin, Twitter, Facebook,
  Brain, Lightbulb, ChevronDown, Image,
  Video, Camera,
  Search as SearchIcon, BarChart as BarChartIcon, 
  MessageSquare as MessageSquareIcon, Mail as MailIcon, 
  TrendingUp as TrendingUpIcon, Target as TargetIcon, 
  Users as UsersIcon, Globe as GlobeIcon, 
  Zap as ZapIcon, ArrowRight as ArrowRightIcon, 
  CheckCircle as CheckCircleIcon, Rocket as RocketIcon, 
  Megaphone as MegaphoneIcon, LineChart as LineChartIcon, 
  PieChart as PieChartIcon, Share2 as Share2Icon, 
  Instagram as InstagramIcon, Youtube as YoutubeIcon, 
  Linkedin as LinkedinIcon, Twitter as TwitterIcon, 
  Facebook as FacebookIcon, Brain as BrainIcon, 
  Lightbulb as LightbulbIcon, ChevronDown as ChevronDownIcon
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
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="relative p-8 text-white">
        <motion.div 
          className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/80 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-white/80" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const DigitalMarketingPage: React.FC = () => {
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
      icon: <UsersIcon className="w-6 h-6" />,
      title: "Brand Growth",
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
      title: "Search Engine Optimization",
      description: "Dominate search results and drive organic traffic",
      icon: <SearchIcon className="w-6 h-6" />,
      features: [
        "Technical SEO Audits",
        "Content Strategy",
        "Link Building",
        "Local SEO",
        "Performance Tracking"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Social Media Marketing",
      description: "Build engaging communities across platforms",
      icon: <Share2Icon className="w-6 h-6" />,
      features: [
        "Content Creation",
        "Community Management",
        "Paid Advertising",
        "Influencer Partnerships",
        "Analytics & Reporting"
      ],
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Email Marketing",
      description: "Convert subscribers into loyal customers",
      icon: <MailIcon className="w-6 h-6" />,
      features: [
        "Campaign Strategy",
        "Automation Flows",
        "A/B Testing",
        "List Management",
        "Performance Analytics"
      ],
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      title: "Content Marketing",
      description: "Tell your brand story and establish authority",
      icon: <MessageSquareIcon className="w-6 h-6" />,
      features: [
        "Blog Strategy",
        "Content Creation",
        "Distribution",
        "SEO Optimization",
        "Performance Tracking"
      ],
      gradient: "from-[#0093E9]/90 to-[#80D0C7]/95"
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Drive targeted traffic and conversions by running ads.",
      icon: <TargetIcon className="w-6 h-6" />,
      features: [
        "Google Ads",
        "Social Media Ads",
        "Display Advertising",
        "Remarketing",
        "Conversion Optimization"
      ],
      gradient: "from-[#FF6B6B]/90 to-[#FF8E8E]/95"
    },
    {
      title: "Analytics & Reporting",
      description: "Make data-driven marketing decisions by analyzing your campaigns.",
      icon: <BarChartIcon className="w-6 h-6" />,
      features: [
        "Performance Tracking",
        "ROI Analysis",
        "Custom Dashboards",
        "A/B Testing",
        "Strategic Insights"
      ],
      gradient: "from-[#6B66FF]/90 to-[#4F46E5]/95"
    }
  ];

  const platforms = [
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      description: "Strategic marketing campaigns for maximum reach and engagement.",
      features: [
        "Ad Campaigns",
        "Audience Targeting",
        "Content Strategy"
      ],
      gradient: "from-[#1877F2]/90 to-[#0D5AB9]/95"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      description: "Visual content strategies for brand awareness and engagement.",
      features: [
        "Story Marketing",
        "Influencer Collabs",
        "Visual Content"
      ],
      gradient: "from-[#E4405F]/90 to-[#C13584]/95"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      description: "Real-time engagement and community building strategies for better results.",
      features: [
        "Trend Analysis",
        "Community Manage",
        "Hashtag Strategy"
      ],
      gradient: "from-[#1DA1F2]/90 to-[#0D8BD9]/95"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      description: "Professional networking and B2B lead generation solutions.",
      features: [
        "Company Pages",
        "Content Marketing",
        "Lead Generation"
      ],
      gradient: "from-[#0A66C2]/90 to-[#004182]/95"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      name: "YouTube",
      description: "Video content creation and channel growth strategies for better results.",
      features: [
        "Video Production",
        "Channel Growth",
        "SEO Strategy"
      ],
      gradient: "from-[#FF0000]/90 to-[#CC0000]/95"
    }
  ];

  const process = [
    {
      icon: <BrainIcon className="w-6 h-6" />,
      title: "Research & Strategy",
      description: "Understanding your goals, audience, and competition"
    },
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Campaign Planning",
      description: "Crafting targeted campaigns across channels"
    },
    {
      icon: <RocketIcon className="w-6 h-6" />,
      title: "Implementation",
      description: "Launching and monitoring campaigns"
    },
    {
      icon: <BarChartIcon className="w-6 h-6" />,
      title: "Optimization",
      description: "Continuous improvement based on data"
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
              Digital Marketing
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Transform Your Online{' '}
              <AnimatedText text="Presence" type="gradient" />{' '}and{' '}
              <AnimatedText text="Growth" type="gradient" delay={0.2} />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help businesses thrive in the digital landscape through strategic marketing
              solutions that drive growth, engagement, and measurable results.
            </motion.p>

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Marketing</span>
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
              Why Digital Marketing <AnimatedText text="Matters" type="highlight" />
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
              Our Digital Marketing <AnimatedText text="Services" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative p-8 bg-white rounded-xl shadow-sm border border-primary/10 hover:border-primary/30 transition-colors"
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
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-dark">{service.title}</h3>
                <p className="text-dark/70 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-dark/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
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

          <div className="grid grid-cols-5 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-white rounded-xl shadow-sm border border-primary/10 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {platform.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-dark">{platform.name}</h3>
                <p className="text-dark/70 leading-relaxed mb-4">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-dark/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
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
              Our Marketing <AnimatedText text="Process" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Ready to Grow Your Digital Presence ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's create a digital marketing strategy that drives results.<br/>
              Your success story starts here.
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

export default DigitalMarketingPage;
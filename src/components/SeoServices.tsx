import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Search, BarChart, MessageSquare, Mail, 
  TrendingUp, Target, Users, Globe, Zap,
  ArrowRight, CheckCircle, Rocket, Megaphone,
  LineChart, PieChart, Share2, Instagram,
  Youtube, Linkedin, Twitter, Facebook,
  Brain, Lightbulb, ChevronDown,
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
import AnimatedText from './AnimatedText';

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

const SeoServices: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const benefits = [
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Targeted Traffic",
      description: "Drive qualified visitors who are ready to convert."
    },
    {
      icon: <LineChartIcon className="w-6 h-6" />,
      title: "Measurable Growth",
      description: "Track rankings and traffic with detailed analytics."
    },
    {
      icon: <UsersIcon className="w-6 h-6" />,
      title: "Brand Authority",
      description: "Build trust and credibility in your industry."
    },
    {
      icon: <ZapIcon className="w-6 h-6" />,
      title: "Long-term Results",
      description: "Sustainable growth that compounds over time."
    }
  ];

  const services = [
    {
      title: "Technical SEO",
      description: "Optimize your website's technical foundation",
      icon: <SearchIcon className="w-6 h-6" />,
      features: [
        "Site Speed Optimization",
        "Mobile Responsiveness",
        "Schema Markup",
        "XML Sitemaps",
        "Core Web Vitals"
      ],
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Content Strategy",
      description: "Create content that ranks and converts",
      icon: <MessageSquareIcon className="w-6 h-6" />,
      features: [
        "Keyword Research",
        "Content Planning",
        "On-page Optimization",
        "Internal Linking",
        "Content Audits"
      ],
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Local SEO",
      description: "Dominate your local market",
      icon: <GlobeIcon className="w-6 h-6" />,
      features: [
        "Google Business Profile",
        "Local Citations",
        "Review Management",
        "Local Content",
        "Location Pages"
      ],
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      title: "Link Building",
      description: "Build authority through quality backlinks",
      icon: <Share2Icon className="w-6 h-6" />,
      features: [
        "Guest Posting",
        "Broken Link Building",
        "Resource Pages",
        "PR Outreach",
        "Link Audits"
      ],
      gradient: "from-[#0093E9]/90 to-[#80D0C7]/95"
    }
  ];

  const process = [
    {
      icon: <BrainIcon className="w-6 h-6" />,
      title: "Audit & Analysis",
      description: "Understanding your current SEO performance"
    },
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Strategy Development",
      description: "Creating a customized SEO roadmap"
    },
    {
      icon: <RocketIcon className="w-6 h-6" />,
      title: "Implementation",
      description: "Executing technical and content optimizations"
    },
    {
      icon: <BarChartIcon className="w-6 h-6" />,
      title: "Monitoring",
      description: "Tracking progress and making adjustments"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden" ref={sectionRef}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-20">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, var(--gradient-1), transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4 px-6 py-2 rounded-full bg-primary/10 text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SEO Services
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Dominate Search with{' '}
              <AnimatedText text="SEO" type="gradient" />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-dark/70 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Drive organic traffic and grow your online presence with data-driven SEO strategies.
              We help businesses rank higher and attract more qualified visitors.
            </motion.p>

            <motion.button
              className="bg-primary text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(237, 24, 79, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
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
              Why SEO <AnimatedText text="Matters" type="highlight" />
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
              Our SEO <AnimatedText text="Services" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Process Section */}
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
              Our SEO <AnimatedText text="Process" type="highlight" />
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
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
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
              Ready to Rank <AnimatedText text="Higher" type="highlight" />?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's create an SEO strategy that drives results.<br/>
              Your success story starts here.
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
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

export default SeoServices; 
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Search, BarChart, Globe, Zap, Target, Users, 
  FileSearch, Code, Layout, MessageSquare, Link,
  ArrowRight, CheckCircle, Rocket, Megaphone,
  LineChart, PieChart, Share2, Smartphone,
  Brain, Lightbulb, ChevronDown, TrendingUp,
  MapPin, Star, Award, FileText, Layers
} from 'lucide-react';
import AnimatedText from '../../AnimatedText';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
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
            <li key={idx} className="flex items-center text-dark/70">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const SEOServicesPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const services = [
    {
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better search visibility",
      icon: <Code className="w-6 h-6" />,
      features: [
        "Website performance audits",
        "Core Web Vitals optimization",
        "Site architecture improvement",
        "Schema markup implementation",
        "Mobile optimization"
      ],
      gradient: "from-[#8B5CF6]/90 to-[#7C3AED]/95"
    },
    {
      title: "On-Page SEO",
      description: "Enhance your content and structure for maximum search impact",
      icon: <Layout className="w-6 h-6" />,
      features: [
        "Meta tag optimization",
        "Content optimization",
        "Internal linking strategy",
        "URL structure improvement",
        "Image optimization"
      ],
      gradient: "from-[#F472B6]/90 to-[#DB2777]/95"
    },
    {
      title: "Content Strategy",
      description: "Create engaging, SEO-friendly content that converts",
      icon: <FileText className="w-6 h-6" />,
      features: [
        "Keyword research",
        "Content planning",
        "Blog optimization",
        "Topic clustering",
        "Content audits"
      ],
      gradient: "from-[#34D399]/90 to-[#059669]/95"
    },
    {
      title: "Off-Page SEO",
      description: "Build authority and trust through strategic link building",
      icon: <Link className="w-6 h-6" />,
      features: [
        "Link building",
        "Digital PR",
        "Brand mentions",
        "Social signals",
        "Authority building"
      ],
      gradient: "from-[#60A5FA]/90 to-[#3B82F6]/95"
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers",
      icon: <MapPin className="w-6 h-6" />,
      features: [
        "Google Business Profile",
        "Local citations",
        "Review management",
        "Local content strategy",
        "Map optimization"
      ],
      gradient: "from-[#4158D0] to-[#C850C0]"
    },
    {
      title: "SEO Analytics",
      description: "Track, measure, and improve your SEO performance",
      icon: <BarChart className="w-6 h-6" />,
      features: [
        "Performance tracking",
        "ROI measurement",
        "Competitor analysis",
        "Custom reporting",
        "Growth forecasting"
      ],
      gradient: "from-[#0093E9] to-[#80D0C7]"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Traffic",
      description: "Attract visitors actively searching for your products or services."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sustainable Growth",
      description: "Build lasting organic visibility that compounds over time."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Brand Authority",
      description: "Establish your brand as a trusted industry leader."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Better ROI",
      description: "Get more value from your marketing investment."
    }
  ];

  const stats = [
    { value: "500+", label: "Websites Optimized" },
    { value: "10K+", label: "Keywords Ranked" },
    { value: "300%", label: "Average Traffic Growth" },
    { value: "95%", label: "Client Satisfaction" }
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
              SEO Services
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Boost Your Search{' '}
              <AnimatedText text="Visibility" type="gradient" />{' '}and{' '}
              <AnimatedText text="Rankings" type="gradient" delay={0.2} />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help businesses improve their search engine rankings and drive organic traffic
              through comprehensive SEO strategies and optimization techniques.
            </motion.p>

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your SEO</span>
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

      {/* Benefits Section */}
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
              Why Choose Uimitra for <AnimatedText text="SEO" type="highlight" />
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
              Our SEO <AnimatedText text="Services" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Ready to Grow Your Online Presence ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's create a sustainable SEO strategy that drives real results.<br/>
              Your success story starts here.
            </p>
            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
            >
              Get Your Free SEO Audit
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

export default SEOServicesPage;
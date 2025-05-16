import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Trophy, Star, TrendingUp, Users, BarChart, Target, Globe, Zap, ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedText from '../AnimatedText';

interface SuccessStory {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  testimonial: string;
  metrics: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
}

const SuccessStoriesPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const successStories: SuccessStory[] = [
    {
      title: "Revolutionary E-commerce Platform Transformation",
      description: "Transforming a traditional retail business into a modern digital powerhouse",
      challenge: "Our client, a well-established retail chain, was struggling to compete in the digital marketplace. Their existing website was outdated, difficult to navigate, and failed to provide the seamless shopping experience their customers expected.",
      solution: "We developed a comprehensive e-commerce solution featuring an intuitive user interface, advanced product filtering, personalized recommendations, and a streamlined checkout process. The platform was built with scalability in mind, incorporating the latest technologies and best practices in UI/UX design.",
      results: [
        "300% increase in online sales within first 6 months",
        "45% reduction in cart abandonment rate",
        "85% improvement in customer satisfaction scores",
        "60% increase in mobile conversions"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      clientName: "Sarah Anderson",
      clientRole: "Digital Transformation Director",
      clientCompany: "RetailPro Inc.",
      testimonial: "The Uimitra team didn't just deliver a website; they delivered a complete digital transformation that has revolutionized our business. Their attention to detail and user-centric approach has helped us achieve results we never thought possible.",
      metrics: [
        { label: "Revenue Growth", value: "300%", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "User Engagement", value: "85%", icon: <Users className="w-6 h-6" /> },
        { label: "Market Reach", value: "Global", icon: <Globe className="w-6 h-6" /> }
      ]
    },
    {
      title: "AI-Powered Healthcare Platform",
      description: "Creating an innovative healthcare solution that connects patients with doctors seamlessly",
      challenge: "A healthcare startup needed a sophisticated platform to facilitate remote consultations while ensuring a user-friendly experience for both patients and healthcare providers.",
      solution: "We designed and developed a comprehensive telemedicine platform with real-time video consultations, secure patient records, and an AI-powered symptom checker. The interface was carefully crafted to be accessible to users of all ages and technical abilities.",
      results: [
        "200,000+ patient consultations in first year",
        "98% patient satisfaction rate",
        "40% reduction in waiting times",
        "500+ healthcare providers onboarded"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      clientName: "Dr. Michael Chen",
      clientRole: "CEO",
      clientCompany: "HealthConnect",
      testimonial: "Uimitra's expertise in creating intuitive healthcare interfaces has been instrumental in our success. They understood the unique challenges of healthcare UX and delivered a solution that has transformed how we provide care.",
      metrics: [
        { label: "Patient Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> },
        { label: "Efficiency Gain", value: "40%", icon: <Zap className="w-6 h-6" /> },
        { label: "Growth Rate", value: "250%", icon: <BarChart className="w-6 h-6" /> }
      ]
    }
  ];

  const additionalMetrics = [
    {
      icon: <Trophy className="w-6 h-6" />,
      value: "500+",
      label: "Projects Delivered"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: "30+",
      label: "Countries Served"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "50+",
      label: "Industry Awards"
    }
  ];

  return (
    <div className="min-h-screen pt-0 pb-20 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced Hero Section with Parallax */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-20"
        style={{ opacity, y }}
      >
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
              Client Success Stories
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our Success <AnimatedText text="Stories" type="gradient" />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-dark/70 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover how we've helped businesses transform their digital presence and achieve extraordinary results.
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {additionalMetrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {metric.icon}
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-bold text-primary"
                    whileInView={{ 
                      opacity: [0, 1],
                      y: [20, 0] 
                    }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-dark/70">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Success Stories Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="space-y-32">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-primary/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Story Header with Hover Effect */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <motion.div
                    className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    Case Study {index + 1}
                  </motion.div>
                  <motion.h2 
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {story.title}
                  </motion.h2>
                  <p className="text-dark/70 mb-6">{story.description}</p>
                </div>
                <motion.div
                  className="relative rounded-xl overflow-hidden aspect-video group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
              </motion.div>

              {/* Expandable Content */}
              <motion.div
                className="cursor-pointer"
                onClick={() => setExpandedStory(expandedStory === index ? null : index)}
              >
                <motion.div
                  className="flex items-center justify-between p-4 bg-primary/5 rounded-lg mb-6"
                  whileHover={{ backgroundColor: "rgba(237, 24, 79, 0.1)" }}
                >
                  <span className="font-medium">View Details</span>
                  <motion.div
                    animate={{ rotate: expandedStory === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {expandedStory === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <motion.div
                        className="bg-white p-8 rounded-xl shadow-lg"
                        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
                      >
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <Target className="text-primary" />
                          The Challenge
                        </h3>
                        <p className="text-dark/70">{story.challenge}</p>
                      </motion.div>
                      <motion.div
                        className="bg-white p-8 rounded-xl shadow-lg"
                        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
                      >
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <Zap className="text-primary" />
                          Our Solution
                        </h3>
                        <p className="text-dark/70">{story.solution}</p>
                      </motion.div>
                    </div>

                    {/* Results */}
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Trophy className="text-primary" />
                        Key Results
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {story.results.map((result, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <p className="text-dark/80">{result}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      {story.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-white p-6 rounded-xl shadow-lg text-center"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(237, 24, 79, 0.1)" }}
                        >
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {metric.icon}
                          </motion.div>
                          <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                          <div className="text-dark/70">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <motion.div
                      className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-xl relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative z-10">
                        <p className="text-lg italic mb-6">"{story.testimonial}"</p>
                        <div>
                          <p className="font-bold">{story.clientName}</p>
                          <p className="text-white/80">{story.clientRole}</p>
                          <p className="text-white/80">{story.clientCompany}</p>
                        </div>
                      </div>
                      <motion.div 
                        className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-40 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/10 to-primary/5 blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Additional decorative elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            background: 'radial-gradient(circle at center, var(--gradient-1), transparent)',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default SuccessStoriesPage;
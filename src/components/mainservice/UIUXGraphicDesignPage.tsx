import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Layout, Globe, Smartphone, Brain, 
  Image, ArrowRight, Users, TrendingUp,
  Heart, Zap, Palette, Code2, Target,
  Sparkles, MonitorSmartphone, Layers,
  PenTool, Search, CheckCircle, RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import uiuxGif from '../../assets/uiux.gif';

const UIUXGraphicDesignPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1.2, 1.2, 1]);

  return (
    <div className="min-h-screen bg-white text-dark relative overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center overflow-hidden pt-4 sm:pt-8 md:pt-12"
        style={{
          minHeight: 'calc(100vh - 48px)', // default mobile
        }}
      >
        <style>{`
          @media (min-width: 768px) {
            section[style] { min-height: calc(100vh - 56px) !important; }
          }
          @media (min-width: 1024px) {
            section[style] { min-height: calc(100vh - 64px) !important; }
          }
        `}</style>
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #ED184F 0%, #D1002E 100%)',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-white/10 backdrop-blur-sm"
        />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-12 md:gap-12 w-full">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            >
            
              
              <motion.h1 
                className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Design That
                <br />
                <span className="text-white">Moves</span> People
              </motion.h1>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We create digital experiences that captivate, engage, and convert.
                Let's transform your vision into reality.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center lg:justify-start"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-white/90 transition-colors"
                >
                  Start Your Project
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Design Elements */}
            <motion.div
              className="relative w-full max-w-md lg:max-w-lg flex-1 flex items-center justify-center mt-8 sm:mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={uiuxGif}
                alt="UI/UX Design Illustration"
                className="w-full max-h-[400px] object-contain rounded-xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 md:py-32 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <svg className="w-full h-full" viewBox="0 0 1000 1000">
              <motion.path
                d="M100,100 L900,100 L900,900 L100,900 Z"
                fill="none"
                stroke="rgba(237, 24, 79, 0.05)"
                strokeWidth="2"
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.circle
                cx="500"
                cy="500"
                r="300"
                fill="none"
                stroke="rgba(237, 24, 79, 0.05)"
                strokeWidth="2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </svg>
          </motion.div>

          <div className="relative">
            {/* Top Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto mb-8">
              {[
                {
                  title: "UI/UX Design",
                  description: "Creating intuitive and beautiful interfaces that users love. Our UI/UX design services focus on user-centered design principles.",
                  icon: <Layout className="w-8 h-8" />,
                  color: "from-[#FF6B6B] to-[#FF8E8E]",
                  link: "/services/ui-ux-design",
                  features: ["User Research", "Wireframing", "Interaction Design", "Testing"]
                },
                {
                  title: "Web Design",
                  description: "Building responsive and engaging websites that convert. We create modern, fast-loading websites that drive business results.",
                  icon: <Globe className="w-8 h-8" />,
                  color: "from-[#4ECDC4] to-[#45B7AF]",
                  link: "/services/web-design",
                  features: ["Responsive Design", "Performance", "SEO", "Content Management"]
                },
                {
                  title: "App Design",
                  description: "Designing mobile experiences that users can't put down. We create intuitive, engaging mobile apps that solve real problems.",
                  icon: <Smartphone className="w-8 h-8" />,
                  color: "from-[#A78BFA] to-[#8B5CF6]",
                  link: "/services/app-design",
                  features: ["iOS & Android", "UX Strategy", "Prototyping", "User Testing"]
                },
                {
                  title: "AI Design",
                  description: "Leveraging AI to create personalized user experiences. We integrate AI technologies to enhance design processes.",
                  icon: <Brain className="w-8 h-8" />,
                  color: "from-[#FCD34D] to-[#F59E0B]",
                  link: "/services/ai-enhanced-design",
                  features: ["AI-Powered Tools", "Personalization", "Smart Interfaces", "Data-Driven"]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    <div className="space-y-1.5 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Horizontal Card */}
            <motion.div
              className="sm:col-span-2 md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                <div className="flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] flex items-center justify-center mb-4`}>
                    <Image className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dark">Graphics Design</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Creating visual assets that tell your brand's story. We design compelling graphics that communicate your message effectively.
                  </p>
                  <div className="space-y-2 mb-4 flex-grow">
                    {[
                      "Brand Identity",
                      "Marketing",
                      "Social Media",
                      "Print Design"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/services/graphic-design"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors mt-auto"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-16 md:py-32 bg-gray-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Design Process
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 mt-8 max-w-7xl mx-auto">
            {[
              { title: "Discover", description: "Knowing your needs", icon: <Search className="w-5 h-5 md:w-6 md:h-6" /> },
              { title: "Design", description: "Creating the vision", icon: <PenTool className="w-5 h-5 md:w-6 md:h-6" /> },
              { title: "Develop", description: "Bringing it to life", icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" /> },
              { title: "Deliver", description: "Perfecting the details", icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" /> },
              { title: "Maintain", description: "Maintaining the vision", icon: <RefreshCw className="w-5 h-5 md:w-6 md:h-6" /> }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                
              >
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center mb-3 md:mb-4 shadow-lg">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <div className="relative z-10 bg-white p-4 md:p-6 rounded-xl shadow-lg w-full">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-dark">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                </div>
                {index < 4 && (
                  <div className="absolute top-6 md:top-8 left-[calc(100%+0.5rem)] md:left-[calc(100%+1rem)] w-4 md:w-8 h-1 bg-primary/20 hidden md:block">
                    <motion.div
                      className="w-full h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center p-6 md:p-12 rounded-2xl shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, var(--gradient-1) 0%, var(--gradient-2) 50%, var(--gradient-3) 100%)',
              backgroundSize: '200% 200%'
            }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 bg-white/10 backdrop-blur-sm"
            />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 relative z-10 text-white">
              Ready to Create Something Amazing ?
            </h2>
            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 relative z-10">
              Let's design something meaningful together.<br className="hidden md:block"/>
              Your vision, our expertise.
            </p>
            <motion.button
              className="bg-white text-primary px-6 py-3 md:px-8 md:py-4 rounded-full font-medium inline-flex items-center gap-2 relative z-10 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Background Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
};

export default UIUXGraphicDesignPage; 
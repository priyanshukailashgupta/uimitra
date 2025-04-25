import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Target, PenTool, Book, Palette, 
  ArrowRight, Layers, Sparkles, TrendingUp,
  CheckCircle, RefreshCw, Search, FileText,
  Layout, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandDesignBuildPage: React.FC = () => {
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #ED184F 0%, #D1002E 100%)',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-white/10 backdrop-blur-sm"
        />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-12 md:gap-12">
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
                Brand Design
                <br />
                <span className="text-white">&</span> Build Services
              </motion.h1>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Crafting Brands That Inspire, Influence, and Endure. We transform ideas into iconic brands that tell powerful stories and connect with audiences.
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
                  Start Your Brand Journey
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Brand Design Elements */}
            <motion.div
              className="relative w-full max-w-md lg:max-w-lg h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] mt-8 sm:mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Brand Design Elements */}
                <motion.g>
                  {/* Logo Design Process */}
                  <motion.circle
                    cx="400"
                    cy="400"
                    r="180"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.6, 0.8, 0.6]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Brand Guidelines Elements */}
                  <motion.rect
                    x="250"
                    y="250"
                    width="300"
                    height="300"
                    rx="20"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    animate={{
                      rotate: [0, 360],
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Typography Elements */}
                  {[0, 1, 2].map((i) => (
                    <motion.g key={i}>
                      {/* Text Lines */}
                      <motion.line
                        x1="300"
                        y1={320 + i * 40}
                        x2="500"
                        y2={320 + i * 40}
                        stroke="white"
                        strokeWidth={3 - i * 0.5}
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          pathLength: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.g>
                  ))}

                  {/* Color Palette */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.circle
                      key={i}
                      cx={300 + i * 50}
                      cy="500"
                      r="15"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}

                  {/* Brand Identity Elements */}
                  {[45, 135, 225, 315].map((angle, i) => (
                    <motion.g key={i}>
                      <motion.line
                        x1="400"
                        y1="400"
                        x2={400 + Math.cos(angle * Math.PI / 180) * 150}
                        y2={400 + Math.sin(angle * Math.PI / 180) * 150}
                        stroke="white"
                        strokeWidth="2"
                        animate={{
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.circle
                        cx={400 + Math.cos(angle * Math.PI / 180) * 150}
                        cy={400 + Math.sin(angle * Math.PI / 180) * 150}
                        r="10"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.g>
                  ))}

                  {/* Connecting Lines */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.path
                      key={i}
                      d={`M 400,400 Q ${300 + i * 100},${350 + i * 20} ${350 + i * 50},${450 + i * 10}`}
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        pathLength: [0, 1, 0]
                      }}
                      transition={{
                        duration: 4,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}

                  {/* Central Brand Icon */}
                  <motion.g>
                    <motion.circle
                      cx="400"
                      cy="400"
                      r="30"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.path
                      d="M 385,400 L 415,400 M 400,385 L 400,415"
                      stroke="white"
                      strokeWidth="3"
                      animate={{
                        opacity: [0.6, 1, 0.6],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.g>
                </motion.g>
              </svg>
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
                  title: "Brand Strategy",
                  description: "Strategic brand foundation and positioning that resonates with your audience. We define your brand's mission, values, and market positioning.",
                  icon: <Target className="w-8 h-8 text-white" />,
                  color: "from-[#FF6B6B] to-[#FF8E8E]",
                  link: "/services/brand-strategy",
                  features: ["Market Research", "Brand Positioning", "Value Proposition", "Brand Voice"]
                },
                {
                  title: "Logo Design",
                  description: "Creating memorable and versatile logos that capture your brand's essence. We design distinctive visual identities that leave lasting impressions.",
                  icon: <PenTool className="w-8 h-8 text-white" />,
                  color: "from-[#4ECDC4] to-[#45B7AF]",
                  link: "/services/logo-design",
                  features: ["Logo Design", "Icon Design", "Typography", "Color Theory"]
                },
                {
                  title: "Brand Guidelines",
                  description: "Comprehensive brand guidelines ensuring consistency across all touchpoints. We document your brand's visual and verbal identity standards.",
                  icon: <Book className="w-8 h-8 text-white" />,
                  color: "from-[#A78BFA] to-[#8B5CF6]",
                  link: "/services/brand-guidelines",
                  features: ["Style Guide", "Usage Rules", "Asset Library", "Brand Voice"]
                },
                {
                  title: "Brand Identity",
                  description: "Full visual identity systems that make your brand instantly recognizable. We create cohesive design elements that tell your brand's story.",
                  icon: <Palette className="w-8 h-8 text-white" />,
                  color: "from-[#FCD34D] to-[#F59E0B]",
                  link: "/services/brand-identity",
                  features: ["Visual System", "Color Palette", "Typography", "Imagery Style"]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
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
                </motion.div>
              ))}
            </div>

            {/* Bottom Horizontal Card */}
            <motion.div
              className="sm:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                <div className="flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] flex items-center justify-center mb-4`}>
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dark">Brand Development</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Continuous brand evolution and growth strategies. We help your brand stay relevant and lead markets through strategic development and multi-platform engagement.
                  </p>
                  <div className="space-y-2 mb-4 flex-grow">
                    {[
                      "Brand Growth Strategy",
                      "Market Expansion",
                      "Brand Evolution",
                      "Performance Tracking"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/services/brand-development"
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

      {/* Why Choose Us Section */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why UI Mitra for Brand Design & Build?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Research-Driven",
                description: "Brand Foundations built on solid research and insights",
                icon: <Search className="w-6 h-6" />,
              },
              {
                title: "Creative Design",
                description: "Strategic alignment with creative excellence",
                icon: <Palette className="w-6 h-6" />,
              },
              {
                title: "Future-Proof",
                description: "Brand systems built to evolve and grow",
                icon: <Layers className="w-6 h-6" />,
              },
              {
                title: "Personalized",
                description: "Partnership throughout the journey",
                icon: <Sparkles className="w-6 h-6" />,
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {React.cloneElement(feature.icon, { className: "w-6 h-6 text-primary" })}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
                Ready to Build a Brand That Moves the World?
              </h2>
              <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
                Let's create something extraordinary together.
              </p>
              <Link
                to="/contact"
                className="bg-white text-primary px-6 py-3 md:px-8 md:py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                Start Your Brand Journey
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
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

export default BrandDesignBuildPage; 
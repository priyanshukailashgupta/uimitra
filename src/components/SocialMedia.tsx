import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Youtube, Linkedin, Twitter, Instagram, 
  Globe, ArrowRight, Users, TrendingUp,
  BarChart2, MessageSquare, Share2, Target,
  PieChart, Zap, Brain, BarChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialMedia: React.FC = () => {
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
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
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
                Social Media Services
                <br />
                <span className="text-white">Expanding Your Brand</span> Across Every Platform
              </motion.h1>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                At UI Mitra, we don't just manage social media — we craft growth ecosystems.
                Our strategic approach helps brands connect, engage, and expand across the most powerful social platforms, 
                building real communities and real results.
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
                  Build Your Social Empire
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Social Media Elements */}
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
                {/* Social Media Hub */}
                <motion.g>
                  {/* Central Hub */}
                  <motion.circle
                    cx="400"
                    cy="400"
                    r="60"
                    fill="rgba(255, 255, 255, 0.1)"
                    stroke="white"
                    strokeWidth="2"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Platform Nodes */}
                  {[
                    { angle: 0, label: "YouTube", icon: "▶️" },
                    { angle: 72, label: "LinkedIn", icon: "🔗" },
                    { angle: 144, label: "Twitter", icon: "✖️" },
                    { angle: 216, label: "Instagram", icon: "📸" },
                    { angle: 288, label: "Others", icon: "🌍" }
                  ].map((platform, i) => (
                    <motion.g key={i}>
                      {/* Platform Node */}
                      <motion.circle
                        cx={400 + Math.cos(platform.angle * Math.PI / 180) * 150}
                        cy={400 + Math.sin(platform.angle * Math.PI / 180) * 150}
                        r="40"
                        fill="rgba(255, 255, 255, 0.1)"
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
                      
                      {/* Platform Label */}
                      <motion.text
                        x={400 + Math.cos(platform.angle * Math.PI / 180) * 150}
                        y={400 + Math.sin(platform.angle * Math.PI / 180) * 150 - 10}
                        fill="white"
                        fontSize="14"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        animate={{
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {platform.label}
                      </motion.text>

                      {/* Platform Icon */}
                      <motion.text
                        x={400 + Math.cos(platform.angle * Math.PI / 180) * 150}
                        y={400 + Math.sin(platform.angle * Math.PI / 180) * 150 + 10}
                        fill="white"
                        fontSize="20"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {platform.icon}
                      </motion.text>

                      {/* Connection Line */}
                      <motion.path
                        d={`M 400,400 
                           Q ${400 + Math.cos(platform.angle * Math.PI / 180) * 75},
                             ${400 + Math.sin(platform.angle * Math.PI / 180) * 75}
                             ${400 + Math.cos(platform.angle * Math.PI / 180) * 150},
                             ${400 + Math.sin(platform.angle * Math.PI / 180) * 150}`}
                        stroke="white"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        fill="none"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          strokeDashoffset: [0, -20]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.g>
                  ))}

                  {/* Rotating Outer Ring */}
                  <motion.circle
                    cx="400"
                    cy="400"
                    r="200"
                    stroke="white"
                    strokeWidth="1"
                    strokeDasharray="8,8"
                    fill="none"
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Central Icon */}
                  <motion.g
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.path
                      d="M 380,380 L 420,380 L 420,420 L 380,420 Z"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                    <motion.path
                      d="M 390,390 L 410,390 L 410,410 L 390,410 Z"
                      stroke="white"
                      strokeWidth="2"
                      fill="white"
                    />
                  </motion.g>
                </motion.g>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-16 md:py-32 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover how we boost your brand visibility
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <Youtube className="w-8 h-8 text-white" />,
                emoji: "🎥",
                title: "YouTube",
                subtitle: "Targeted Video Campaigns",
                description: "Fuel your YouTube growth with data-backed video strategies, audience engagement techniques, and creative storytelling that turns viewers into loyal subscribers.",
                link: "/services/youtube-marketing",
                gradient: "from-[#FF0000] to-[#CC0000]"
              },
              {
                icon: <Linkedin className="w-8 h-8 text-white" />,
                emoji: "🔗",
                title: "LinkedIn",
                subtitle: "Professional Audience Outreach",
                description: "Connect with decision-makers and build a trusted professional brand. Our LinkedIn strategies drive B2B visibility, thought leadership, and lead generation.",
                link: "/services/linkedin-marketing",
                gradient: "from-[#0077B5] to-[#005582]"
              },
              {
                icon: <Twitter className="w-8 h-8 text-white" />,
                emoji: "✖️",
                title: "X (Twitter)",
                subtitle: "Real-Time Trend Marketing",
                description: "Stay ahead of conversations. We craft agile content strategies for X (Twitter) to help your brand ride trending topics, boost engagement, and stay relevant every day.",
                link: "/services/twitter-marketing",
                gradient: "from-[#1DA1F2] to-[#0C85D0]"
              },
              {
                icon: <Instagram className="w-8 h-8 text-white" />,
                emoji: "📸",
                title: "Instagram",
                subtitle: "Visual Content Promotion",
                description: "Make an instant impact. We create captivating Instagram strategies, blending aesthetics with performance-driven content that attracts, engages, and converts followers into fans.",
                link: "/services/instagram-marketing",
                gradient: "from-[#E4405F] to-[#BD3450]"
              },
              {
                icon: <Globe className="w-8 h-8 text-white" />,
                emoji: "🌍",
                title: "Others",
                subtitle: "Multi-Platform Brand Reach",
                description: "Beyond the major players, we help brands tap into emerging and niche platforms (Pinterest, Threads, Snapchat, Quora, and more) to expand audience reach where it matters most.",
                link: "/services/other-platforms",
                gradient: "from-[#6366F1] to-[#4F46E5]",
                className: "md:col-span-2 max-w-2xl mx-auto"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className={`relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow ${service.className || ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <span className="text-2xl mb-2 inline-block">{service.emoji}</span>
                <h3 className="text-xl font-bold mb-2 text-dark">{service.title}</h3>
                <h4 className="text-lg font-semibold mb-3 text-primary">{service.subtitle}</h4>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
                >
                  Explore {service.title} Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-16 md:py-32 bg-gray-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose UI Mitra for Social Media?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Strategic Approach",
                description: "Data-driven strategies for maximum impact"
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Creative Excellence",
                description: "Engaging content that resonates with your audience"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community Building",
                description: "Fostering meaningful connections with your audience"
              },
              {
                icon: <BarChart className="w-6 h-6" />,
                title: "Performance Tracking",
                description: "Real-time analytics and optimization"
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Growth Focused",
                description: "Strategies designed for sustainable growth"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Quick Response",
                description: "Timely engagement and trend adaptation"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg"
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
                Build Your Social Empire with Us!
              </h2>
              <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
                Let's create a social media presence that truly stands out.
              </p>
              <Link
                to="/contact"
                className="bg-white text-primary px-6 py-3 md:px-8 md:py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                Start Your Social Journey
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

export default SocialMedia; 
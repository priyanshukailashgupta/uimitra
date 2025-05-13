import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Globe, Search, Share2, Mail, BarChart,
  ArrowRight, Target, Users, Brain, 
  CheckCircle, TrendingUp, MessageSquare,
  PieChart, LineChart, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalMarketing: React.FC = () => {
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
                Digital Marketing
                <br />
                <span className="text-white">&</span> Growth Services
              </motion.h1>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                At UI Mitra, digital marketing is not just about getting noticed — it's about creating real, measurable impact.
                Our tailored strategies help you reach, engage, and convert your audience across every major online platform.
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
                  Transform Your Digital Presence
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Marketing Elements */}
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
                {/* Marketing Analytics Graph */}
                <motion.g>
                  <motion.path
                    d="M200,600 L600,600"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <motion.path
                    d="M200,600 L200,200"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Animated Graph Line */}
                  <motion.path
                    d="M200,500 C300,480 400,300 600,200"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                    animate={{
                      pathLength: [0, 1],
                      opacity: [0.5, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  {/* Data Points */}
                  {[
                    { x: 200, y: 500 },
                    { x: 300, y: 480 },
                    { x: 400, y: 300 },
                    { x: 600, y: 200 }
                  ].map((point, index) => (
                    <motion.circle
                      key={index}
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      fill="white"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  ))}
                </motion.g>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 md:py-32 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore how we drive success
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto mb-8">
            {[
              {
                title: "Digital Marketing",
                description: "Comprehensive online marketing solutions designed to elevate your brand visibility, engagement, and ROI through integrated strategies.",
                icon: <Globe className="w-8 h-8 text-white" />,
                color: "from-[#FF6B6B] to-[#FF8E8E]",
                features: ["Brand Awareness", "Lead Generation", "Conversion Optimization", "ROI Tracking"]
              },
              {
                title: "SEO Services",
                description: "Be where your customers are searching. Our SEO services boost your website's visibility, rankings, and organic traffic through ethical, data-driven techniques.",
                icon: <Search className="w-8 h-8 text-white" />,
                color: "from-[#4ECDC4] to-[#45B7AF]",
                features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"]
              },
              {
                title: "Social Media Marketing",
                description: "From Instagram to LinkedIn, we craft platform-specific social media strategies that amplify your voice and foster meaningful brand conversations.",
                icon: <Share2 className="w-8 h-8 text-white" />,
                color: "from-[#A78BFA] to-[#8B5CF6]",
                features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics"]
              },
              {
                title: "Email Marketing",
                description: "Emails that convert. We design personalized, high-converting email marketing campaigns that nurture leads and retain loyal customers effectively.",
                icon: <Mail className="w-8 h-8 text-white" />,
                color: "from-[#FCD34D] to-[#F59E0B]",
                features: ["Campaign Design", "List Management", "Automation", "A/B Testing"]
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
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
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
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark">Analytics & Reporting</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Numbers tell stories. Our advanced analytics and customized reports offer deep insights into your digital performance and growth opportunities.
                </p>
                <div className="space-y-2 mb-4 flex-grow">
                  {[
                    "Performance Metrics",
                    "Audience Insights",
                    "ROI Tracking",
                    "Strategy Optimization"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/services/analytics-reporting"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors mt-auto"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
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
            Why Choose UI Mitra for Digital Marketing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Performance-First Approach",
                description: "We focus on metrics that matter to your business growth"
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Integrated Multi-Channel Strategies",
                description: "Cohesive marketing across all digital touchpoints"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Personalized Targeting",
                description: "Tailored strategies for your specific audience"
              },
              {
                icon: <BarChart className="w-6 h-6" />,
                title: "Transparent Analytics",
                description: "Clear reporting and actionable insights"
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Scalable Solutions",
                description: "Growth-focused strategies that evolve with you"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Rapid Implementation",
                description: "Quick deployment of effective campaigns"
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
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
                Partner with UI Mitra to build, optimize, and grow your online success.
              </p>
              <Link
                to="/contact"
                className="bg-white text-primary px-6 py-3 md:px-8 md:py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                Get Started with Our Digital Marketing Experts
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing; 
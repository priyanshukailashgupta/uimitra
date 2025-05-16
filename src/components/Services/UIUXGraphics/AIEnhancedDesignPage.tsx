import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Brain, Zap, Users, BarChart, CheckCircle, 
  Layers, Code, Database, LineChart, Cpu,
  Workflow, Target, Clock, Lightbulb, Compass,
  Sparkles, Layout, PenTool, Repeat, ArrowRight,
  Box, Rocket, MessageCircle, Shield, Heart
} from 'lucide-react';
import AnimatedText from '../../AnimatedText';

interface WorkflowStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  gradient: string;
}

const AIEnhancedDesignPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Data-Driven User Insights",
      description: "Real-time data informs every design choice — from color schemes to navigation flows."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Predictive User Journeys",
      description: "AI predicts how users interact with your brand, helping design more intuitive pathways."
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "Automated Asset Generation",
      description: "From banners to UI elements, AI generates design variations instantly."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Visual Testing",
      description: "Analyze how designs perform before launching — ensuring maximum engagement."
    }
  ];

  const aiCapabilities = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "AI-Powered Personalization",
      description: "Personalize layouts, messaging, and visuals on-the-fly",
      items: [
        "User behavior analysis",
        "Dynamic content adaptation",
        "Personalized UI elements",
        "Custom user journeys",
        "Real-time optimization"
      ]
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Dynamic Visual Content",
      description: "Create adaptive graphics for any context",
      items: [
        "Device-specific layouts",
        "Location-based content",
        "Contextual design elements",
        "Responsive animations",
        "Smart asset scaling"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Speed to Market",
      description: "Accelerate your design process dramatically",
      items: [
        "Rapid prototyping",
        "Automated testing",
        "Quick iterations",
        "Instant variations",
        "Fast deployment"
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Human-Centric + AI-Driven",
      description: "Perfect blend of creativity and technology",
      items: [
        "Human empathy core",
        "AI enhancement",
        "Creative direction",
        "Technical precision",
        "Balanced approach"
      ]
    }
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Discovery Phase",
      description: "Comprehensive data analysis and requirement gathering",
      details: [
        "User behavior pattern analysis",
        "Market trend identification",
        "Competitive landscape mapping",
        "Design requirement specification"
      ],
      gradient: "from-[#FF0080] to-[#7928CA]"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "AI Ideation",
      description: "Leveraging AI to generate innovative design concepts",
      details: [
        "AI-powered design suggestions",
        "Color scheme optimization",
        "Layout pattern recognition",
        "Component relationship analysis"
      ],
      gradient: "from-[#7928CA] to-[#FF0080]"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Design & Curation",
      description: "Human expertise meets AI assistance",
      details: [
        "AI-generated design refinement",
        "Visual hierarchy optimization",
        "Accessibility enhancement",
        "Brand consistency validation"
      ],
      gradient: "from-[#FF4D4D] to-[#F9CB28]"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Smart Testing",
      description: "Data-driven design validation and testing",
      details: [
        "A/B testing automation",
        "User engagement analysis",
        "Performance metrics tracking",
        "Heatmap generation"
      ],
      gradient: "from-[#00DFD8] to-[#007CF0]"
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Optimization",
      description: "Continuous improvement through AI feedback",
      details: [
        "Real-time performance monitoring",
        "Automated enhancement suggestions",
        "User feedback integration",
        "Iterative refinement process"
      ],
      gradient: "from-[#007CF0] to-[#00DFD8]"
    }
  ];

  const renderSVGAnimation = (index: number) => {
    switch (index) {
      case 0:
        return (
          <>
            {/* Discovery Phase - Data Analysis SVG */}
            <motion.rect
              x="40"
              y="40"
              width="120"
              height="120"
              rx="10"
              stroke="var(--primary)"
              strokeWidth="3"
              fill="none"
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M60 100h20M90 80h20M120 120h20"
              stroke="var(--primary)"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{ pathLength: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
            {/* Data points */}
            {[60, 90, 120].map((x, i) => (
              <motion.circle
                key={i}
                cx={x + 10}
                cy={[100, 80, 120][i]}
                r="4"
                fill="var(--primary)"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </>
        );
      case 1:
        return (
          <>
            {/* AI Ideation - Neural Network SVG */}
            {[
              [60, 60], [60, 100], [60, 140], // Input layer
              [100, 80], [100, 120], // Hidden layer
              [140, 100] // Output layer
            ].map(([cx, cy], i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r="6"
                fill="var(--primary)"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
            <motion.path
              d="M60 60L100 80M60 60L100 120M60 100L100 80M60 100L100 120M60 140L100 80M60 140L100 120M100 80L140 100M100 120L140 100"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ 
                pathLength: [0, 1],
                opacity: [0.3, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.circle
              cx="0"
              cy="0"
              r="3"
              fill="var(--primary)"
              animate={{
                cx: [60, 100, 140],
                cy: [60, 80, 100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </>
        );
      case 2:
        return (
          <>
            {/* Design & Curation - UI Elements SVG */}
            <motion.path
              d="M40 40H160M40 100H160M40 160H160M40 40V160M100 40V160M160 40V160"
              stroke="var(--primary)"
              strokeWidth="1"
              strokeDasharray="4 4"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.rect
              x="50"
              y="50"
              width="40"
              height="40"
              rx="5"
              fill="var(--primary)"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M110 50h40M110 70h40M110 90h20"
              stroke="var(--primary)"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
          </>
        );
      case 3:
        return (
          <>
            {/* Smart Testing - Analytics Dashboard SVG */}
            <motion.path
              d="M40 160H160M40 40V160"
              stroke="var(--primary)"
              strokeWidth="2"
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 1 }}
            />
            <motion.path
              d="M40 120L70 100L100 130L130 80L160 90"
              stroke="var(--primary)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            {[
              [70, 100],
              [100, 130],
              [130, 80]
            ].map(([cx, cy], i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r="5"
                fill="var(--primary)"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </>
        );
      case 4:
        return (
          <>
            {/* Optimization - Continuous Improvement Cycle SVG */}
            <motion.circle
              cx="100"
              cy="100"
              r="40"
              stroke="var(--primary)"
              strokeWidth="3"
              strokeDasharray="6 6"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            {[0, 120, 240].map((rotation, i) => (
              <motion.path
                key={i}
                d="M100 60C120 60 140 80 140 100"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                transform={`rotate(${rotation} 100 100)`}
                animate={{ 
                  pathLength: [0, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
            <motion.circle
              cx="100"
              cy="100"
              r="20"
              fill="var(--primary)"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </>
        );
      default:
        return null;
    }
  };

  const deliverables = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Responsive Design",
      description: "AI-UX optimized websites and apps"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Journeys",
      description: "Personalized interaction flows"
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Smart Assets",
      description: "Multi-channel marketing ready"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Dynamic Content",
      description: "Adaptive social media content"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Hyper-Personalization",
      description: "Tailored user experiences"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Scalability",
      description: "Dynamic, adaptable designs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed",
      description: "Faster launch and iteration"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation",
      description: "Leading-edge technology"
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
              AI-Enhanced Design
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Design Smarter with{' '}
              <AnimatedText text="AI" type="gradient" />{' '}
              Intelligence
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Using intelligent systems to assist, amplify, and speed up the design process.
              We enhance creativity with data-driven insights and dynamic adaptability.
            </motion.p>

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Experience AI Design</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#7928CA] to-[#FF0080]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
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
              How We Use{' '}
              <AnimatedText text="AI" type="highlight" />{' '}
              in Design
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-primary/10 transform group-hover:scale-105 transition-transform duration-300" />
                
                <div className="relative p-8">
                  <div className="flex items-center gap-6">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-dark/70">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Capabilities Section */}
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
              AI Design{' '}
              <AnimatedText text="Capabilities" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {capability.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{capability.title}</h3>
                    <p className="text-dark/70">{capability.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {capability.items.map((item, idx) => (
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

      {/* Our AI-Enhanced Workflow section */}
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our  <AnimatedText text="AI-Enhanced " type="highlight" />Workflow
          </motion.h2>
          <div className="space-y-16">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-center gap-8"
                style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
              >
                <div className="flex-1">
                  <motion.div 
                    className="p-8 bg-white rounded-xl shadow-lg border border-primary/10"
                    whileHover={{ 
                      y: -15, 
                      boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                      borderColor: "rgba(237, 24, 79, 0.4)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {React.cloneElement(step.icon as React.ReactElement, { className: "w-8 h-8 text-primary" })}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-dark/70">{step.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-dark/70">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1">
                  <div className="w-full h-[200px] relative">
                    <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                      {renderSVGAnimation(index)}
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Why AI Design{' '}
              <AnimatedText text="Matters" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-full shadow-lg border border-primary/10 text-center aspect-square flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-1 text-dark">{benefit.title}</h3>
                <p className="text-dark/70 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables Section */}
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
              What You{' '}
              <AnimatedText text="Receive" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {deliverable.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{deliverable.title}</h3>
                    <p className="text-dark/70">{deliverable.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Design Impact Section */}
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
              AI Design{' '}
              <AnimatedText text="Impact" type="highlight" />
            </motion.h2>
            <p className="text-dark/70 text-lg max-w-3xl mx-auto">
              Real-world results from our AI-enhanced design approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                borderColor: "rgba(237, 24, 79, 0.4)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start gap-6 mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Layout className="w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">E-commerce Platform Redesign</h3>
                  <p className="text-dark/70">AI-driven personalization and dynamic layouts led to significant improvements in user engagement and sales conversion.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-light p-4 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-1">+42%</div>
                  <div className="text-sm text-dark/70">Conversion Rate</div>
                </div>
                <div className="bg-light p-4 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-1">-35%</div>
                  <div className="text-sm text-dark/70">Bounce Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                borderColor: "rgba(237, 24, 79, 0.4)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start gap-6 mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <LineChart className="w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">SaaS Dashboard Enhancement</h3>
                  <p className="text-dark/70">AI-powered interface adaptations that learn from user behavior, resulting in improved task completion rates and user satisfaction.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-light p-4 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-1">+65%</div>
                  <div className="text-sm text-dark/70">Task Completion</div>
                </div>
                <div className="bg-light p-4 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-1">+88%</div>
                  <div className="text-sm text-dark/70">User Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Metrics Section */}
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
              AI Design{' '}
              <AnimatedText text="Metrics" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                borderColor: "rgba(237, 24, 79, 0.4)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start gap-6 mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Zap className="w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">85%</h3>
                  <p className="text-dark/70">Faster Design Iterations</p>
                </div>
              </div>
              <div className="w-12 h-1 bg-primary/20 rounded-full" />
              <p className="mt-4 text-sm text-dark/70">
                AI assistance dramatically reduces the time needed for design variations and testing
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                borderColor: "rgba(237, 24, 79, 0.4)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start gap-6 mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Users className="w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">3.2x</h3>
                  <p className="text-dark/70">Higher Engagement</p>
                </div>
              </div>
              <div className="w-12 h-1 bg-primary/20 rounded-full" />
              <p className="mt-4 text-sm text-dark/70">
                Users spend more time interacting with AI-optimized interfaces
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-white rounded-xl shadow-lg border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                borderColor: "rgba(237, 24, 79, 0.4)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start gap-6 mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Heart className="w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">92%</h3>
                  <p className="text-dark/70">Client Satisfaction</p>
                </div>
              </div>
              <div className="w-12 h-1 bg-primary/20 rounded-full" />
              <p className="mt-4 text-sm text-dark/70">
                Clients report higher satisfaction with AI-enhanced design outcomes
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center p-12 rounded-2xl shadow-lg relative overflow-hidden"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-white">
              Ready to Experience AI-Powered Design?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's build designs that learn, adapt, and grow — alongside your users.
            </p>
            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative z-10"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div 
        className="absolute top-40 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-[#7928CA]/10 to-[#FF0080]/5 blur-3xl -z-10"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-gradient-to-r from-[#FF0080]/10 to-[#7928CA]/5 blur-3xl -z-10"
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

export default AIEnhancedDesignPage; 
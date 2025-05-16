import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Palette, PenTool, Eye, Target, Sparkles, 
  Lightbulb, Layers, FileCheck, Rocket, Heart,
  Monitor, Smartphone, Globe, ShoppingBag, MessageSquare,
  CheckCircle, ArrowRight, Circle, Square, Triangle,
  Wand2, Image, FileImage, Brush, Zap, Type, 
  PenTool as PenToolIcon, Eye as EyeIcon, 
  Target as TargetIcon, Sparkles as SparklesIcon, 
  Lightbulb as LightbulbIcon, Layers as LayersIcon, 
  FileCheck as FileCheckIcon, Rocket as RocketIcon, 
  Heart as HeartIcon, Monitor as MonitorIcon, 
  Smartphone as SmartphoneIcon, Globe as GlobeIcon, 
  ShoppingBag as ShoppingBagIcon, MessageSquare as MessageSquareIcon, 
  CheckCircle as CheckCircleIcon, ArrowRight as ArrowRightIcon, 
  Circle as CircleIcon, Square as SquareIcon, 
  Triangle as TriangleIcon, Wand2 as Wand2Icon, 
  Image as ImageIcon, FileImage as FileImageIcon, 
  Brush as BrushIcon, Zap as ZapIcon, Type as TypeIcon
} from 'lucide-react';
import AnimatedText from '../../AnimatedText';

interface LogoStyleProps {
  title: string;
  description: string;
  example: string;
  gradient: string;
  icon: React.ReactNode;
  index: number;
}

const LogoStyle: React.FC<LogoStyleProps> = ({ title, description, example, gradient, icon, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-xl overflow-hidden group bg-white p-8 shadow-lg border border-primary/10"
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
      <h3 className="text-xl font-bold mb-2 text-dark">{title}</h3>
      <p className="text-dark/70 mb-4">{description}</p>
      <div className="text-sm text-dark/60">Example: {example}</div>
    </motion.div>
  );
};

const LogoDesignPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const benefits = [
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Instant Recognition",
      description: "Create a memorable mark that sticks in people's minds."
    },
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: "Build Trust",
      description: "Professional logos establish credibility from the first glance."
    },
    {
      icon: <GlobeIcon className="w-6 h-6" />,
      title: "Universal Appeal",
      description: "Works across all platforms, cultures, and contexts."
    },
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: "Stand Out",
      description: "Cut through the noise with a distinctive visual identity."
    }
  ];

  const logoStyles = [
    {
      title: "Wordmarks",
      description: "Text-based logos that spell out your brand name with custom typography",
      example: "Google, Coca-Cola",
      gradient: "from-[#ED184F]/90 to-[#893168]/95",
      icon: <TypeIcon className="w-6 h-6" />
    },
    {
      title: "Lettermarks",
      description: "Monogram or initials designed with unique typographic treatment",
      example: "IBM, HBO",
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95",
      icon: <PenToolIcon className="w-6 h-6" />
    },
    {
      title: "Pictorial Marks",
      description: "Iconic symbols that represent your brand with a recognizable image",
      example: "Apple, Twitter",
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95",
      icon: <ImageIcon className="w-6 h-6" />
    },
    {
      title: "Abstract Marks",
      description: "Unique symbols that convey your brand's essence through abstract forms",
      example: "Nike, Pepsi",
      gradient: "from-[#0093E9]/90 to-[#80D0C7]/95",
      icon: <Wand2Icon className="w-6 h-6" />
    }
  ];

  const process = [
    {
      icon: <LightbulbIcon className="w-6 h-6" />,
      title: "Research & Discovery",
      description: "Understanding your brand, market, and vision",
      items: [
        "Brand personality audit",
        "Competitor analysis",
        "Target audience research",
        "Industry trends review"
      ]
    },
    {
      icon: <PenToolIcon className="w-6 h-6" />,
      title: "Concept Development",
      description: "Creating initial logo concepts and directions",
      items: [
        "Sketching & ideation",
        "Style exploration",
        "Typography selection",
        "Color psychology"
      ]
    },
    {
      icon: <BrushIcon className="w-6 h-6" />,
      title: "Design & Refinement",
      description: "Crafting your logo with precision and purpose",
      items: [
        "Digital development",
        "Multiple variations",
        "Feedback integration",
        "Fine-tuning details"
      ]
    },
    {
      icon: <FileCheckIcon className="w-6 h-6" />,
      title: "Finalization",
      description: "Preparing your logo for real-world use",
      items: [
        "File preparation",
        "Color variations",
        "Size adaptations",
        "Usage guidelines"
      ]
    }
  ];

  const deliverables = [
    {
      icon: <FileImageIcon className="w-6 h-6" />,
      title: "File Formats",
      items: ["AI", "SVG", "PNG", "JPG"]
    },
    {
      icon: <LayersIcon className="w-6 h-6" />,
      title: "Variations",
      items: ["Full Color", "Black & White", "Reversed", "One Color"]
    },
    {
      icon: <MonitorIcon className="w-6 h-6" />,
      title: "Applications",
      items: ["Social Media", "Print", "Digital", "Merchandise"]
    },
    {
      icon: <FileCheckIcon className="w-6 h-6" />,
      title: "Guidelines",
      items: ["Usage Rules", "Color Codes", "Typography", "Spacing"]
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
              Logo Design Services
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Creating Memorable{' '}
              <AnimatedText text="Marks" type="gradient" />{' '}That{' '}
              <AnimatedText text="Speak" type="gradient" delay={0.2} />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A logo is more than a pretty picture—it's the visual soul of your brand. 
              We craft logo identities that aren't just seen, but felt and remembered.
            </motion.p>

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Logo Journey</span>
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
              Why Your Logo <AnimatedText text="Matters" type="highlight" />
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

      {/* Logo Styles Section */}
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
              Logo Design <AnimatedText text="Styles" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logoStyles.map((style, index) => (
              <LogoStyle
                key={index}
                title={style.title}
                description={style.description}
                example={style.example}
                gradient={style.gradient}
                icon={style.icon}
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
              Our Logo Design <AnimatedText text="Process" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
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
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-dark/70 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-dark/70">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              What You'll <AnimatedText text="Receive" type="highlight" />
            </motion.h2>
            <motion.p 
              className="text-lg text-dark/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A comprehensive package of everything you need to launch your brand with confidence
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-4xl mx-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
              </div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                {deliverables.slice(0, 2).map((deliverable, index) => (
              <motion.div
                key={index}
                    className="bg-white rounded-2xl shadow-lg border border-primary/10 p-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {deliverable.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold">{deliverable.title}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {deliverable.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-dark/70"
                          initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-8">
                {deliverables.slice(2).map((deliverable, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg border border-primary/10 p-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)", borderColor: "rgba(237, 24, 79, 0.4)", transition: { duration: 0.2 } }}
              >
                    <div className="flex items-center gap-4 mb-4">
                <motion.div 
                        className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {deliverable.icon}
                </motion.div>
                      <h3 className="text-xl font-bold">{deliverable.title}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                  {deliverable.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-dark/70"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                      <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </motion.div>
                  ))}
                    </div>
              </motion.div>
            ))}
              </div>
            </div>
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
              Ready to Create Your Iconic Logo ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's design something meaningful together.<br/>
              Your vision, our expertise.
            </p>
            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
            >
              Start Your Journey
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

export default LogoDesignPage;
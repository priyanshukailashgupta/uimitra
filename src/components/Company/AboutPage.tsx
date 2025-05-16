import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Users, Heart, Sparkles, Target, Circle, Square, Triangle, Code, Laptop, Server, LayoutDashboard, Pencil, MonitorSmartphone, TestTubes } from 'lucide-react';
import AnimatedText from '../AnimatedText';

const Counter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          node.textContent = Math.round(value).toString() + "+";
        },
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView]);

  return <span ref={nodeRef}>{from}+</span>;
};

const AboutPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedSlides, setDisplayedSlides] = useState<typeof sliderContent>([]);
  const [slideOffset, setSlideOffset] = useState(0);

  const sliderContent = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      title: "Innovative Solutions",
      description: "Creating cutting-edge digital experiences"
    },
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      title: "Expert Team",
      description: "Passionate professionals dedicated to excellence"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      title: "Global Reach",
      description: "Serving clients worldwide with exceptional results"
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      title: "Innovation Hub",
      description: "Pushing boundaries with cutting-edge technology"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      title: "Client Success",
      description: "Delivering exceptional results that drive growth"
    }
  ];

  // Initialize displayed slides with duplicates for infinite scrolling
  useEffect(() => {
    // Create an array with multiple sets of slides to enable continuous forward movement
    const extendedSlides = [
      ...sliderContent,
      ...sliderContent,
      ...sliderContent
    ];
    setDisplayedSlides(extendedSlides);
  }, []);

  // Slideshow interval effect (always runs)
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => {
        const next = prev + 1;
        // If we're approaching the end of our extended slides array
        if (next >= displayedSlides.length - sliderContent.length) {
          setDisplayedSlides(prevSlides => [...prevSlides, ...sliderContent]);
        }
        setTimeout(() => {
          setIsTransitioning(false);
        }, 800);
        return next;
      });
    }, 3500); // 3.5 seconds per slide
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [displayedSlides.length, sliderContent.length]);

  // Calculate which original slide is currently displayed (for indicators)
  const currentOriginalSlide = currentSlide % sliderContent.length;

  const stats = [
    { number: 32, label: "Projects Delivered", icon: <Code /> },
    { number: 26, label: "Developers", icon: <Laptop /> },
    { number: 50, label: "Happy Clients", icon: <Heart /> },
    { number: 5, label: "Years Experience", icon: <Server /> }
  ];

  const values = [
    {
      title: "Exceed Expectations",
      description: "We go above and beyond to deliver exceptional results for our clients.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Inspire Innovation",
      description: "Pushing boundaries with creative solutions and cutting-edge technology.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Integrity in Actions",
      description: "Building trust through transparency and ethical business practices.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Invest in People",
      description: "Nurturing talent and fostering growth in our team and community.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const methodologySteps = [
    {
      icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
      number: "01",
      title: "Analyse",
      description: "Communicate and set project goals"
    },
    {
      icon: <Pencil className="w-8 h-8 text-primary" />,
      number: "02",
      title: "Plan",
      description: "Draw specifications and a schedule"
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-primary" />,
      number: "03",
      title: "Design",
      description: "Make wireframes for desktop and mobile devices. Then proceed to designing layouts."
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      number: "04",
      title: "Develop",
      description: "Then proceed to designing layouts. Integrate an easy-to-use CMS."
    },
    {
      icon: <TestTubes className="w-8 h-8 text-primary" />,
      number: "05",
      title: "Test and Launch",
      description: "Test early, Test often."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "06",
      title: "Maintain and Support",
      description: "Provide ongoing support, updates, and maintenance to ensure long-term success."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden overflow-x-hidden bg-[#f8f9fa]" ref={sectionRef}>
      {/* Hero Section with Smooth Slider */}
      <div className="relative min-h-[calc(100vh-110px)] flex items-center justify-center pt-0 pb-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {displayedSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ x: "100%" }}
              animate={{
                x: `${(index - currentSlide) * 100}%`,
                transition: {
                  duration: 0.8,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/70 to-dark/90 z-10" />
              <motion.img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
                <div className="text-center">
                  <motion.h2 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 max-w-2xl mx-auto drop-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {slide.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {sliderContent.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full ${currentOriginalSlide === index ? 'bg-white' : 'bg-white/50'}`}
              initial={false}
              animate={{
                scale: currentOriginalSlide === index ? 1.2 : 1,
                opacity: currentOriginalSlide === index ? 1 : 0.5
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      

      {/* About Section */}
      <div className="py-20 bg-gradient-to-b from-white to-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About <AnimatedText text="Company" type="highlight" /></h2>
              <div className="space-y-6 text-dark/70">
                <p>
                  Welcome to Uimitra, where innovation meets excellence. We specialize in delivering cutting-edge digital solutions 
                  that transform businesses and enhance user experiences. Our team of dedicated professionals brings together expertise 
                  in UI/UX design, web development, and digital strategy to create impactful solutions for our clients.
                </p>
                <p>
                  At Uimitra, we believe in the power of technology to transform businesses and create meaningful connections. 
                  Our approach combines creative design thinking with technical expertise to deliver solutions that not only look 
                  beautiful but also drive real business results.
                </p>
                <p>
                  With years of experience in the digital space, we've helped numerous businesses across various industries establish 
                  their digital presence, optimize their operations, and achieve their growth objectives. Our commitment to excellence 
                  and innovation has made us a trusted partner for businesses looking to thrive in the digital age.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl my-[60px]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <AnimatedText text="Mission & Vision" type="highlight" />
            </h2>
            <p className="text-dark/70 max-w-3xl mx-auto">
              Driving innovation and excellence in digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="p-10 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent rounded-2xl border border-primary/20"
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                borderColor: "rgba(237, 24, 79, 0.4)",
                transition: { duration: 0.2 }
              }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-dark/80 text-lg leading-relaxed">
                To accelerate businesses by providing innovative solutions and quality services that exceed expectations, 
                while fostering a culture of creativity, collaboration, and continuous improvement.
              </p>
            </motion.div>

            <motion.div 
              className="p-10 bg-gradient-to-br from-secondary/5 via-secondary/10 to-transparent rounded-2xl border border-secondary/20"
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 25px 50px rgba(240, 90, 40, 0.25)",
                borderColor: "rgba(240, 90, 40, 0.4)",
                transition: { duration: 0.2 }
              }}
            >
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-dark/80 text-lg leading-relaxed">
                To become the largest service provider in our chosen technologies by delivering quality solutions 
                and innovative products that transform businesses and enhance user experiences globally.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="py-16 bg-primary text-white">
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
                  className="text-4xl md:text-5xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Counter from={0} to={stat.number} />
                </motion.div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <AnimatedText text="Core " type="highlight" />Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-primary/20"
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
                  className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    backgroundColor: "rgba(237, 24, 79, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-dark/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Methodology - <AnimatedText text="Simple Process From Idea to Launch" type="highlight" />
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologySteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative p-8 bg-white rounded-xl shadow-lg border border-primary/20"
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
                <div className="absolute top-6 right-6 text-8xl font-bold text-primary/5">
                  {step.number}
                </div>
                
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    backgroundColor: "rgba(237, 24, 79, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {step.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-dark/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
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

export default AboutPage;
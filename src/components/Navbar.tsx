import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Infinity, ChevronDown, Menu, X, MessageCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import UimitraLogo from '../assets/Uimitra..svg';

interface MenuItem {
  name: string;
  description: string;
  href: string;
  image?: string;
}

interface Category {
  title?: string;
  items: MenuItem[];
}

interface NavItemProps {
  name: string;
  href: string;
  categories?: Category[];
  dropdownWidth?: string;
  dropdownStyle?: 'company' | 'services';
}

const companyCategories: Category[] = [
  {
    items: [
      {
        name: "About Us",
        description: "Our story, mission, and values",
        href: "/about"
      },
      {
        name: "Our Team",
        description: "Meet our leadership team",
        href: "/team"
      },
      {
        name: "Success Stories",
        description: "Real results from real clients",
        href: "/success-stories"
      }
    ]
  }
];

const serviceCategories: Category[] = [
  {
    title: "UI/UX DESIGN & GRAPHIC SERVICES",
    items: [
      {
        name: "UI/UX Design Services",
        description: "Create exceptional user experiences",
        href: "/services/ui-ux-design"
      },
      {
        name: "Web Design",
        description: "Modern & responsive websites",
        href: "/services/web-design"
      },
      {
        name: "App Design",
        description: "Beautiful mobile applications",
        href: "/services/app-design"
      },
      {
        name: "AI-Enhanced Design",
        description: "Smarter, Faster, Creative Experiences",
        href: "/services/ai-design"
      },
      {
        name: "Graphics Design",
        description: "Stunning visual content creation",
        href: "/services/graphics-design"
      },
    ]
  },
  {
    title: "BRAND DESIGN & BUILD SERVICES",
    items: [
      {
        name: "Brand Strategy",
        description: "Strategic brand foundation & positioning",
        href: "/services/brand-strategy"
      },
      {
        name: "Logo Design",
        description: "Memorable brand symbols",
        href: "/services/logo-design"
      },
      {
        name: "Brand Guidelines",
        description: "Consistent brand standards",
        href: "/services/brand-guidelines"
      },
      {
        name: "Brand Identity",
        description: "Complete visual systems",
        href: "/services/brand-identity"
      },
      {
        name: "Brand Development",
        description: "Grow your brand presence",
        href: "/services/brand-development"
      }
    ]
  },
  {
    title: "DIGITAL MARKETING SERVICES",
    items: [
      {
        name: "Digital Marketing",
        description: "Comprehensive online marketing",
        href: "/services/digital-marketing-page"
      },
      {
        name: "SEO Services",
        description: "Search engine optimization",
        href: "/services/seo"
      },
      {
        name: "Social Media Marketing",
        description: "Social platform strategy",
        href: "/services/social-media-page"
      },
      {
        name: "Email Marketing",
        description: "Targeted email campaigns",
        href: "/services/email-marketing"
      },
      {
        name: "Analytics & Reporting",
        description: "Data-driven insights",
        href: "/services/analytics"
      } 
    ]
  },
  {
    title: "SOCIAL MEDIA SERVICES",
    items: [
      {
        name: "YouTube",
        description: "Targeted video campaigns",
        href: "/services/youtube-marketing"
      },
      {
        name: "LinkedIn",
        description: "Professional audience outreach",
        href: "/services/linkedin-marketing"
      },
      {
        name: "X (Twitter)",
        description: "Real-time trend marketing",
        href: "/services/twitter-marketing"
      },
      {
        name: "Instagram",
        description: "Visual content promotion",
        href: "/services/instagram-marketing"
      },
      {
        name: "Others",
        description: "Multi-platform brand reach",
        href: "/services/other-platforms"
      }
    ]
  }
];

const navItems: NavItemProps[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'Company', 
    href: '/company', 
    categories: companyCategories, 
    dropdownWidth: 'w-[400px] mx-[-200px]',
    dropdownStyle: 'company'
  },
  { name: 'Technology', href: '/technology' },
  { 
    name: 'Services', 
    href: '/services', 
    categories: serviceCategories, 
    dropdownWidth: 'w-[1400px] mx-[-900px]',
    dropdownStyle: 'services'
  },
  // { name: 'Work', href: '/work' }
];

function scrollToHero() {
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    const yOffset = -100; // Adjust this value to match your Navbar height
    const y = heroSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

const NavItem: React.FC<{ 
  item: NavItemProps; 
  isActive: boolean; 
  onClick: () => void;
  isMobile?: boolean;
}> = ({ 
  item, 
  isActive,
  onClick,
  isMobile = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedSubheading, setExpandedSubheading] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.FormEvent, href: string) => {
    e.preventDefault();
    if (item.name === 'Home') {
      if (location.pathname === '/') {
      scrollToHero();
      } else {
        navigate('/');
      }
    } else {
    navigate(href);
    }
    onClick();
    setIsHovered(false);
    setExpandedCategory(null);
    setExpandedSubheading(null);
  };

  const getDropdownStyles = () => {
    if (item.dropdownStyle === 'company') {
      return 'grid grid-cols-1 gap-4';
    }
    if (item.dropdownStyle === 'services') {
      return 'grid grid-cols-4 gap-12';
    }
    return 'grid grid-cols-1 md:grid-cols-4 gap-12';
  };

  if (isMobile) {
    return (
      <motion.div 
        className="w-full border-b border-white/10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        <motion.button
          className={`w-full flex items-center justify-between px-8 py-5 text-lg font-medium ${
            item.name === 'Home' ? 'text-white/90' : isActive ? 'text-primary' : 'text-white/90'
          } hover:text-primary transition-colors`}
          onClick={(e) => {
            if (item.categories) {
              setExpandedCategory(expandedCategory === 0 ? null : 0);
            } else {
              handleClick(e, item.href);
            }
          }}
          whileTap={{ scale: 0.98 }}
        >
          {item.name}
          {item.categories && (
            <ChevronDown 
              size={20} 
              className={`transition-transform duration-300 ${expandedCategory === 0 ? 'rotate-180' : ''}`} 
            />
          )}
        </motion.button>

        <AnimatePresence>
          {item.categories && expandedCategory === 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5"
            >
              <div className="py-4">
                {item.categories.map((category, index) => (
                  <div key={index} className="px-8 py-2">
                    {index !== 0 && <div className="h-2" />}
                    <button
                      className="flex items-center justify-between w-full text-white/80 font-semibold text-sm whitespace-normal break-words py-2 focus:outline-none"
                      onClick={() => setExpandedSubheading(expandedSubheading === index ? null : index)}
                    >
                      {category.title}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${expandedSubheading === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedSubheading === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-3 mt-2"
                        >
                          {category.items.map((menuItem, itemIndex) => (
                            <motion.a
                              key={itemIndex}
                              href={menuItem.href}
                              className="block text-white/70 hover:text-white pl-4"
                              onClick={(e) => handleClick(e, menuItem.href)}
                              whileHover={{ x: 5 }}
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                                <div className="flex flex-col">
                                  <span className="font-medium">{menuItem.name}</span>
                                  <span className="text-xs opacity-70 mt-1 ml-0">{menuItem.description}</span>
                                </div>
                              </div>
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        className={`text-sm md:text-xs lsm:text-xs lg:text-sm font-medium flex items-center gap-1 py-2 ${
          item.name === 'Home' ? 'text-gray-800' : isActive ? 'text-primary' : 'text-gray-800'
        } hover:text-primary transition-colors`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          if (!item.categories) {
            handleClick(e, item.href);
          }
        }}
      >
        {item.name}
        {item.categories && (
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} 
          />
        )}
      </motion.button>

      {item.categories && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className={`fixed left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg overflow-hidden z-50 ${item.dropdownWidth || 'w-[1000px]'}`}
              style={{ top: '60px' }}
            >
              <div className="p-4 md:p-6 lg:p-8">
                <div className={getDropdownStyles()}>
                  {item.categories.map((category, index) => (
                    <div key={index} className="space-y-4 md:space-y-6">
                      {category.title && (
                        <h4 className="font-semibold text-gray-900 text-sm md:text-base lg:text-base mb-4 md:mb-6">{category.title}</h4>
                      )}
                      <div className="space-y-4 md:space-y-6">
                        {category.items.map((menuItem, itemIndex) => (
                          <motion.a
                            key={itemIndex}
                            href={menuItem.href}
                            className="block group"
                            onClick={(e) => handleClick(e, menuItem.href)}
                            whileHover={{ x: 5 }}
                          >
                            {menuItem.image && (
                              <div className="mb-3 md:mb-4 rounded-lg overflow-hidden">
                                <img 
                                  src={menuItem.image} 
                                  alt={menuItem.name}
                                  className="w-full h-32 md:h-40 lg:h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                              <div className="font-medium text-gray-900 group-hover:text-primary text-sm md:text-base lg:text-base">
                                {menuItem.name}
                              </div>
                            </div>
                            <div className="text-xs md:text-sm lg:text-sm text-gray-500 ml-3.5">
                              {menuItem.description}
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const GetInTouchButton: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate('/contact')}
      className={`
        ${isMobile ? 'w-full bg-white text-primary mt-6' : 'bg-primary text-white'} 
        px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 relative overflow-hidden group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
        initial={{ x: "100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.4 }}
      />
      <span className="relative z-10 flex items-center gap-2">
        Get In Touch
        <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
      </span>
    </motion.button>
  );
};

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < lastScrollY) {
            setShowNavbar(true); // Scrolling up
          } else if (window.scrollY > 50) {
            setShowNavbar(false); // Scrolling down
          }
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Add effect to handle navigation and scrolling
  useEffect(() => {
    if (location.pathname === '/') {
      // Wait for the page to be fully loaded
      const timer = setTimeout(() => {
        scrollToHero();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleLogoClick = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      scrollToHero();
    } else {
    navigate('/');
    }
  };

  return (
    <motion.nav
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={
        'sticky top-0 z-50 transition-all duration-300 bg-white/30 backdrop-blur-md backdrop-saturate-150'
      }
    >
      <div className="max-w-7xl mx-auto px-2 msm:px-3 lsm:px-4 md:px-6 lg:px-8 xl:px-16 4k:px-32">
        <div className="flex items-center justify-between h-14 msm:h-16 lsm:h-18 md:h-20 lg:h-24 xl:h-28 4k:h-32">
          {/* Logo */}
          <div className="flex items-center pl-4 md:pl-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogoClick}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-1 msm:gap-2 lsm:gap-3 md:gap-4">
                <img 
                  src={UimitraLogo} 
                  alt="UI Mitra Logo" 
                  className="w-16 h-16 msm:w-20 msm:h-20 lsm:w-24 lsm:h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 4k:w-36 4k:h-36 group-hover:opacity-80 transition-opacity"
                />
              </div>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lsm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 4k:space-x-16">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                isActive={activeItem === item.name}
                onClick={() => setActiveItem(item.name)}
              />
            ))}
            <GetInTouchButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? (
              <X className="h-5 w-5 msm:h-6 msm:w-6 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 msm:h-6 msm:w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
          <AnimatePresence>
        {isOpen && (
              <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#000F23] text-white fixed left-0 top-14 w-full z-50 h-[calc(100vh-3.5rem)] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-4">
                      {navItems.map((item) => (
                        <NavItem
                          key={item.name}
                          item={item}
                          isActive={activeItem === item.name}
                          onClick={() => {
                            setActiveItem(item.name);
                    setIsOpen(false);
                          }}
                          isMobile
                        />
                      ))}
              <div className="px-8 pt-4">
                      <GetInTouchButton isMobile />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
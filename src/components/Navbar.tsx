import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Infinity, ChevronDown, Menu, X, MessageCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

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
  { name: 'Work', href: '/work' }
];

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
  const navigate = useNavigate();

  const handleClick = (e: React.FormEvent, href: string) => {
    e.preventDefault();
    navigate(href);
    onClick();
    setIsHovered(false);
    setExpandedCategory(null);
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
          className="w-full flex items-center justify-between px-8 py-5 text-lg font-medium text-white/90 hover:text-white"
          onClick={() => setIsHovered(!isHovered)}
          whileTap={{ scale: 0.98 }}
        >
          {item.name}
          {item.categories && (
            <ChevronDown 
              size={20} 
              className={`transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} 
            />
          )}
        </motion.button>

        <AnimatePresence>
          {isHovered && item.categories && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5"
            >
              <div className="py-4">
                {item.categories.map((category, index) => (
                  <div key={index} className="px-8 py-2">
                    {category.title && (
                      <motion.button
                        className="flex items-center justify-between w-full text-white/80 font-medium py-2"
                        onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
                      >
                        {category.title}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-300 ${expandedCategory === index ? 'rotate-180' : ''}`}
                        />
                      </motion.button>
                    )}
                    <AnimatePresence>
                      {(!category.title || expandedCategory === index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
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
                                <div className="font-medium">{menuItem.name}</div>
                              </div>
                              <div className="text-sm opacity-70 ml-3.5">{menuItem.description}</div>
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
        className={`text-sm font-medium flex items-center gap-1 py-2 ${
          isActive ? 'text-primary' : 'text-gray-800'
        } hover:text-primary transition-colors`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (!item.categories) {
            navigate(item.href);
            onClick();
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
              <div className="p-8">
                <div className={getDropdownStyles()}>
                  {item.categories.map((category, index) => (
                    <div key={index} className="space-y-6">
                      {category.title && (
                        <h4 className="font-semibold text-gray-900 mb-6">{category.title}</h4>
                      )}
                      <div className="space-y-6">
                        {category.items.map((menuItem, itemIndex) => (
                          <motion.a
                            key={itemIndex}
                            href={menuItem.href}
                            className="block group"
                            onClick={(e) => handleClick(e, menuItem.href)}
                            whileHover={{ x: 5 }}
                          >
                            {menuItem.image && (
                              <div className="mb-4 rounded-lg overflow-hidden">
                                <img 
                                  src={menuItem.image} 
                                  alt={menuItem.name}
                                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                              <div className="font-medium text-gray-900 group-hover:text-primary">
                                {menuItem.name}
                              </div>
                            </div>
                            <div className="text-sm text-gray-500 ml-3.5">
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleLogoClick = () => {
    // Close mobile menu if open
    setMobileMenuOpen(false);
    
    // Force a hard navigation to the home page
    window.location.href = '/';
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-white'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 z-10 group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="group-hover:text-primary transition-colors"
            >
              <Infinity size={32} className="text-primary" />
            </motion.div>
            <span className="font-bold text-xl group-hover:text-primary transition-colors">UI Mitra</span>
          </button>

          <div className="hidden lg:flex items-center space-x-16">
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

          <motion.button
            className="lg:hidden z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-6 h-6 text-dark" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="fixed inset-0 min-h-screen bg-dark lg:hidden z-40"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto pt-20">
                    <div className="space-y-2">
                      {navItems.map((item) => (
                        <NavItem
                          key={item.name}
                          item={item}
                          isActive={activeItem === item.name}
                          onClick={() => {
                            setActiveItem(item.name);
                            if (!item.categories) setMobileMenuOpen(false);
                          }}
                          isMobile
                        />
                      ))}
                    </div>
                    <div className="px-8">
                      <GetInTouchButton isMobile />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
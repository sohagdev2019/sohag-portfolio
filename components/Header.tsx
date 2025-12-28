'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

interface NavLink {
  href: string;
  label: string;
  id: string;
  icon: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);

  const navLinks: NavLink[] = useMemo(() => [
    { href: '/#work-experience', label: 'Experience', id: 'work-experience', icon: '💼' },
    { href: '/#projects', label: 'Projects', id: 'projects', icon: '🚀' },
    { href: '/#contact', label: 'Contact', id: 'contact', icon: '✉️' },
  ], []);

  // Optimized scroll handler with requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      // Determine active section using IntersectionObserver for better performance
      const sections = navLinks.map(link => link.id);
      const scrollPosition = scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId);
            ticking = false;
            return;
          }
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          updateScrollState();
        });
        ticking = true;
      }
    };

    // Initial check
    updateScrollState();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [navLinks]);

  // Body scroll lock with cleanup
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle;
    }
    
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Smooth scroll handler
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.slice(2);
      const element = document.getElementById(targetId);
      
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
      setIsMenuOpen(false);
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 w-full pt-6 px-4 sm:px-6 md:px-8"
        role="banner"
      >
        <div className="max-w-7xl mx-auto">
          {/* Logo Section - Left Side */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-6 z-10">
            <Link
              href="/"
              className="group relative inline-block focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black rounded-full"
              aria-label="Home"
            >
              <div className="relative px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="text-white font-bold text-sm sm:text-base tracking-wide relative z-10 block">
                  SH
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300 blur-xl"></div>
                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
              </div>
            </Link>
          </div>

          {/* Centered Floating Navigation - Desktop */}
          <div className="hidden md:flex items-center justify-center">
            <nav
              className={`relative px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                scrolled
                  ? 'bg-white/5 border-white/20 shadow-2xl shadow-black/30 scale-100'
                  : 'bg-black/30 border-white/10 shadow-lg shadow-black/20 scale-95'
              }`}
              role="navigation"
              aria-label="Main navigation"
            >
              {/* Background gradient glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"></div>
              
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-sm"></div>
              </div>
              
              <div className="flex items-center gap-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.id;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative group px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-transparent ${
                        isActive
                          ? 'text-white bg-white/10 shadow-lg shadow-purple-500/20'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {/* Active dot indicator with improved animation */}
                      {isActive && (
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse shadow-lg shadow-purple-500/50"></span>
                      )}
                      
                      {/* Active background shimmer */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
                      )}
                      
                      <span className="relative z-10 flex items-center gap-2">
                        <span className={`text-xs transition-all duration-300 ${isActive ? 'opacity-100 scale-110' : 'opacity-70 group-hover:opacity-100 group-hover:scale-110'}`}>
                          {link.icon}
                        </span>
                        <span>{link.label}</span>
                      </span>
                      
                      {/* Underline animation - covers both icon and text */}
                      <span className={`absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 origin-center ${
                        isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}></span>
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"></div>
                      
                      {/* Ripple effect on click */}
                      <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 opacity-0 group-active:opacity-100 transition-all duration-300 -z-10"></span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4 sm:right-6 top-6 z-10">
            <button
              type="button"
              className="relative p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black active:scale-95"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300 blur-lg"></div>
              
              <div className="relative w-5 h-5 flex flex-col justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Bottom Sheet Style */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop with gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>

        {/* Bottom Sheet */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-black/95 backdrop-blur-2xl border-t border-white/10 rounded-t-3xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient border at top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          {/* Drag indicator */}
          <div className="flex justify-center pt-4 pb-2">
            <div className="w-12 h-1 bg-white/20 rounded-full"></div>
          </div>

          {/* Navigation Links */}
          <nav className="px-6 py-8 space-y-3" role="navigation" aria-label="Mobile navigation">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                  }}
                  className={`group relative flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 shadow-lg shadow-purple-500/20'
                      : 'bg-white/5 border border-transparent hover:bg-white/10 hover:border-white/10'
                  }`}
                  style={{
                    animationDelay: `${index * 80}ms`,
                    transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 80}ms`,
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {/* Icon with enhanced animation */}
                  <span className={`text-2xl transition-all duration-300 relative z-10 ${
                    isActive ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-6'
                  }`}>
                    {link.icon}
                  </span>
                  
                  {/* Label */}
                  <span className="text-white text-lg font-medium flex-1 relative z-10">
                    {link.label}
                  </span>
                  
                  {/* Active indicator with pulse */}
                  {isActive && (
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse shadow-lg shadow-purple-500/50 relative z-10"></span>
                  )}
                  
                  {/* Arrow icon with smooth animation */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-all duration-300 relative z-10 ${
                      isActive 
                        ? 'text-purple-400 translate-x-1' 
                        : 'text-gray-400 group-hover:text-white group-hover:translate-x-1'
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
                  
                  {/* Ripple effect */}
                  <span className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-active:scale-100 opacity-0 group-active:opacity-100 transition-all duration-300"></span>
                </Link>
              );
            })}
          </nav>

          {/* Close hint with animation */}
          <div 
            className="px-6 pb-8 text-center"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transition: `opacity 0.3s ease-out ${navLinks.length * 80 + 200}ms`
            }}
          >
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <span>Tap outside to close</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-gray-500"
              >
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

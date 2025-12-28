'use client';

import { useState, useEffect, useRef } from 'react';

const capabilities = [
  {
    title: 'WebGL & 3D',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <circle cx="8" cy="10" r="1.5" />
        <circle cx="16" cy="10" r="1.5" />
        <rect x="6" y="14" width="12" height="2" rx="1" />
      </svg>
    ),
    features: ['Three.js', 'WebGL Shaders', 'Performance'],
  },
  {
    title: 'Progressive Web Apps',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <rect x="9" y="4" width="6" height="14" rx="1" fill="#10b981" />
      </svg>
    ),
    features: ['Offline support', 'Push notifications', 'App-like'],
  },
  {
    title: 'Real-time Features',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="#fbbf24" />
      </svg>
    ),
    features: ['WebSockets', 'WebRTC', 'Server-Sent Events'],
  },
  {
    title: 'Browser APIs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    features: ['File System', 'Web Workers', 'Service Workers'],
  },
  {
    title: 'Performance',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="#ef4444" />
        <path d="M15 4L5 16h7l-1 8 10-12h-7l1-8z" fill="#f97316" opacity="0.8" />
        <path d="M17 6L7 18h7l-1 8 10-12h-7l1-8z" fill="#3b82f6" opacity="0.6" />
      </svg>
    ),
    features: ['Code splitting', 'Tree shaking', 'Optimization'],
  },
  {
    title: 'Security',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="#fbbf24" />
      </svg>
    ),
    features: ['CSP', 'CORS', 'Security headers'],
  },
];

export default function ModernWebCapabilities() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col w-full mt-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2
        className={`text-sm font-medium tracking-wider text-gray-400 uppercase mb-6 transition-all duration-500 delay-100 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        Modern Web Capabilities
      </h2>

      <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {capabilities.map((capability, index) => (
          <div
            key={capability.title}
            className={`group relative p-4 rounded-lg border border-white/5 hover:border-white/20 hover:bg-white/5 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: isVisible ? `${150 + index * 50}ms` : '0ms',
            }}
          >
            {/* Background gradient glow on hover */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 -z-10"></div>
            
            {/* Shine effect on hover */}
            <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
            </div>
            
            {/* Hover lift and scale effect */}
            <div className="transform transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1">
              {/* Icon and Title Row */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-gray-500 group-hover:text-gray-200 transition-all duration-500 flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-3">
                  {capability.icon}
                </div>
                <h3 className="text-white text-sm font-semibold group-hover:text-gray-100 transition-all duration-300 transform group-hover:translate-x-0.5">
                  {capability.title}
                </h3>
              </div>

              {/* Features - Inline with commas */}
              <p className="text-gray-500 text-xs group-hover:text-gray-300 transition-all duration-300 leading-relaxed transform group-hover:translate-x-0.5">
                {capability.features.join(' • ')}
              </p>
            </div>
            
            {/* Bottom border accent on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}


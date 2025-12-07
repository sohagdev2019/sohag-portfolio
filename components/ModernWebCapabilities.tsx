'use client';

import { useState, useEffect, useRef } from 'react';

const capabilities = [
  {
    title: 'WebGL & 3D',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <circle cx="8" cy="10" r="1.5" />
        <circle cx="16" cy="10" r="1.5" />
        <rect x="6" y="14" width="12" height="2" rx="1" />
      </svg>
    ),
    features: ['Three.js', 'WebGL Shaders', 'Performance optimization'],
  },
  {
    title: 'Progressive Web Apps',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <rect x="9" y="4" width="6" height="14" rx="1" fill="#10b981" />
      </svg>
    ),
    features: ['Offline support', 'Push notifications', 'App-like experience'],
  },
  {
    title: 'Real-time Features',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="#fbbf24" />
      </svg>
    ),
    features: ['WebSockets', 'WebRTC', 'Server-Sent Events'],
  },
  {
    title: 'Browser APIs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    features: ['File System Access', 'Web Workers', 'Service Workers'],
  },
  {
    title: 'Performance',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="#ef4444" />
        <path d="M15 4L5 16h7l-1 8 10-12h-7l1-8z" fill="#f97316" opacity="0.8" />
        <path d="M17 6L7 18h7l-1 8 10-12h-7l1-8z" fill="#3b82f6" opacity="0.6" />
        <path d="M19 8L9 20h7l-1 8 10-12h-7l1-8z" fill="#fbbf24" opacity="0.4" />
      </svg>
    ),
    features: ['Code splitting', 'Tree shaking', 'Resource optimization'],
  },
  {
    title: 'Security',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="#fbbf24" />
      </svg>
    ),
    features: ['CSP', 'CORS configuration', 'Security headers'],
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
      className={`flex flex-col w-full mt-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2
        className={`font-bold text-lg tracking-widest text-white uppercase mb-10 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        Modern Web Capabilities
      </h2>

      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {capabilities.map((capability, index) => (
          <div
            key={capability.title}
            className={`group relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 border border-gray-800/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
            }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 -z-10"></div>

            {/* Icon */}
            <div className="text-gray-400 mb-4 group-hover:text-white transition-colors duration-300">
              {capability.icon}
            </div>

            {/* Title */}
            <h3 className="text-white text-lg font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">
              {capability.title}
            </h3>

            {/* Features */}
            <ul className="flex flex-col gap-2">
              {capability.features.map((feature, featureIndex) => (
                <li
                  key={feature}
                  className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300"
                  style={{
                    transitionDelay: isVisible
                      ? `${300 + index * 100 + featureIndex * 50}ms`
                      : '0ms',
                  }}
                >
                  {feature}
                </li>
              ))}
            </ul>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/0 to-transparent rounded-bl-full group-hover:from-blue-500/10 transition-all duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}


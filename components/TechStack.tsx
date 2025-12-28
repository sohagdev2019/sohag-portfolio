'use client';

import { useState, useEffect, useRef } from 'react';

// ============================================
// OLD COMPONENT - COMMENTED OUT
// ============================================
/*
// Frontend skills - vertical list (one per box)
const frontendSkills = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'REACT',
  'NEXT JS',
  'ZUSTAND',
  'TAILWIND CSS',
  'FRAMER MOTION',
  'DOM',
  'UNIT TEST',
  'PERFORMANCE OPTIMIZE',
  'SSR',
  'TYPESCRIPT',
  'REACT NATIVE',
];

// Backend/Server skills - vertical list (one per box)
const backendSkills = [
  'NODE',
  'BUN',
  'EXPRESS',
  'REST API',
  'ZOD VALIDATION',
  'JWT/OAUTH',
  'SQL',
  'POSTGRES',
  'PRISMA ORM',
  'DB MODELING',
  'STRIPE PAYMENTS',
  'PYTHON',
  'GO',
];

// Tools skills - horizontal (wrapping)
const toolsSkills = ['GIT', 'GITHUB', 'LINUX', 'VPS', 'VERCEL', 'WORDPRESS'];

// Design skills - horizontal (wrapping)
const designSkills = ['UX/UI DESIGN', 'PRODUCT DESIGN', 'FIGMA', 'ADOBE XD', 'WIREFRAME'];

export default function TechStack() {
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

  const SkillTag = ({
    skill,
    delay,
    index,
    isVertical = false,
  }: {
    skill: string;
    delay: number;
    index: number;
    isVertical?: boolean;
  }) => (
    <div
      className={`group relative px-2 py-1 sm:px-2.5 sm:py-1.5 bg-gray-900/60 backdrop-blur-sm border border-gray-600/50 rounded text-white text-[9px] xs:text-[10px] sm:text-[11px] font-medium uppercase tracking-wide hover:border-gray-500/60 transition-all duration-300 whitespace-nowrap ${
        isVertical ? 'w-full sm:w-auto' : ''
      } ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{
        transitionDelay: isVisible ? `${delay + index * 30}ms` : '0ms',
      }}
    >
      <span className="relative z-10">{skill}</span>
    </div>
  );

  const CategoryBox = ({
    title,
    delay,
    position,
  }: {
    title: string;
    delay: number;
    position: 'left' | 'center' | 'right';
  }) => {
    const alignClasses = {
      left: 'items-start',
      center: 'items-center',
      right: 'items-end max-md:items-start',
    };

    return (
      <div className={`flex flex-col ${alignClasses[position]} w-full mb-2 sm:mb-2.5`}>
        <div
          className={`group relative px-2.5 py-1.5 sm:px-3 sm:py-2 bg-gray-900/60 backdrop-blur-sm border border-gray-600/50 rounded text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wide hover:border-gray-500/60 transition-all duration-300 whitespace-nowrap ${
            isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-95'
          }`}
          style={{
            transitionDelay: isVisible ? `${delay}ms` : '0ms',
          }}
        >
          <span className="relative z-10">{title}</span>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col items-center mt-7 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div
        className={`relative mb-6 sm:mb-8 md:mb-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
      >
        <div className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gray-900/60 backdrop-blur-sm border border-gray-600/50 rounded text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide hover:border-gray-500/60 transition-all duration-300">
          MY SKILLS
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
          style={{ height: '100%', minHeight: '600px' }}
          preserveAspectRatio="xMidYMin meet"
        >
          <line
            x1="50%"
            y1="0"
            x2="16.66%"
            y2="100"
            stroke="rgba(156, 163, 175, 0.3)"
            strokeWidth="1"
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          />
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100"
            stroke="rgba(156, 163, 175, 0.3)"
            strokeWidth="1"
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          />
          <line
            x1="50%"
            y1="0"
            x2="83.33%"
            y2="100"
            stroke="rgba(156, 163, 175, 0.3)"
            strokeWidth="1"
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          />
        </svg>

        <div className="relative flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-3 lg:gap-4 pt-8 sm:pt-10 md:pt-12">
          <div className="flex-1 flex flex-col items-start w-full md:w-auto">
            <CategoryBox title="FRONTEND" delay={400} position="left" />
            <div className="flex flex-col gap-1.5 sm:gap-2 w-full">
              {frontendSkills.map((skill, index) => (
                <SkillTag
                  key={skill}
                  skill={skill}
                  delay={500 + index * 30}
                  index={index}
                  isVertical={true}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 sm:gap-5 w-full md:w-auto md:min-w-[180px] lg:min-w-[200px]">
            <div className="flex flex-col items-center">
              <CategoryBox title="DESIGN" delay={600} position="center" />
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center w-full">
                {designSkills.map((skill, index) => (
                  <SkillTag
                    key={skill}
                    skill={skill}
                    delay={700 + index * 30}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <CategoryBox title="TOOLS" delay={800} position="center" />
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center w-full">
                {toolsSkills.map((skill, index) => (
                  <SkillTag
                    key={skill}
                    skill={skill}
                    delay={900 + index * 30}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-end md:items-end max-md:items-start w-full md:w-auto">
            <CategoryBox title="BACKEND/SERVER" delay={500} position="right" />
            <div className="flex flex-col gap-1.5 sm:gap-2 w-full">
              {backendSkills.map((skill, index) => (
                <SkillTag
                  key={skill}
                  skill={skill}
                  delay={600 + index * 30}
                  index={index}
                  isVertical={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
// ============================================
// END OF OLD COMPONENT
// ============================================

// New Core Skills Section - Matching Image Layout
// Skills extracted from work experience
const leftBranchSkills = [
  ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NEXT JS'],
  ['TYPESCRIPT', 'NODE.JS', 'PYTHON', 'DJANGO'],
  ['TAILWIND CSS', 'RESPONSIVE DESIGN', 'MOBILE-FIRST'],
  ['UI/UX DESIGN', 'WIREFRAMES', 'PROTOTYPES', 'FIGMA'],
  ['GIT', 'GITHUB', 'CI/CD', 'DIGITAL OCEAN'],
  ['PERFORMANCE OPTIMIZE', 'CODE REVIEW', 'TESTING', 'DEBUGGING'],
];

const rightBranchSkills = [
  ['REST API', 'MICROSERVICES', 'AUTHENTICATION'],
  ['POSTGRESQL', 'SQL', 'DATABASE SCHEMA'],
  ['SCRUM', 'KANBAN', 'AGILE'],
  ['SECURITY', 'SCALABLE ARCHITECTURE'],
];

export default function TechStack() {
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
      className={`flex flex-col items-center mt-7 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Central MY SKILLS Box */}
      <div
        className={`relative mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
      >
        <div className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gray-900/90 backdrop-blur-sm border-2 border-blue-500 rounded-lg sm:rounded-xl text-white font-bold text-sm sm:text-base md:text-lg tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.4),0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6),0_0_40px_rgba(59,130,246,0.3)] hover:border-blue-400 transition-all duration-300">
          MY SKILLS
        </div>
      </div>

      {/* Mind Map Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* SVG Lines for Branches */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
          style={{ height: '100%', minHeight: '500px' }}
          preserveAspectRatio="xMidYMin meet"
        >
          {/* Left Branch Line */}
          <line
            x1="50%"
            y1="0"
            x2="20%"
            y2="80"
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="1.5"
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          />
          {/* Right Branch Line */}
          <line
            x1="50%"
            y1="0"
            x2="80%"
            y2="80"
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="1.5"
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          />
        </svg>

        {/* Skills Content */}
        <div className="relative flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-6 lg:gap-8 pt-12 sm:pt-16 md:pt-20">
          {/* Left Branch */}
          <div className="flex-1 flex flex-col gap-3 sm:gap-4">
            {leftBranchSkills.map((row, rowIndex) => (
              <div
                key={`left-${rowIndex}`}
                className="flex flex-wrap gap-2 sm:gap-2.5 justify-start"
              >
                {row.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-900/80 backdrop-blur-sm border border-blue-500 rounded-lg text-white text-[10px] xs:text-[11px] sm:text-xs font-medium uppercase tracking-wide shadow-[0_0_10px_rgba(59,130,246,0.3),0_0_20px_rgba(59,130,246,0.15)] hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                      isVisible
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-5 scale-95'
                    }`}
                    style={{
                      transitionDelay: isVisible
                        ? `${400 + rowIndex * 80 + skillIndex * 40}ms`
                        : '0ms',
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Right Branch */}
          <div className="flex-1 flex flex-col gap-3 sm:gap-4">
            {rightBranchSkills.map((row, rowIndex) => (
              <div
                key={`right-${rowIndex}`}
                className="flex flex-wrap gap-2 sm:gap-2.5 justify-end max-md:justify-start"
              >
                {row.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-900/80 backdrop-blur-sm border border-blue-500 rounded-lg text-white text-[10px] xs:text-[11px] sm:text-xs font-medium uppercase tracking-wide shadow-[0_0_10px_rgba(59,130,246,0.3),0_0_20px_rgba(59,130,246,0.15)] hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                      isVisible
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-5 scale-95'
                    }`}
                    style={{
                      transitionDelay: isVisible
                        ? `${500 + rowIndex * 80 + skillIndex * 40}ms`
                        : '0ms',
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

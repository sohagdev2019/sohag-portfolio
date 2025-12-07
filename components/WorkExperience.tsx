'use client';

import { useState, useEffect, useRef } from 'react';

export default function WorkExperience() {
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

  const experiences = [
    {
      period: '2023 - 2025',
      title: 'Frontend Software Developer',
      company: 'Ocean ThinkIT',
      type: 'Full-time',
      description:
        'I have primarily worked with startups, developing products from the ground up. I have worked on the the development of an AI-powered Interview Platform, building a job marketplace for dentists, and creating a system for managing promotional prize games.',
    },
    {
      period: '2021 - 2023',
      title: 'Junior Frontend Developer',
      company: 'Tech Solutions Inc.',
      type: 'Full-time',
      description:
        'Developed responsive web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality user interfaces. Implemented modern UI/UX designs and optimized application performance for better user experience.',
    },
    {
      period: '2020 - 2021',
      title: 'Web Developer Intern',
      company: 'Digital Agency',
      type: 'Internship',
      description:
        'Assisted in building and maintaining client websites using HTML, CSS, and JavaScript. Learned best practices in web development and collaborated with senior developers on various projects. Gained experience in version control and agile development methodologies.',
    },
  ];

  return (
    <div
      ref={sectionRef}
      id="work-experience"
      className={`flex flex-col w-full mt-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2
        className={`font-bold text-lg tracking-widest text-white uppercase mb-10 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        Work Experience
      </h2>

      <div className="flex flex-col w-full gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`group relative flex w-full gap-8 max-sm:gap-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
            style={{
              transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
            }}
          >
            {/* Timeline Line */}
            <div className="flex flex-col items-center max-sm:hidden">
              <div className="w-0.5 h-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300"></div>
              <div className="absolute top-0 w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 border-2 border-[#0a0a0a]"></div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Period Badge */}
              <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                <div className="px-4 py-1.5 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold whitespace-nowrap group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                  {exp.period}
                </div>
                <div className="hidden max-sm:block w-full h-px bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30"></div>
              </div>

              {/* Job Details Card */}
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 border border-gray-800/50 group-hover:border-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 -z-10"></div>

                {/* Title */}
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {exp.title}
                </h3>

                {/* Company and Type */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <p className="text-gray-300 font-medium">{exp.company}</p>
                  <span className="text-gray-600">•</span>
                  <p className="text-gray-400">{exp.type}</p>
                  <span className="max-sm:hidden text-gray-600 ml-2">•</span>
                  <p className="max-sm:hidden text-gray-400">{exp.period}</p>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {exp.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/0 to-transparent rounded-bl-full group-hover:from-blue-500/10 transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

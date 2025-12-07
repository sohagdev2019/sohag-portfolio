'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Projects() {
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
        id="projects"
        className={`font-bold text-lg tracking-widest text-white uppercase mb-10 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        Projects
      </h2>
      <div className="flex flex-col w-full">
        <div
          className={`flex items-start gap-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="rounded-xl w-[640px] max-w-full border border-gray-400/50 p-5 flex flex-col gap-5 bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/10 group">
            <Link
              aria-label="See more about the Tribe app"
              href="/projects/tribe"
              className="overflow-hidden rounded-lg"
            >
              <div className="w-full h-[380px] bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gray-700 transform group-hover:scale-105">
                <div className="text-gray-500 text-sm">Project Screenshot</div>
              </div>
            </Link>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-white text-xl tracking-widest transition-colors duration-300 group-hover:text-blue-400">
                TRIBE
              </p>
              <p className="text-gray-400 leading-relaxed">
                <span className="text-white font-medium">TRIBE</span> is a community app
                inspired by{' '}
                <Link
                  target="_blank"
                  href="https://www.skool.com/"
                  className="text-white hover:text-blue-400 hover:underline transition-colors duration-300"
                >
                  Skool
                </Link>
                , where users can create or join communities, share posts, like
                them, comment on them, and chat in real time with other users.
              </p>
              <div className="grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5">
                {[
                  'React',
                  'TypeScript',
                  'Tailwind',
                  'Shadcn',
                  'Cypress',
                  'Pocketbase',
                  'Tanstack Router',
                  'Tanstack Query',
                ].map((tech, index) => (
                  <div
                    key={tech}
                    className={`flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300 transition-all duration-300 hover:bg-blue-600/30 hover:scale-105 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-5'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${300 + index * 50}ms` : '0ms',
                    }}
                  >
                    <p className="text-xs whitespace-nowrap font-medium">{tech}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 w-full mt-8 max-md:flex-col">
                <Link
                  target="_blank"
                  href="https://tribe-community-app.vercel.app/"
                  className="w-1/3 bg-gray-400/10 uppercase text-xs transition-all hover:bg-blue-600/20 hover:text-blue-400 rounded-full font-bold text-white flex items-center justify-center px-4 py-2 gap-2 max-md:w-full transform hover:scale-105 active:scale-95"
                >
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
                    className="transition-transform duration-300 group-hover:rotate-12"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M3.6 9h16.8"></path>
                    <path d="M3.6 15h16.8"></path>
                    <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                    <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                  </svg>
                  Live demo
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/stefvndev/tribe-community-app"
                  className="w-1/3 bg-gray-400/10 uppercase text-xs transition-all hover:bg-gray-700/20 hover:text-white rounded-full font-bold text-white flex items-center justify-center px-4 py-2 gap-2 max-md:w-full transform hover:scale-105 active:scale-95"
                >
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
                    className="transition-transform duration-300 group-hover:rotate-12"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                  Source code
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/watch?v=gKtcJ9Fn6KU"
                  className="w-1/3 bg-gray-400/10 uppercase text-xs transition-all hover:bg-red-600/20 hover:text-red-400 rounded-full font-bold text-white flex items-center justify-center px-4 py-2 gap-2 max-md:w-full transform hover:scale-105 active:scale-95"
                >
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
                    className="transition-transform duration-300 group-hover:rotate-12"
                  >
                    <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
                    <path d="M10 9l5 3l-5 3z"></path>
                  </svg>
                  Watch video
                </Link>
              </div>
            </div>
          </div>
          <Link
            aria-label="See more about the Tribe app"
            className={`flex flex-col p-2 max-sm:hidden rounded-full bg-gray-400/20 text-white font-medium text-sm hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
            style={{
              transitionDelay: isVisible ? '400ms' : '0ms',
            }}
            href="/projects/tribe"
          >
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
            >
              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
              <path d="M11 13l9 -9"></path>
              <path d="M15 4h5v5"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

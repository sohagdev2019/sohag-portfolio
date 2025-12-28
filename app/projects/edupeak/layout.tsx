import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EduPeak LMS - Learning Management System',
  description: 'EduPeak LMS is a comprehensive Learning Management System with 200+ features including course management, analytics, payments, gamification, and more. Built with Next.js 15, React 19, TypeScript, PostgreSQL, and modern technologies.',
  keywords: [
    'EduPeak',
    'LMS',
    'Learning Management System',
    'Online Education',
    'Course Management',
    'Next.js',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Stripe',
    'Educational Technology',
    'E-Learning Platform',
    'Course Analytics',
    'Student Management',
    'Online Learning'
  ],
  openGraph: {
    title: 'EduPeak LMS - Learning Management System | Sohag Hossain',
    description: 'A comprehensive Learning Management System with 200+ features designed to deliver an exceptional educational experience. From course creation to analytics, payments to gamification.',
    url: 'https://www.sohagdev.com/projects/edupeak',
    siteName: 'Sohag Hossain - Portfolio',
    images: [
      {
        url: '/images/hero_section.png',
        width: 1200,
        height: 630,
        alt: 'EduPeak LMS - Learning Management System Dashboard',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduPeak LMS - Learning Management System',
    description: 'A comprehensive Learning Management System with 200+ features designed to deliver an exceptional educational experience.',
    images: ['/images/hero_section.png'],
    creator: '@sohagmia360',
  },
  alternates: {
    canonical: 'https://www.sohagdev.com/projects/edupeak',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function EduPeakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "EduPeak LMS - Learning Management System",
    "description": "A comprehensive Learning Management System with 200+ features designed to deliver an exceptional educational experience.",
    "image": "https://www.sohagdev.com/images/hero_section.png",
    "author": {
      "@type": "Person",
      "name": "Sohag Hossain",
      "url": "https://www.sohagdev.com"
    },
    "publisher": {
      "@type": "Person",
      "name": "Sohag Hossain"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.sohagdev.com/projects/edupeak"
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.sohagdev.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.sohagdev.com/#projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "EduPeak LMS",
        "item": "https://www.sohagdev.com/projects/edupeak"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}


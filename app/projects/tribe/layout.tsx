import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TRIBE - Community App',
  description: 'TRIBE is a community-driven app that lets users create and join communities, share posts, engage with likes and comments, and chat in real time. Built with React, TypeScript, Tailwind CSS, PocketBase, and TanStack Router.',
  keywords: [
    'TRIBE',
    'Community App',
    'Social Network',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'PocketBase',
    'TanStack Router',
    'Real-time Chat',
    'Community Platform',
    'Social Media App',
    'Community Building',
    'Group Chat',
    'Social Engagement'
  ],
  openGraph: {
    title: 'TRIBE - Community App | Sohag Hossain',
    description: 'A community-driven app that lets users create and join communities, share posts, engage with likes and comments, and chat in real time.',
    url: 'https://www.sohagdev.com/projects/tribe',
    siteName: 'Sohag Hossain - Portfolio',
    images: [
      {
        url: '/images/hero_section.png',
        width: 1200,
        height: 630,
        alt: 'TRIBE - Community App Interface',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRIBE - Community App',
    description: 'A community-driven app that lets users create and join communities, share posts, engage with likes and comments, and chat in real time.',
    images: ['/images/hero_section.png'],
    creator: '@sohagmia360',
  },
  alternates: {
    canonical: 'https://www.sohagdev.com/projects/tribe',
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

export default function TribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "TRIBE - Community App",
    "description": "A community-driven app that lets users create and join communities, share posts, engage with likes and comments, and chat in real time.",
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
      "@id": "https://www.sohagdev.com/projects/tribe"
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
        "name": "TRIBE Community App",
        "item": "https://www.sohagdev.com/projects/tribe"
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


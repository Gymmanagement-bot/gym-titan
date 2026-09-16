export const metadata = {
  title: 'How It Works - 4 Simple Steps to Get Started | Gym Titan',
  description: 'Learn how to get started with Gym Titan in 4 easy steps. From signup to analytics, discover how our gym management software streamlines your operations. Free setup assistance included.',
  keywords: [
    'how gym titan works',
    'gym software tutorial',
    'get started with gym management',
    'gym software setup',
    'gym onboarding process',
    'gym management steps',
    'how to use gym software',
    'gym software guide',
    'gym management workflow',
    'gym setup process',
    'member management tutorial',
    'gym software training',
    'gym titan tutorial',
    'fitness software guide',
  ],
  openGraph: {
    title: 'How Gym Titan Works - 4 Simple Steps',
    description: 'Get your gym up and running in 4 simple steps. From setup to advanced analytics.',
    url: 'https://gymtitan.codeverza.com/how-it-works',
    type: 'website',
    images: [
      {
        url: '/how-it-works/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'How Gym Titan Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Gym Titan Works - Simple 4-Step Process',
    description: 'From signup to analytics in 4 easy steps',
    images: ['/how-it-works/opengraph-image'],
  },
  alternates: {
    canonical: 'https://gymtitan.codeverza.com/how-it-works',
  },
};

export default function HowItWorksLayout({ children }) {
  return children;
}

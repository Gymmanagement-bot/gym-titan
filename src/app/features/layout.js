export const metadata = {
  title: 'Features - Comprehensive Gym Management Tools | Gym Titan',
  description: 'Discover 12+ powerful features of Gym Titan including member management, payment tracking, attendance, reports, WhatsApp integration, and more. Complete gym management solution.',
  keywords: [
    'gym features',
    'member management software',
    'gym payment tracking',
    'attendance system',
    'gym reports and analytics',
    'WhatsApp integration gym',
    'role-based access control',
    'gym billing software',
    'membership package management',
    'staff management gym',
    'biometric attendance gym',
    'automated reminders gym',
    'gym mobile app',
    'expense management gym',
    'gym data security',
  ],
  openGraph: {
    title: 'Gym Management Features | Gym Titan',
    description: 'Complete suite of 12+ powerful gym management features for your fitness business. Member management, payments, reports, and more.',
    url: 'https://gymtitan.codeverza.com/features',
    type: 'website',
    images: [
      {
        url: '/features/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Gym Titan Features',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Management Features | Gym Titan',
    description: 'Complete suite of 12+ gym management features',
    images: ['/features/opengraph-image'],
  },
  alternates: {
    canonical: 'https://gymtitan.codeverza.com/features',
  },
};

export default function FeaturesLayout({ children }) {
  return children;
}

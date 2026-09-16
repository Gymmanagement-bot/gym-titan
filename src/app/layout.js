import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://gymtitan.codeverza.com'),
  title: {
    default: 'Gym Titan - Complete Gym Management Software Solution',
    template: '%s | Gym Titan'
  },
  description: 'Complete gym management software with role-based access control for gym owners, managers, trainers and members. Manage memberships, payments, schedules and operations seamlessly.',
  keywords: [
    'gym management software',
    'fitness center management',
    'gym management system',
    'gym membership software',
    'fitness management solution',
    'gym billing software',
    'gym CRM',
    'fitness club management',
    'gym admin software',
    'workout management system',
    'gym payment tracking',
    'member management software',
    'gym scheduling software',
    'fitness business software',
    'gym operations management',
    'codeverza',
    'pakistan gym software',
  ],
  authors: [{ name: 'Codeverza', url: 'https://codeverza.com' }],
  creator: 'Codeverza',
  publisher: 'Gym Titan',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gymtitan.codeverza.com',
    siteName: 'Gym Titan',
    title: 'Gym Titan - Complete Gym Management Software Solution',
    description: 'Complete gym management software with role-based access control for gym owners, managers, trainers and members. Manage memberships, payments, schedules and operations seamlessly.',
    images: [
      {
        url: '/img/gym-logo.png',
        width: 1200,
        height: 630,
        alt: 'Gym Titan Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Titan - Complete Gym Management Software Solution',
    description: 'Complete gym management software with role-based access control for gym owners, managers, trainers and members.',
    images: ['/img/gym-logo.png'],
    creator: '@codeverza',
  },
  verification: {
    google: 'googlebce28a0a9f520a8c',
  },
  alternates: {
    canonical: 'https://gymtitan.codeverza.com',
  },
  category: 'technology',
  classification: 'Business Software',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <head>
        <link rel="icon" href="/img/gym-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/gym-logo.png" />
        <meta name="theme-color" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${poppins.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}

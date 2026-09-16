export const metadata = {
  title: 'About Us - Story Behind Gym Titan | Best Gym Management Software',
  description: 'Learn about Gym Titan, the complete gym management software trusted by 100+ gyms. Built by gym owners for gym owners. Empowering fitness businesses across Pakistan with intelligent management solutions.',
  keywords: [
    'about gym titan',
    'gym management software company',
    'who created gym titan',
    'gym software developers',
    'codeverza gym software',
    'pakistan gym software',
    'fitness management solution',
    'gym business automation',
    'gym owner tools',
    'fitness center management',
    'gym titan story',
    'why gym titan',
    'gym management benefits',
    'fitness business growth',
  ],
  openGraph: {
    title: 'About Gym Titan - Empowering Gym Owners',
    description: 'Trusted by 100+ gyms. Built by gym owners for gym owners. Learn our story and why we are different.',
    url: 'https://gymtitan.codeverza.com/about',
    type: 'website',
    images: [
      {
        url: '/about/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'About Gym Titan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Gym Titan - Complete Gym Management Solution',
    description: 'Trusted by 100+ gyms. Learn our story.',
    images: ['/about/opengraph-image'],
  },
  alternates: {
    canonical: 'https://gymtitan.codeverza.com/about',
  },
};

export default function AboutLayout({ children }) {
  return children;
}

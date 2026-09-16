export const metadata = {
  title: 'Pricing Plans - Affordable Gym Management Software | Gym Titan',
  description: 'Choose the perfect gym management plan for your business. Plans start from Rs1,499/month. 7-days free trial. No credit card required. Compare features and pricing.',
  keywords: [
    'gym software pricing',
    'gym management cost',
    'gym titan pricing',
    'affordable gym software',
    'gym software plans',
    'fitness software pricing',
    'gym management subscription',
    'gym software monthly cost',
    'gym software yearly plans',
    'cheap gym management software',
    'gym software free trial',
    'gym management pricing comparison',
    'fitness center software cost',
    'gym billing software price',
  ],
  openGraph: {
    title: 'Gym Titan Pricing - Plans Starting from Rs1,499/month',
    description: 'Affordable gym management software. Free 7-days trial. Compare plans and choose the best fit for your gym.',
    url: 'https://gymtitan.codeverza.com/pricing',
    type: 'website',
    images: [
      {
        url: '/pricing/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Gym Titan Pricing Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Titan Pricing - Affordable Plans',
    description: 'Plans from Rs1,499/month. 7-days free trial included.',
    images: ['/pricing/opengraph-image'],
  },
  alternates: {
    canonical: 'https://gymtitan.codeverza.com/pricing',
  },
};

export default function PricingLayout({ children }) {
  return children;
}

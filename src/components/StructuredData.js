/**
 * Structured Data (JSON-LD) Component for SEO
 * Helps search engines understand the content better
 */

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gym Titan',
    description: 'Complete gym management software solution',
    url: 'https://gymtitan.codeverza.com',
    logo: 'https://gymtitan.codeverza.com/img/gym-logo.png',
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Organization',
        name: 'Codeverza',
        url: 'https://codeverza.com',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressLocality: 'Pakistan',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-325-1507557',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Urdu'],
    },
    sameAs: [
      'https://www.facebook.com/share/1GaLoS57GL/',
      'https://www.instagram.com/codeverza',
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Gym Titan',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      priceValidUntil: '2025-12-31',
      description: '7-day free trial',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: [
      'Member Management',
      'Payment Tracking',
      'Role-Based Access Control',
      'Trainer Scheduling',
      'Attendance Tracking',
      'Reporting & Analytics',
      'Email Notifications',
      'Multi-Location Support',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Gym Titan',
    url: 'https://gymtitan.codeverza.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://gymtitan.codeverza.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://gymtitan.codeverza.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Features',
        item: 'https://gymtitan.codeverza.com/features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pricing',
        item: 'https://gymtitan.codeverza.com/pricing',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://gymtitan.codeverza.com/contact',
      },
    ],
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Gym Titan Management Software',
    description: 'Complete gym management software with role-based access control',
    brand: {
      '@type': 'Brand',
      name: 'Gym Titan',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '0',
      highPrice: '99',
      offerCount: '3',
      offers: [
        {
          '@type': 'Offer',
          name: 'Free Trial',
          price: '0',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          name: 'Basic Plan',
          price: '49',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          name: 'Pro Plan',
          price: '99',
          priceCurrency: 'USD',
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Gym Titan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gym Titan is a complete gym management software solution with role-based access control for gym owners, managers, trainers, and members. It helps manage memberships, payments, schedules, and operations seamlessly.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does Gym Titan cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gym Titan offers a 7-day free trial. Paid plans start from $49/month for the Basic plan and $99/month for the Pro plan with advanced features.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Gym Titan suitable for small gyms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Gym Titan is designed to scale from small gyms to large fitness chains. Our flexible pricing and features make it perfect for businesses of all sizes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Gym Titan support multiple locations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Gym Titan supports multi-location management, allowing you to manage multiple gym branches from a single dashboard.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

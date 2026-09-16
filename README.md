# 🏋️ Gym Titan - Complete Gym Management Solution

A modern, feature-rich gym management platform built with Next.js that provides role-based access control for gym owners, managers, trainers, and members.

## ✨ Features

- 💪 Complete gym management dashboard
- 👥 Role-based access control (Owner, Manager, Trainer, Member)
- 💰 Payment tracking and membership management
- 📊 Analytics and reporting
- 📧 Newsletter subscription system with Firebase integration
- 📱 Responsive design with modern UI
- 🔐 Secure authentication
- 💌 Automated email notifications

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase account
- SMTP email service (Gmail, SendGrid, etc.)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd gym-titan
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure environment variables:

Create a `.env.local` file in the root directory:

```env
# Firebase Admin SDK Configuration
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Private-Key-Here\n-----END PRIVATE KEY-----\n"

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
ADMIN_EMAIL=admin@yourdomain.com

# Application URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Go to **Project Settings** > **Service Accounts**
4. Click **Generate New Private Key**
5. Copy the credentials to your `.env.local` file
6. Enable Firestore Database in Firebase Console

### Email Configuration

For Gmail SMTP:
1. Enable 2-Factor Authentication in your Google Account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password in `SMTP_PASS` variable

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📧 Newsletter Feature

The newsletter system automatically:
- ✅ Saves subscriber emails to Firebase Firestore
- ✅ Sends welcome emails to new subscribers
- ✅ Prevents duplicate subscriptions
- ✅ Notifies admin of new subscriptions
- ✅ Shows beautiful popup messages for all states
- ✅ Tracks subscription date, IP address, and user agent

### Newsletter Data Structure

Firebase Collection: `newsletter`

```javascript
{
  email: "user@example.com",
  subscribedAt: "2024-01-15T10:30:00.000Z",
  subscribedTimestamp: 1705318200000,
  status: "active",
  source: "website_footer",
  ipAddress: "192.168.1.1",
  userAgent: "Mozilla/5.0..."
}
```

## 🎨 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** CSS Modules + Tailwind CSS
- **Database:** Firebase Firestore
- **Email:** Nodemailer
- **Authentication:** Firebase Admin SDK
- **Deployment:** Vercel-ready

## 📁 Project Structure

```
gym-titan/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   └── newsletter/      # Newsletter API endpoint
│   │   ├── about/
│   │   ├── contact/
│   │   ├── features/
│   │   ├── how-it-works/
│   │   ├── pricing/
│   │   └── page.js              # Home page
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js            # Newsletter subscription form
│   │   ├── HeroSection.js
│   │   └── ...
│   └── lib/
│       ├── firebaseAdmin.js     # Firebase Admin SDK
│       └── rateLimiter.js
├── public/
│   └── img/
├── .env.local                   # Environment variables
└── package.json
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🌟 Key Components

### Newsletter Subscription
- **Location:** Footer component
- **API:** `/api/newsletter`
- **Features:** 
  - Real-time validation
  - Duplicate detection
  - Beautiful popup notifications
  - Firebase integration
  - Email notifications

### Role-Based Features
- **Owner:** Full system access
- **Manager:** Member and payment management
- **Trainer:** Member profiles and schedules
- **Member:** Personal dashboard and payments

## 🚢 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to add all environment variables from `.env.local` to your deployment platform.

## 📞 Support

For support or queries:
- 📧 Email: support@gymtitan.com
- 💬 WhatsApp: [+92 325 1507557](https://wa.me/923251507557)
- 🌐 Website: [www.gymtitan.com](https://www.gymtitan.com)

## 👨‍💻 Developed By

**Codeverza**
- Website: [codeverza.com](https://codeverza.com)
- Instagram: [@codeverza](https://www.instagram.com/codeverza)

## 📄 License

© 2024 Gym Titan. All rights reserved.

---

Made with ❤️ in Pakistan 🇵🇰

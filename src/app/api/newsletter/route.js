import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting storage (in production, use Redis or database)
const subscriptions = new Map();

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Check if already subscribed (check last 24 hours)
    const now = Date.now();
    const lastSubscription = subscriptions.get(email);
    
    if (lastSubscription && (now - lastSubscription) < 24 * 60 * 60 * 1000) {
      return NextResponse.json(
        { 
          success: false, 
          alreadySubscribed: true,
          message: '🎉 You\'re already subscribed! Thank you for your continued interest in Gym Titan updates.' 
        },
        { status: 200 }
      );
    }

    // Store subscription timestamp
    subscriptions.set(email, now);

    // Email to subscriber (Welcome email)
    const subscriberEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
            padding: 40px 30px;
            text-align: center;
          }
          .logo {
            font-size: 32px;
            font-weight: 700;
            color: white;
            margin-bottom: 10px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          }
          .header-subtitle {
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
          }
          .content {
            padding: 40px 30px;
            color: #e5e7eb;
          }
          .welcome-title {
            font-size: 28px;
            font-weight: 700;
            background: linear-gradient(135deg, #f97316, #fb923c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
            text-align: center;
          }
          .message {
            font-size: 16px;
            line-height: 1.8;
            color: #d1d5db;
            margin-bottom: 30px;
          }
          .benefits {
            background: rgba(249, 115, 22, 0.1);
            border: 1px solid rgba(249, 115, 22, 0.3);
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
          }
          .benefit-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;
          }
          .benefit-icon {
            font-size: 24px;
            margin-right: 15px;
          }
          .benefit-text {
            color: #d1d5db;
            line-height: 1.6;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #ea580c, #f97316);
            color: white;
            padding: 16px 40px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            box-shadow: 0 10px 30px rgba(249, 115, 22, 0.4);
            margin: 20px 0;
          }
          .footer {
            background: rgba(255, 255, 255, 0.03);
            padding: 30px;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          .footer-text {
            color: #9ca3af;
            font-size: 14px;
            line-height: 1.6;
          }
          .social-links {
            margin: 20px 0;
          }
          .social-link {
            display: inline-block;
            margin: 0 10px;
            color: #9ca3af;
            text-decoration: none;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">🏋️ GYM TITAN</div>
            <div class="header-subtitle">Complete Gym Management Solution</div>
          </div>
          
          <div class="content">
            <div class="welcome-title">🎉 Welcome to Gym Titan!</div>
            
            <p class="message">
              Thank you for subscribing to our newsletter! We're thrilled to have you join our community of gym owners and fitness enthusiasts.
            </p>
            
            <div class="benefits">
              <div class="benefit-item">
                <span class="benefit-icon">✨</span>
                <div class="benefit-text">
                  <strong>Exclusive Updates:</strong> Be the first to know about new features and improvements
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">💡</span>
                <div class="benefit-text">
                  <strong>Tips & Tricks:</strong> Get expert advice on managing your gym efficiently
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">🎁</span>
                <div class="benefit-text">
                  <strong>Special Offers:</strong> Receive exclusive discounts and early bird deals
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">📊</span>
                <div class="benefit-text">
                  <strong>Industry Insights:</strong> Stay updated with fitness industry trends
                </div>
              </div>
            </div>
            
            <p class="message">
              Ready to transform your gym management? Start your free 14-day trial today!
            </p>
            
            <center>
              <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/contact" class="cta-button">
                Start Free Trial →
              </a>
            </center>
            
            <p class="message" style="margin-top: 30px; font-size: 14px; color: #9ca3af;">
              Have questions? Our support team is always here to help. Just reply to this email!
            </p>
          </div>
          
          <div class="footer">
            <p class="footer-text">
              <strong>Gym Titan</strong><br>
              Complete Gym Management Solution<br>
              Making gym operations effortless
            </p>
            
            <div class="social-links">
              <a href="https://www.facebook.com/share/1GaLoS57GL/" class="social-link">Facebook</a>
              <a href="https://www.instagram.com/codeverza" class="social-link">Instagram</a>
              <a href="https://wa.me/923251507557" class="social-link">WhatsApp</a>
            </div>
            
            <p class="footer-text" style="margin-top: 20px; font-size: 12px;">
              You received this email because you subscribed to Gym Titan newsletter.<br>
              © ${new Date().getFullYear()} Gym Titan. All rights reserved.<br>
              Powered by <strong>Codeverza</strong>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email to admin
    const adminEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; background: #f3f4f6; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #ea580c, #f97316); color: white; padding: 20px; border-radius: 8px; margin-bottom: 25px; }
          .title { font-size: 24px; font-weight: bold; margin: 0; }
          .subtitle { font-size: 14px; opacity: 0.9; margin-top: 5px; }
          .info-box { background: #f9fafb; border-left: 4px solid #f97316; padding: 15px; margin: 20px 0; border-radius: 4px; }
          .label { font-weight: 600; color: #374151; margin-bottom: 5px; }
          .value { color: #1f2937; font-size: 16px; }
          .timestamp { color: #6b7280; font-size: 14px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="title">📧 New Newsletter Subscription</div>
            <div class="subtitle">Gym Titan Newsletter</div>
          </div>
          
          <div class="info-box">
            <div class="label">Email Address</div>
            <div class="value">${email}</div>
          </div>
          
          <div class="info-box">
            <div class="label">Status</div>
            <div class="value">✅ Successfully Subscribed</div>
          </div>
          
          <div class="timestamp">
            Subscribed on: ${new Date().toLocaleString('en-US', { 
              dateStyle: 'full', 
              timeStyle: 'long',
              timeZone: 'Asia/Karachi'
            })}
          </div>
        </div>
      </body>
      </html>
    `;

    // Send emails
    await Promise.all([
      transporter.sendMail({
        from: `"Gym Titan" <${process.env.FROM_EMAIL}>`,
        to: email,
        subject: '🎉 Welcome to Gym Titan Newsletter!',
        html: subscriberEmailHTML,
      }),
      transporter.sendMail({
        from: `"Gym Titan Notifications" <${process.env.FROM_EMAIL}>`,
        to: process.env.ADMIN_EMAIL,
        subject: '📧 New Newsletter Subscription - Gym Titan',
        html: adminEmailHTML,
      }),
    ]);

    return NextResponse.json(
      { 
        success: true, 
        message: '🎉 Successfully subscribed! Check your email for a welcome message.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from '@/lib/firebaseAdmin';

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

    // Check if already subscribed in Firebase
    const newsletterRef = db.collection('newsletter');
    const existingSubscription = await newsletterRef.where('email', '==', email).get();
    
    if (!existingSubscription.empty) {
      const subscriberData = existingSubscription.docs[0].data();
      return NextResponse.json(
        { 
          success: false, 
          alreadySubscribed: true,
          message: `✨ You're already subscribed! Thank you for your continued interest in Gym Titan updates. You joined us on ${new Date(subscriberData.subscribedAt).toLocaleDateString()}.` 
        },
        { status: 200 }
      );
    }

    // Create timestamp
    const now = new Date();
    const subscriptionData = {
      email: email.toLowerCase().trim(),
      subscribedAt: now.toISOString(),
      subscribedTimestamp: now.getTime(),
      status: 'active',
      source: 'website_footer',
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    // Save to Firebase
    await newsletterRef.add(subscriptionData);

    // Email to subscriber (Welcome email)
    const subscriberEmailHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Welcome to Gym Titan</title>
        <!--[if mso]>
        <style type="text/css">
          body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }
        </style>
        <![endif]-->
      </head>
      <body style="margin: 0; padding: 0; background-color: #0a0a0f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        
        <!-- Main Container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #0a0a0f;">
          <tr>
            <td style="padding: 40px 20px;">
              
              <!-- Content Wrapper -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; max-width: 600px; background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #ea580c 0%, #f97316 100%); padding: 50px 40px; text-align: center;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="text-align: center;">
                          <div style="font-size: 48px; margin-bottom: 15px;">🏋️‍♂️</div>
                          <h1 style="margin: 0; font-size: 36px; font-weight: 800; color: #ffffff; letter-spacing: 1px; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);">GYM TITAN</h1>
                          <p style="margin: 10px 0 0 0; font-size: 16px; color: rgba(255, 255, 255, 0.95); font-weight: 500;">Complete Gym Management Solution</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Main Content -->
                <tr>
                  <td style="padding: 50px 40px; background-color: #1a1a2e;">
                    
                    <!-- Welcome Title -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="text-align: center; padding-bottom: 30px;">
                          <h2 style="margin: 0; color: #fff; font-size: 32px; font-weight: 700; background: linear-gradient(135deg, #f97316, #fb923c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                            🎉 Welcome to Gym Titan!
                          </h2>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Welcome Message -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="color: #e5e7eb; font-size: 17px; line-height: 1.8; padding-bottom: 30px; text-align: center;">
                          Thank you for subscribing to our newsletter! We're thrilled to have you join our community of gym owners and fitness enthusiasts. 💪
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Benefits Box -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: rgba(249, 115, 22, 0.08); border: 2px solid rgba(249, 115, 22, 0.3); border-radius: 16px; margin: 30px 0;">
                      <tr>
                        <td style="padding: 30px;">
                          
                          <!-- Benefit 1 -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px;">
                            <tr>
                              <td width="50" style="vertical-align: top;">
                                <div style="font-size: 32px; line-height: 1;">✨</div>
                              </td>
                              <td style="color: #e5e7eb; font-size: 16px; line-height: 1.6; vertical-align: top;">
                                <strong style="color: #ffffff; display: block; margin-bottom: 5px;">Exclusive Updates</strong>
                                Be the first to know about new features and improvements
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Benefit 2 -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px;">
                            <tr>
                              <td width="50" style="vertical-align: top;">
                                <div style="font-size: 32px; line-height: 1;">💡</div>
                              </td>
                              <td style="color: #e5e7eb; font-size: 16px; line-height: 1.6; vertical-align: top;">
                                <strong style="color: #ffffff; display: block; margin-bottom: 5px;">Tips & Tricks</strong>
                                Get expert advice on managing your gym efficiently
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Benefit 3 -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 20px;">
                            <tr>
                              <td width="50" style="vertical-align: top;">
                                <div style="font-size: 32px; line-height: 1;">🎁</div>
                              </td>
                              <td style="color: #e5e7eb; font-size: 16px; line-height: 1.6; vertical-align: top;">
                                <strong style="color: #ffffff; display: block; margin-bottom: 5px;">Special Offers</strong>
                                Receive exclusive discounts and early bird deals
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Benefit 4 -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td width="50" style="vertical-align: top;">
                                <div style="font-size: 32px; line-height: 1;">📊</div>
                              </td>
                              <td style="color: #e5e7eb; font-size: 16px; line-height: 1.6; vertical-align: top;">
                                <strong style="color: #ffffff; display: block; margin-bottom: 5px;">Industry Insights</strong>
                                Stay updated with fitness industry trends
                              </td>
                            </tr>
                          </table>
                          
                        </td>
                      </tr>
                    </table>
                    
                    <!-- CTA Message -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="color: #e5e7eb; font-size: 18px; line-height: 1.8; padding: 30px 0 20px 0; text-align: center; font-weight: 500;">
                          Ready to transform your gym management?<br>Start your free 14-day trial today! 🚀
                        </td>
                      </tr>
                    </table>
                    
                    <!-- CTA Button -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="text-align: center; padding: 20px 0;">
                          <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/contact" style="display: inline-block; background: linear-gradient(135deg, #ea580c, #f97316); color: #ffffff; text-decoration: none; padding: 18px 50px; border-radius: 12px; font-weight: 700; font-size: 18px; box-shadow: 0 10px 30px rgba(249, 115, 22, 0.4); transition: all 0.3s;">
                            Start Free Trial →
                          </a>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Support Message -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="color: #9ca3af; font-size: 15px; line-height: 1.6; padding-top: 40px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1); margin-top: 40px;">
                          💬 Have questions? Our support team is always here to help.<br>Just reply to this email!
                        </td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background: rgba(0, 0, 0, 0.3); padding: 40px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                    
                    <!-- Company Info -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="color: #d1d5db; font-size: 16px; line-height: 1.8; text-align: center;">
                          <strong style="color: #ffffff; font-size: 18px;">Gym Titan</strong><br>
                          Complete Gym Management Solution<br>
                          <span style="color: #9ca3af; font-size: 14px;">Making gym operations effortless</span>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Social Links -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 30px 0; text-align: center;">
                          <a href="https://www.instagram.com/codeverza" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; color: #e5e7eb; text-decoration: none; font-size: 14px; transition: all 0.3s;">📸 Instagram</a>
                          <a href="https://wa.me/923251507557" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; color: #e5e7eb; text-decoration: none; font-size: 14px; transition: all 0.3s;">💬 WhatsApp</a>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Legal Text -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="color: #fff; font-size: 13px; line-height: 1.8; text-align: center; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                          You received this email because you subscribed to Gym Titan newsletter.<br>
                          © ${new Date().getFullYear()} Gym Titan. All rights reserved.<br>
                          <span style="color: #fff;">Powered by <strong style="color: #f97316;"> <a href="https://www.codeverza.com" style="color: #ff8800;">Codeverza </a></strong></span>
                        </td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
                
              </table>
              
            </td>
          </tr>
        </table>
        
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
          .value { color: #1f2937; font-size: 16px; word-break: break-all; }
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
            <div class="value">✅ Successfully Subscribed & Saved to Firebase</div>
          </div>

          <div class="info-box">
            <div class="label">Source</div>
            <div class="value">Website Footer</div>
          </div>
          
          <div class="info-box">
            <div class="label">IP Address</div>
            <div class="value">${subscriptionData.ipAddress}</div>
          </div>
          
          <div class="timestamp">
            Subscribed on: ${now.toLocaleString('en-US', { 
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
        message: '🎉 Thank you for subscribing! Check your inbox for a special welcome message with exclusive updates and tips.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    // Log detailed error for debugging
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Oops! Something went wrong on our end. Please try again in a moment.' 
      },
      { status: 500 }
    );
  }
}

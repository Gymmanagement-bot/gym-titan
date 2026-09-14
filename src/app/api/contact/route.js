import nodemailer from 'nodemailer';
import { checkEmailRateLimit, checkIPRateLimit, recordSuccessfulSubmission } from '@/lib/rateLimiter.js';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const subjectLabels = {
  general: 'General Inquiry',
  sales: 'Sales & Pricing',
  support: 'Technical Support',
  demo: 'Request a Demo',
  partnership: 'Partnership',
};

// ─── Email sent to the user (confirmation) ───────────────────────────────────
function userEmailHTML(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>We received your message – Gym Titan</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1a1a2e,#0f0f1e);border:1px solid rgba(249,115,22,0.3);border-radius:16px;overflow:hidden;max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#ea580c,#f97316);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#fff;font-size:28px;font-weight:800;letter-spacing:-0.5px;">
                🏋️ GYM TITAN
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;letter-spacing:2px;text-transform:uppercase;">
                Message Received
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 24px;color:#e5e7eb;font-size:16px;line-height:1.6;">
                Hi <strong style="color:#fb923c;">${data.name}</strong>,
              </p>
              <p style="margin:0 0 24px;color:#9ca3af;font-size:15px;line-height:1.7;">
                Thank you for reaching out to us. We have successfully received your message and our team will get back to you <strong style="color:#fff;">as soon as possible</strong> — usually within 24 hours.
              </p>

              <!-- Summary Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.05);border:1px solid rgba(249,115,22,0.2);border-radius:12px;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 6px;color:#fb923c;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Your Submission Summary</p>
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:6px 0;width:100px;">Name</td>
                        <td style="color:#e5e7eb;font-size:13px;padding:6px 0;font-weight:600;">${data.name}</td>
                      </tr>
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:6px 0;">Email</td>
                        <td style="color:#e5e7eb;font-size:13px;padding:6px 0;font-weight:600;">${data.email}</td>
                      </tr>
                      ${data.phone ? `
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:6px 0;">Phone</td>
                        <td style="color:#e5e7eb;font-size:13px;padding:6px 0;font-weight:600;">${data.phone}</td>
                      </tr>` : ''}
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:6px 0;">Subject</td>
                        <td style="color:#e5e7eb;font-size:13px;padding:6px 0;font-weight:600;">${subjectLabels[data.subject] || data.subject}</td>
                      </tr>
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:6px 0;vertical-align:top;">Message</td>
                        <td style="color:#e5e7eb;font-size:13px;padding:6px 0;line-height:1.6;">${data.message.replace(/\n/g, '<br/>')}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 32px;color:#9ca3af;font-size:14px;line-height:1.7;">
                In the meantime, feel free to explore our features or reach us directly on WhatsApp.
              </p>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 32px;">
                <tr>
                  <td style="background:linear-gradient(135deg,#ea580c,#f97316);border-radius:10px;padding:14px 32px;text-align:center;">
                    <a href="https://gymtitan.codeverza.com" style="color:#fff;font-size:15px;font-weight:700;text-decoration:none;letter-spacing:0.3px;">
                      Visit Gym Titan →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:rgba(0,0,0,0.3);border-top:1px solid rgba(255,255,255,0.05);padding:24px 40px;text-align:center;">
              <p style="margin:0 0 8px;color:#4b5563;font-size:12px;">
                © ${new Date().getFullYear()} Gym Titan by Codeverza. All rights reserved.
              </p>
              <p style="margin:0;color:#4b5563;font-size:12px;">
                📧 gymtitan@codeverza.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// ─── Email sent to admin ──────────────────────────────────────────────────────
function adminEmailHTML(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Submission – Gym Titan</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1a1a2e,#0f0f1e);border:1px solid rgba(249,115,22,0.3);border-radius:16px;overflow:hidden;max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e3a5f,#1a3a6e);padding:32px 40px;text-align:center;border-bottom:2px solid #f97316;">
              <h1 style="margin:0;color:#fff;font-size:24px;font-weight:800;">
                🏋️ GYM TITAN — Admin Alert
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:13px;letter-spacing:2px;text-transform:uppercase;">
                New Contact Form Submission
              </p>
            </td>
          </tr>

          <!-- Alert Badge -->
          <tr>
            <td style="padding:24px 40px 0;text-align:center;">
              <span style="display:inline-block;background:rgba(249,115,22,0.15);border:1px solid rgba(249,115,22,0.4);border-radius:999px;padding:6px 18px;color:#fb923c;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">
                ● New Message Received
              </span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:28px 40px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.05);border:1px solid rgba(249,115,22,0.2);border-radius:12px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 16px;color:#fb923c;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Contact Details</p>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
                        <td style="color:#6b7280;font-size:13px;padding:10px 0;width:110px;vertical-align:top;">👤 Name</td>
                        <td style="color:#f3f4f6;font-size:14px;padding:10px 0;font-weight:700;">${data.name}</td>
                      </tr>
                      <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
                        <td style="color:#6b7280;font-size:13px;padding:10px 0;vertical-align:top;">📧 Email</td>
                        <td style="padding:10px 0;">
                          <a href="mailto:${data.email}" style="color:#fb923c;font-size:14px;font-weight:600;text-decoration:none;">${data.email}</a>
                        </td>
                      </tr>
                      ${data.phone ? `
                      <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
                        <td style="color:#6b7280;font-size:13px;padding:10px 0;vertical-align:top;">📞 Phone</td>
                        <td style="color:#f3f4f6;font-size:14px;padding:10px 0;font-weight:600;">${data.phone}</td>
                      </tr>` : ''}
                      <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
                        <td style="color:#6b7280;font-size:13px;padding:10px 0;vertical-align:top;">📌 Subject</td>
                        <td style="padding:10px 0;">
                          <span style="display:inline-block;background:rgba(249,115,22,0.2);border:1px solid rgba(249,115,22,0.4);border-radius:6px;padding:3px 10px;color:#fb923c;font-size:13px;font-weight:600;">
                            ${subjectLabels[data.subject] || data.subject}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:10px 0;vertical-align:top;">💬 Message</td>
                        <td style="color:#e5e7eb;font-size:14px;padding:10px 0;line-height:1.7;">${data.message.replace(/\n/g, '<br/>')}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Quick Reply -->
              <table cellpadding="0" cellspacing="0" style="margin:24px auto 0;">
                <tr>
                  <td style="background:linear-gradient(135deg,#ea580c,#f97316);border-radius:10px;padding:13px 28px;text-align:center;">
                    <a href="mailto:${data.email}?subject=Re: ${subjectLabels[data.subject] || data.subject}" style="color:#fff;font-size:14px;font-weight:700;text-decoration:none;">
                      Reply to ${data.name} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:rgba(0,0,0,0.3);border-top:1px solid rgba(255,255,255,0.05);padding:20px 40px;text-align:center;">
              <p style="margin:0;color:#4b5563;font-size:12px;">
                Gym Titan Admin Panel — gymtitan@codeverza.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // ── 1. Basic field validation ─────────────────────────────────────────────
    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const validSubjects = ['general', 'sales', 'support', 'demo', 'partnership'];
    if (!validSubjects.includes(subject)) {
      return Response.json({ error: 'Invalid subject.' }, { status: 400 });
    }

    // ── 2. IP extraction ──────────────────────────────────────────────────────
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = (forwarded ? forwarded.split(',')[0] : '').trim() || 'unknown';

    // ── 3. IP-based rate limit check ─────────────────────────────────────────
    let ipLimitResult;
    try {
      ipLimitResult = await checkIPRateLimit(ip);
      if (!ipLimitResult.allowed) {
        return Response.json(
          { error: 'Too many requests from your network. Please try again later.' },
          { status: 429 }
        );
      }
    } catch (dbErr) {
      console.error('IP rate limit check failed:', dbErr);
      ipLimitResult = { allowed: true };
    }

    // ── 4. Email-based cooldown check ─────────────────────────────────────────
    try {
      const emailLimit = await checkEmailRateLimit(email);
      if (!emailLimit.allowed) {
        return Response.json(
          {
            error: `You have recently submitted an inquiry using this email address. Please try again in ${emailLimit.retryAfter}.`,
            retryAfter: emailLimit.retryAfter,
          },
          { status: 429 }
        );
      }
    } catch (dbErr) {
      console.error('Email rate limit check failed:', dbErr);
    }

    // ── 5. Send emails ────────────────────────────────────────────────────────
    const data = { name, email: email.trim(), phone: phone || '', subject, message };

    await transporter.sendMail({
      from: `"Gym Titan" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: '✅ We received your message – Gym Titan',
      html: userEmailHTML(data),
    });

    await transporter.sendMail({
      from: `"Gym Titan Contact" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `📩 New Contact: ${subjectLabels[subject] || subject} — ${name}`,
      html: adminEmailHTML(data),
    });

    // ── 6. Record submission ONLY after successful send ───────────────────────
    try {
      await recordSuccessfulSubmission(email, ipLimitResult);
    } catch (dbErr) {
      console.error('Failed to record submission:', dbErr);
    }

    return Response.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error('Contact API error:', err);
    return Response.json({ error: 'Failed to send your message. Please try again.' }, { status: 500 });
  }
}

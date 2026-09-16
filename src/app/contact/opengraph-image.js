import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Contact Gym Titan - Get Started Today';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '60px',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)',
          }}
        />
        
        {/* Top Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 30px',
            background: 'rgba(249, 115, 22, 0.1)',
            border: '2px solid rgba(249, 115, 22, 0.3)',
            borderRadius: 50,
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: '#f97316',
              display: 'flex',
            }}
          />
          <span
            style={{
              fontSize: 24,
              color: '#f97316',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            GET IN TOUCH
          </span>
        </div>
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: 50,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 80,
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: 10,
            }}
          >
            Contact
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 80,
              fontWeight: 900,
              background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: 30,
            }}
          >
            Gym Titan
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              color: '#9ca3af',
              maxWidth: 900,
            }}
          >
            Free Demo • 24/7 Support • Get Started Today
          </div>
        </div>
        
        {/* Contact Methods */}
        <div
          style={{
            display: 'flex',
            gap: 50,
            marginBottom: 40,
          }}
        >
          {/* Phone */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #ea580c, #f97316)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 40,
              }}
            >
              📞
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#d1d5db',
                fontWeight: 600,
              }}
            >
              Phone Call
            </div>
          </div>
          
          {/* WhatsApp */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 40,
              }}
            >
              💬
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#d1d5db',
                fontWeight: 600,
              }}
            >
              WhatsApp
            </div>
          </div>
          
          {/* Email */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #ea580c, #f97316)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 40,
              }}
            >
              📧
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#d1d5db',
                fontWeight: 600,
              }}
            >
              Email
            </div>
          </div>
          
          {/* Demo */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 40,
              }}
            >
              🎯
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#d1d5db',
                fontWeight: 600,
              }}
            >
              Free Demo
            </div>
          </div>
        </div>
        
        {/* Response Time */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 15,
            padding: '15px 35px',
            background: 'rgba(249, 115, 22, 0.1)',
            border: '2px solid rgba(249, 115, 22, 0.3)',
            borderRadius: 12,
            marginBottom: 30,
          }}
        >
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: '#f97316',
            }}
          >
            ⚡ Response within 24 hours
          </span>
        </div>
        
        {/* Bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 15,
          }}
        >
          <span
            style={{
              fontSize: 36,
              fontWeight: 800,
              background: 'linear-gradient(135deg, #f97316, #fb923c)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            GYM TITAN
          </span>
          <span
            style={{
              fontSize: 24,
              color: '#6b7280',
            }}
          >
            • We're Here to Help
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

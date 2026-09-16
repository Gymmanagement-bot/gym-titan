import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'About Gym Titan - Empowering Gym Owners';
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
            ABOUT US
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
              marginBottom: 20,
            }}
          >
            Built by Gym Owners,
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
            For Gym Owners
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              color: '#9ca3af',
              maxWidth: 900,
            }}
          >
            Empowering fitness businesses with intelligent management solutions
          </div>
        </div>
        
        {/* Stats Bar */}
        <div
          style={{
            display: 'flex',
            gap: 60,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 900,
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                marginBottom: 8,
              }}
            >
              100+
            </div>
            <div
              style={{
                fontSize: 20,
                color: '#d1d5db',
              }}
            >
              Gyms Powered
            </div>
          </div>
          
          <div
            style={{
              width: 2,
              height: 80,
              background: 'rgba(249, 115, 22, 0.3)',
              display: 'flex',
            }}
          />
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 900,
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                marginBottom: 8,
              }}
            >
              100+
            </div>
            <div
              style={{
                fontSize: 20,
                color: '#d1d5db',
              }}
            >
              Members Managed
            </div>
          </div>
          
          <div
            style={{
              width: 2,
              height: 80,
              background: 'rgba(249, 115, 22, 0.3)',
              display: 'flex',
            }}
          />
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 900,
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                marginBottom: 8,
              }}
            >
              98%
            </div>
            <div
              style={{
                fontSize: 20,
                color: '#d1d5db',
              }}
            >
              Satisfaction
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
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
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#6b7280',
            }}
          >
            Powered by Codeverza
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

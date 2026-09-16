import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Gym Titan Features - Complete Gym Management Tools';
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
            POWERFUL FEATURES
          </span>
        </div>
        
        {/* Main Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            Everything You Need to
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 900,
              background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Manage Your Gym
          </div>
        </div>
        
        {/* Feature Icons Grid */}
        <div
          style={{
            display: 'flex',
            gap: 30,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
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
              👥
            </div>
            <span style={{ fontSize: 18, color: '#9ca3af' }}>Members</span>
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
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
              💳
            </div>
            <span style={{ fontSize: 18, color: '#9ca3af' }}>Payments</span>
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
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
              📊
            </div>
            <span style={{ fontSize: 18, color: '#9ca3af' }}>Reports</span>
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
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
              📱
            </div>
            <span style={{ fontSize: 18, color: '#9ca3af' }}>Mobile</span>
          </div>
        </div>
        
        {/* Feature Count */}
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: '#e5e7eb',
            marginBottom: 20,
          }}
        >
          12+ Powerful Features • All-in-One Solution
        </div>
        
        {/* Bottom Logo */}
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
              fontSize: 32,
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
            by Codeverza
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

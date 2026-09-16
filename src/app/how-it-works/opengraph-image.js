import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'How Gym Titan Works - 4 Simple Steps';
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
            STEP BY STEP GUIDE
          </span>
        </div>
        
        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 50,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: 10,
            }}
          >
            How Gym Titan Works
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              color: '#9ca3af',
            }}
          >
            Get started in 4 simple steps
          </div>
        </div>
        
        {/* 4 Steps Grid */}
        <div
          style={{
            display: 'flex',
            gap: 30,
            marginBottom: 40,
          }}
        >
          {/* Step 1 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 200,
            }}
          >
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #ea580c, #f97316)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 48,
                fontWeight: 900,
                color: 'white',
                marginBottom: 15,
              }}
            >
              1
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: '#e5e7eb',
                textAlign: 'center',
              }}
            >
              Sign Up &<br/>Setup
            </div>
          </div>
          
          {/* Arrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 40,
              color: '#f97316',
            }}
          >
            →
          </div>
          
          {/* Step 2 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 200,
            }}
          >
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 48,
                fontWeight: 900,
                color: 'white',
                marginBottom: 15,
              }}
            >
              2
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: '#e5e7eb',
                textAlign: 'center',
              }}
            >
              Create<br/>Roles
            </div>
          </div>
          
          {/* Arrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 40,
              color: '#06b6d4',
            }}
          >
            →
          </div>
          
          {/* Step 3 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 200,
            }}
          >
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #ea580c, #f97316)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 48,
                fontWeight: 900,
                color: 'white',
                marginBottom: 15,
              }}
            >
              3
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: '#e5e7eb',
                textAlign: 'center',
              }}
            >
              Manage<br/>Members
            </div>
          </div>
          
          {/* Arrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 40,
              color: '#f97316',
            }}
          >
            →
          </div>
          
          {/* Step 4 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 200,
            }}
          >
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 48,
                fontWeight: 900,
                color: 'white',
                marginBottom: 15,
              }}
            >
              4
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: '#e5e7eb',
                textAlign: 'center',
              }}
            >
              Track<br/>Analytics
            </div>
          </div>
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
            • Simple & Powerful
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

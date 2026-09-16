import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Gym Titan - Complete Gym Management Software';
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
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Logo/Icon */}
        <div
          style={{
            display: 'flex',
            fontSize: 120,
            marginBottom: 30,
          }}
        >
          🏋️‍♂️
        </div>
        
        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 80,
            fontWeight: 900,
            background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
            letterSpacing: '-0.02em',
          }}
        >
          GYM TITAN
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: 36,
            color: '#e5e7eb',
            marginBottom: 40,
            fontWeight: 500,
          }}
        >
          Complete Gym Management Software
        </div>
        
        {/* Features */}
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#9ca3af',
            gap: 40,
          }}
        >
          <span>✓ Member Management</span>
          <span>✓ Payment Tracking</span>
          <span>✓ Role-Based Access</span>
        </div>
        
        {/* Footer Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 15,
            padding: '15px 30px',
            background: 'rgba(249, 115, 22, 0.1)',
            border: '2px solid rgba(249, 115, 22, 0.3)',
            borderRadius: 12,
          }}
        >
          <span
            style={{
              fontSize: 28,
              color: '#f97316',
              fontWeight: 700,
            }}
          >
            Powered by Codeverza
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

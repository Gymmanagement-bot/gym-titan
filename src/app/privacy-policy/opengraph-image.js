import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Gym Titan - Privacy Policy';
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
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(0, 102, 255, 0.1) 0%, transparent 50%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              background: 'linear-gradient(135deg, #00f5ff 0%, #0066ff 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 20,
            }}
          >
            GYM TITAN
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: 'white',
              marginBottom: 10,
            }}
          >
            Privacy Policy
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: 'center',
              maxWidth: '80%',
            }}
          >
            Your Privacy Matters to Us
          </div>
        </div>

        {/* Decorative Element */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            width: 100,
            height: 100,
            background: 'linear-gradient(135deg, #00f5ff 0%, #0066ff 100%)',
            borderRadius: '50%',
            opacity: 0.2,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Gym Titan Pricing - Affordable Plans Starting from Rs1,499';
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
            SIMPLE PRICING
          </span>
        </div>
        
        {/* Main Title */}
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
              background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: 10,
            }}
          >
            Affordable Plans
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              color: '#9ca3af',
            }}
          >
            Starting from Rs1,499/month
          </div>
        </div>
        
        {/* 3 Pricing Cards */}
        <div
          style={{
            display: 'flex',
            gap: 30,
            marginBottom: 40,
          }}
        >
          {/* Fit Start */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '30px 25px',
              background: 'rgba(6, 182, 212, 0.1)',
              border: '2px solid rgba(6, 182, 212, 0.3)',
              borderRadius: 20,
              width: 280,
            }}
          >
            <div
              style={{
                fontSize: 40,
                marginBottom: 10,
              }}
            >
              🥉
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 8,
              }}
            >
              Fit Start
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#9ca3af',
                marginBottom: 15,
              }}
            >
              Small Gyms
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 5,
              }}
            >
              <span
                style={{
                  fontSize: 20,
                  color: '#06b6d4',
                }}
              >
                Rs
              </span>
              <span
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  color: '#06b6d4',
                }}
              >
                1,499
              </span>
              <span
                style={{
                  fontSize: 18,
                  color: '#9ca3af',
                }}
              >
                /mo
              </span>
            </div>
          </div>
          
          {/* Fit Plus - Popular */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '30px 25px',
              background: 'rgba(249, 115, 22, 0.15)',
              border: '3px solid #f97316',
              borderRadius: 20,
              width: 280,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -15,
                padding: '5px 15px',
                background: 'linear-gradient(135deg, #ea580c, #f97316)',
                borderRadius: 20,
                fontSize: 14,
                fontWeight: 700,
                color: 'white',
              }}
            >
              POPULAR
            </div>
            <div
              style={{
                fontSize: 40,
                marginBottom: 10,
              }}
            >
              🥈
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 8,
              }}
            >
              Fit Plus
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#9ca3af',
                marginBottom: 15,
              }}
            >
              Growing Gyms
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 5,
              }}
            >
              <span
                style={{
                  fontSize: 20,
                  color: '#f97316',
                }}
              >
                Rs
              </span>
              <span
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  color: '#f97316',
                }}
              >
                3,399
              </span>
              <span
                style={{
                  fontSize: 18,
                  color: '#9ca3af',
                }}
              >
                /mo
              </span>
            </div>
          </div>
          
          {/* Fit Max */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '30px 25px',
              background: 'rgba(14, 165, 233, 0.1)',
              border: '2px solid rgba(14, 165, 233, 0.3)',
              borderRadius: 20,
              width: 280,
            }}
          >
            <div
              style={{
                fontSize: 40,
                marginBottom: 10,
              }}
            >
              🥇
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 8,
              }}
            >
              Fit Max
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#9ca3af',
                marginBottom: 15,
              }}
            >
              Large Gyms
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 5,
              }}
            >
              <span
                style={{
                  fontSize: 20,
                  color: '#0ea5e9',
                }}
              >
                Rs
              </span>
              <span
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  color: '#0ea5e9',
                }}
              >
                5,499
              </span>
              <span
                style={{
                  fontSize: 18,
                  color: '#9ca3af',
                }}
              >
                /mo
              </span>
            </div>
          </div>
        </div>
        
        {/* Free Trial Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '15px 35px',
            background: 'rgba(249, 115, 22, 0.1)',
            border: '2px solid rgba(249, 115, 22, 0.3)',
            borderRadius: 12,
          }}
        >
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: '#f97316',
            }}
          >
            🎁 14-Day Free Trial • No Credit Card Required
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
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Rule system */}
        <div style={{ width: '100%', height: '4px', background: '#0A0A0A', display: 'flex' }} />
        <div style={{ width: '68%', height: '2px', background: 'rgba(10,10,10,0.18)', marginTop: '10px', display: 'flex' }} />
        <div style={{ width: '40%', height: '3px', background: '#C8000A', marginTop: '10px', display: 'flex' }} />

        {/* Wordmark */}
        <div
          style={{
            fontSize: '148px',
            fontWeight: 700,
            color: '#0A0A0A',
            letterSpacing: '0.46em',
            marginTop: '28px',
            lineHeight: 1,
            display: 'flex',
          }}
        >
          ORION
        </div>

        {/* Subtitle row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '14px' }}>
          <div
            style={{
              fontSize: '16px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#888888',
              display: 'flex',
            }}
          >
            Trade &amp; Logistics LLC
          </div>
          <div
            style={{
              fontSize: '13px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C8000A',
              display: 'flex',
            }}
          >
            New York
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

interface LogoNewProps {
  variant?: 'purple-gray' | 'blue-navy' | 'gold-black' | 'teal-slate' | 'rose-charcoal';
  size?: number;
  showText?: boolean;
  className?: string;
}

export function LogoNew({ 
  variant = 'purple-gray', 
  size = 200,
  showText = true,
  className = ''
}: LogoNewProps) {
  const colorSchemes = {
    'purple-gray': {
      primary: '#7C3AED',
      secondary: '#64748B',
      text: '#1F2937'
    },
    'blue-navy': {
      primary: '#3B82F6',
      secondary: '#1E3A8A',
      text: '#1F2937'
    },
    'gold-black': {
      primary: '#D4AF37',
      secondary: '#1F2937',
      text: '#1F2937'
    },
    'teal-slate': {
      primary: '#14B8A6',
      secondary: '#475569',
      text: '#1F2937'
    },
    'rose-charcoal': {
      primary: '#F43F5E',
      secondary: '#374151',
      text: '#1F2937'
    }
  };

  const colors = colorSchemes[variant];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id={`grad-primary-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0.8" />
          </linearGradient>
          
          <linearGradient id={`grad-secondary-${variant}`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.secondary} />
            <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.9" />
          </linearGradient>

          {/* Shadow */}
          <filter id={`shadow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
            <feOffset dx="0" dy="3" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.15"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main Circle Background */}
        <circle 
          cx="200" 
          cy="200" 
          r="190" 
          fill="white"
          stroke={colors.secondary}
          strokeWidth="2"
          opacity="0.1"
        />

        {/* Letter "S" - Upper flowing shape */}
        <path
          d="M 200 10
             A 190 190 0 0 1 390 200
             Q 380 200 370 205
             L 320 230
             Q 280 250 240 265
             L 200 280
             Q 180 287 165 300
             L 140 320
             Q 120 335 110 355
             Q 100 370 95 385
             L 85 390
             A 190 190 0 0 1 10 200
             A 190 190 0 0 1 200 10
             Z"
          fill={`url(#grad-primary-${variant})`}
          filter={`url(#shadow-${variant})`}
        />

        {/* Letter "A" - Lower flowing shape */}
        <path
          d="M 200 390
             A 190 190 0 0 1 10 200
             Q 20 200 30 195
             L 80 170
             Q 120 150 160 135
             L 200 120
             Q 220 113 235 100
             L 260 80
             Q 280 65 290 45
             Q 300 30 305 15
             L 315 10
             A 190 190 0 0 1 390 200
             A 190 190 0 0 1 200 390
             Z"
          fill={`url(#grad-secondary-${variant})`}
          filter={`url(#shadow-${variant})`}
        />

        {/* White "S" curve - creates negative space */}
        <path
          d="M 140 90
             Q 120 110 115 135
             Q 110 160 120 180
             Q 135 205 160 215
             Q 185 225 210 220
             Q 235 215 250 195"
          stroke="white"
          strokeWidth="32"
          strokeLinecap="round"
          fill="none"
        />

        {/* White "A" triangle - creates negative space */}
        <g>
          <path
            d="M 200 280 L 240 340 L 160 340 Z"
            fill="white"
          />
          {/* A crossbar */}
          <rect
            x="180"
            y="315"
            width="40"
            height="8"
            fill={`url(#grad-secondary-${variant})`}
            opacity="0.8"
          />
        </g>

        {/* Center dot - connecting element */}
        <circle 
          cx="200" 
          cy="200" 
          r="12" 
          fill="white"
          opacity="0.9"
        />

        {/* Outer ring */}
        <circle 
          cx="200" 
          cy="200" 
          r="190" 
          fill="none" 
          stroke={colors.primary}
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>

      {showText && (
        <div className="mt-4 text-center">
          <h2 
            className="text-2xl font-bold tracking-tight"
            style={{ color: colors.text }}
          >
            SHREEJI ART
          </h2>
          <p 
            className="text-xs tracking-[0.3em] opacity-60 mt-1" 
            style={{ color: colors.text }}
          >
            PREMIUM SIGNAGE
          </p>
        </div>
      )}
    </div>
  );
}

// Compact icon version
export function LogoNewIcon({ 
  variant = 'purple-gray',
  size = 40 
}: { 
  variant?: 'purple-gray' | 'blue-navy' | 'gold-black' | 'teal-slate' | 'rose-charcoal';
  size?: number;
}) {
  const colorSchemes = {
    'purple-gray': {
      primary: '#7C3AED',
      secondary: '#64748B'
    },
    'blue-navy': {
      primary: '#3B82F6',
      secondary: '#1E3A8A'
    },
    'gold-black': {
      primary: '#D4AF37',
      secondary: '#1F2937'
    },
    'teal-slate': {
      primary: '#14B8A6',
      secondary: '#475569'
    },
    'rose-charcoal': {
      primary: '#F43F5E',
      secondary: '#374151'
    }
  };

  const colors = colorSchemes[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`icon-grad-primary-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.primary} />
          <stop offset="100%" stopColor={colors.primary} stopOpacity="0.8" />
        </linearGradient>
        
        <linearGradient id={`icon-grad-secondary-${variant}`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.secondary} />
          <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <path
        d="M 200 10 A 190 190 0 0 1 390 200 Q 380 200 370 205 L 320 230 Q 280 250 240 265 L 200 280 Q 180 287 165 300 L 140 320 Q 120 335 110 355 Q 100 370 95 385 L 85 390 A 190 190 0 0 1 10 200 A 190 190 0 0 1 200 10 Z"
        fill={`url(#icon-grad-primary-${variant})`}
      />

      <path
        d="M 200 390 A 190 190 0 0 1 10 200 Q 20 200 30 195 L 80 170 Q 120 150 160 135 L 200 120 Q 220 113 235 100 L 260 80 Q 280 65 290 45 Q 300 30 305 15 L 315 10 A 190 190 0 0 1 390 200 A 190 190 0 0 1 200 390 Z"
        fill={`url(#icon-grad-secondary-${variant})`}
      />

      <path
        d="M 140 90 Q 120 110 115 135 Q 110 160 120 180 Q 135 205 160 215 Q 185 225 210 220 Q 235 215 250 195"
        stroke="white"
        strokeWidth="32"
        strokeLinecap="round"
        fill="none"
      />

      <path d="M 200 280 L 240 340 L 160 340 Z" fill="white" />
      <rect x="180" y="315" width="40" height="8" fill={`url(#icon-grad-secondary-${variant})`} opacity="0.8" />
      <circle cx="200" cy="200" r="12" fill="white" opacity="0.9" />
      <circle cx="200" cy="200" r="190" fill="none" stroke={colors.primary} strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

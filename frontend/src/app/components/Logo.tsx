interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: { icon: 34, text: 'text-lg', sub: 'text-[11px]' },
  md: { icon: 46, text: 'text-2xl', sub: 'text-sm' },
  lg: { icon: 64, text: 'text-3xl', sub: 'text-base' }
};

export function Logo({ showText = true, size = 'md', className = '' }: LogoProps) {
  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      
      {/* Logo Image */}
      <img
        src="/Shreeji Art 1.png"
        alt="Shreeji Art Logo"
        style={{
          width: currentSize.icon,
          height: currentSize.icon,
          objectFit: 'contain'
        }}
      />

      {/* Text */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className={`${currentSize.text} font-medium tracking-wide text-gray-900`}>
            SHREEJI ART
          </span>
          <span className={`${currentSize.sub} font-medium tracking-[0.35em] text-gray-600 uppercase mt-[2px]`}>
            PREMIUM SIGNAGE
          </span>
        </div>
      )}

    </div>
  );
}

/* ✅ KEEP THIS OUTSIDE */
export function LogoIcon({ size = 52 }: { size?: number }) {
  return (
    <img
      src="/Shreeji_Art_F-1.png"
      alt="Shreeji Art Logo"
      style={{
        width: size,
        height: size,
        objectFit: 'contain'
      }}
    />
  );
}
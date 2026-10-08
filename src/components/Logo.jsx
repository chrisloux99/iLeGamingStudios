import React from 'react';

/* Geometric African fish eagle: three angular wing strokes rising from a
   copper diamond base. Copper gradient = Copperbelt / flag orange. */
export const EagleMark = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="eagleCopper" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#B45A1E" />
        <stop offset=".5" stopColor="#E8853B" />
        <stop offset="1" stopColor="#F2A65A" />
      </linearGradient>
    </defs>
    {/* diamond base — the mineral */}
    <path d="M12 53 L32 43 L52 53 L32 62 Z" fill="url(#eagleCopper)" opacity=".55" />
    {/* left wing */}
    <path d="M6 41 L30 9 L34.5 15.5 L17 43 Z" fill="url(#eagleCopper)" />
    {/* right wing */}
    <path d="M58 41 L36 9 L31.5 15.5 L49 43 Z" fill="url(#eagleCopper)" />
    {/* descending body / tail */}
    <path d="M32 21 L42 51 L32 44 L22 51 Z" fill="url(#eagleCopper)" />
  </svg>
);

export const Logo = ({ onNavigate }) => (
  <div
    className="logo"
    onClick={() => onNavigate('home')}
    role="link"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === 'Enter') onNavigate('home'); }}
  >
    <EagleMark size={38} />
    <span className="logo-text">
      <span className="logo-name">iLe</span>
      <span className="logo-sub">Gaming Studios</span>
    </span>
  </div>
);

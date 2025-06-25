import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 96" role="img">
    <title>Logo</title>
    <g fill="none" fillRule="evenodd">
      {/* Hexagon Background */}
      <polygon fill="#0A0E25" points="42,0 84,24 84,72 42,96 0,72 0,24" opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" />
      </polygon>

      {/* Arrow above T */}
      <polygon fill="#4EFFDF" points="42,20 38,26 46,26" opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.5s" fill="freeze" />
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0,-10"
          to="0,0"
          dur="0.3s"
          begin="0.5s"
          fill="freeze"
        />
      </polygon>

      {/* MTN Text */}
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="24"
        fill="#4EFFDF"
        fontWeight="bold"
        letterSpacing="4"
        opacity="0">
        MTN
        <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.8s" fill="freeze" />
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0,10"
          to="0,0"
          dur="0.4s"
          begin="0.8s"
          fill="freeze"
        />
      </text>

      {/* Underline */}
      <line x1="22" y1="63" x2="22" y2="63" stroke="#4EFFDF" strokeWidth="3" strokeLinecap="round">
        <animate attributeName="x2" from="22" to="62" dur="0.4s" begin="1.2s" fill="freeze" />
      </line>
    </g>
  </svg>
);

export default IconLogo;

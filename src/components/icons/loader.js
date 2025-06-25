import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img">
    <title>Logo</title>
    <g fill="none" fillRule="evenodd">
      {/* Hexagon Background */}
      <polygon fill="#0A0E25" points="50,5 11,27 11,72 50,95 89,73 89,28" opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" />
      </polygon>

      {/* Hexagon Stroke Path */}
      <path
        stroke="#4EFFDF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50,5 L 11,27 L 11,72 L 50,95 L 89,73 L 89,28 Z"
        opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" />
      </path>

      {/* MTN Text */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="20"
        fill="#4EFFDF"
        fontWeight="bold"
        letterSpacing="3"
        opacity="0">
        MTN
        <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.8s" fill="freeze" />
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0,5"
          to="0,0"
          dur="0.4s"
          begin="0.8s"
          fill="freeze"
        />
      </text>

      {/* Underline */}
      <line x1="30" y1="65" x2="30" y2="65" stroke="#4EFFDF" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="x2" from="30" to="70" dur="0.4s" begin="1.2s" fill="freeze" />
      </line>
    </g>
  </svg>
);

export default IconLoader;

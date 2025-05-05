import React from 'react';

export const TrendIcon = ({ size = 22, color = 'currentColor', ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    width={size} 
    height={size} 
    fill={color}
    {...props}
  >
    <g xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path strokeLinecap="round" d="M4 44h40"/><path d="m4 26l8 2v10H4V26Zm16-2l8-4v18h-8V24Zm16-8l8-4v26h-8V16Z"/><path strokeLinecap="round" d="m4 18l8 2L44 4H34"/></g>
  </svg>
);

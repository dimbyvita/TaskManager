// import React from 'react';

export const SettingIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    width={size} 
    height={size} 
    fill={color}
    {...props}
  >
    <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M41.5 10h-6m-8-4v8m0-4h-22m8 14h-8m16-4v8m22-4h-22m20 14h-6m-8-4v8m0-4h-22"/>
  </svg>
);

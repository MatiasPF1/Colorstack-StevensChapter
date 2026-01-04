import React from 'react';

export const UnderlineDoodle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M5 10 Q 50 5, 100 10 T 195 10" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
  </svg>
);

export const StarDoodle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M25 5 L 30 20 L 45 20 L 35 30 L 40 45 L 25 35 L 10 45 L 15 30 L 5 20 L 20 20 Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const DinoDoodle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M20 60 Q 20 40, 40 30 Q 60 20, 70 30 Q 80 40, 70 50 L 70 70 L 80 70 L 80 80 L 60 80 L 60 70 L 50 70 L 50 80 L 30 80 L 30 60 Z M 70 30 Q 75 25, 80 30 M 30 60 L 10 50" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle cx="65" cy="35" r="2" fill="currentColor" />
  </svg>
);

export const SparkleDoodle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M25 0 L 28 22 L 50 25 L 28 28 L 25 50 L 22 28 L 0 25 L 22 22 Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const BulbDoodle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M20 50 C 10 40, 10 20, 30 10 C 50 20, 50 40, 40 50 L 40 60 L 20 60 Z M 25 60 L 25 65 L 35 65 L 35 60 M 20 30 L 40 30 M 30 10 L 30 5" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const RocketDoodle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M30 10 Q 50 30, 50 60 L 40 60 L 40 70 L 20 70 L 20 60 L 10 60 Q 10 30, 30 10 Z M 30 30 A 5 5 0 1 0 30 40 A 5 5 0 1 0 30 30 M 10 60 L 5 70 M 50 60 L 55 70" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const LaptopDoodle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M10 50 L 10 10 L 90 10 L 90 50 M 5 50 L 95 50 L 95 60 L 5 60 Z M 40 60 L 60 60" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M25 25 L 35 35 L 50 20" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const CharacterDoodle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <circle cx="50" cy="20" r="15" stroke="currentColor" strokeWidth="3" />
    {/* Body */}
    <path d="M50 35 L 50 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* Arms (Pointing Right) */}
    <path d="M50 45 L 20 55 M 50 45 L 80 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* Legs */}
    <path d="M50 70 L 30 95 M 50 70 L 70 95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);



import React from 'react';

interface ChevronIconProps {
  active: boolean;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ active }) => {
  return (
    <svg
      className='transition-transform duration-200 ease-in'
      viewBox='0 0 18 20'
      width='18'
      height='18'
      style={{
        transformOrigin: 'center',
        transform: active ? 'translateY(3px)' : 'translateY(0px)',
      }}>
      <path d='M3.42,7.42L8,12l4.58-4.58L14,9l-6,6L3,9l0.42-1.58z' fill='currentColor'></path>
    </svg>
  );
};

export default ChevronIcon;

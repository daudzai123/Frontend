import React from 'react';

const HamburgerIcon: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => (
  <button className='p-2 focus:outline-none md:hidden' onClick={onClick}>
    <div
      className={`h-0.5 w-6 transform bg-current transition-transform duration-300 ${
        isOpen ? 'translate-y-1.5 rotate-45' : ''
      }`}></div>
    <div
      className={`my-1.5 h-0.5 w-6 bg-current transition-opacity duration-300 ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`}></div>
    <div
      className={`h-0.5 w-6 transform bg-current transition-transform duration-300 ${
        isOpen ? '-translate-y-2.5 -rotate-45' : ''
      }`}></div>
  </button>
);

export default HamburgerIcon;

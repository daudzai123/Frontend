import { IconProps } from '@/components/common/Icons/icons.types';
import React from 'react';

const NewsIcon: React.FC<IconProps> = ({ height = 20, width = 20, color, className }) => {
  return (
    <svg
      enableBackground='new 0 0 32 32'
      className={className}
      height={height}
      width={width}
      viewBox='0 0 32 32'>
      <g id='news'>
        <path
          clipRule='evenodd'
          d='M29,0H7C5.343,0,4,1.342,4,3v2H3C1.343,5,0,6.342,0,8v20   c0,2.209,1.791,4,4,4h24c2.209,0,4-1.791,4-4V3C32,1.342,30.656,0,29,0z M30,28c0,1.102-0.898,2-2,2H4c-1.103,0-2-0.898-2-2V8   c0-0.552,0.448-1,1-1h1v20c0,0.553,0.447,1,1,1s1-0.447,1-1V3c0-0.552,0.448-1,1-1h22c0.551,0,1,0.448,1,1V28z'
          fill={color}
          fillRule='evenodd'
        />
        <path
          clipRule='evenodd'
          d='M19.498,13.005h8c0.277,0,0.5-0.224,0.5-0.5s-0.223-0.5-0.5-0.5   h-8c-0.275,0-0.5,0.224-0.5,0.5S19.223,13.005,19.498,13.005z'
          fill={color}
          fillRule='evenodd'
        />
        <path
          clipRule='evenodd'
          d='M19.498,10.005h8c0.277,0,0.5-0.224,0.5-0.5s-0.223-0.5-0.5-0.5   h-8c-0.275,0-0.5,0.224-0.5,0.5S19.223,10.005,19.498,10.005z'
          fill={color}
          fillRule='evenodd'
        />
        <path
          clipRule='evenodd'
          d='M19.498,7.005h8c0.277,0,0.5-0.224,0.5-0.5s-0.223-0.5-0.5-0.5h-8   c-0.275,0-0.5,0.224-0.5,0.5S19.223,7.005,19.498,7.005z'
          fill={color}
          fillRule='evenodd'
        />
        <path
          clipRule='evenodd'
          d='M16.5,27.004h-8c-0.276,0-0.5,0.225-0.5,0.5   c0,0.277,0.224,0.5,0.5,0.5h8c0.275,0,0.5-0.223,0.5-0.5C17,27.229,16.776,27.004,16.5,27.004z'
          fill={color}
          fillRule='evenodd'
        />
        <path
          clipRule='evenodd'
          d='M16.5,24.004h-8c-0.276,0-0.5,0.225-0.5,0.5   c0,0.277,0.224,0.5,0.5,0.5h8c0.275,0,0.5-0.223,0.5-0.5C17,24.229,16.776,24.004,16.5,24.004z'
          fill={color}
          fillRule='evenodd'
        />
        <path
          clipRule='evenodd'
          d='M16.5,21.004h-8c-0.276,0-0.5,0.225-0.5,0.5   c0,0.277,0.224,0.5,0.5,0.5h8c0.275,0,0.5-0.223,0.5-0.5C17,21.229,16.776,21.004,16.5,21.004z'
          fill={color}
          fillRule='evenodd'
        />
        <path
          clipRule='evenodd'
          d='M27.5,27.004h-8c-0.277,0-0.5,0.225-0.5,0.5   c0,0.277,0.223,0.5,0.5,0.5h8c0.275,0,0.5-0.223,0.5-0.5C28,27.229,27.775,27.004,27.5,27.004z'
          fill={color}
          fillRule='evenodd'
        />
        <path
          clipRule='evenodd'
          d='M27.5,24.004h-8c-0.277,0-0.5,0.225-0.5,0.5   c0,0.277,0.223,0.5,0.5,0.5h8c0.275,0,0.5-0.223,0.5-0.5C28,24.229,27.775,24.004,27.5,24.004z'
          fill={color}
          fillRule='evenodd'
        />
        <path
          clipRule='evenodd'
          d='M27.5,21.004h-8c-0.277,0-0.5,0.225-0.5,0.5   c0,0.277,0.223,0.5,0.5,0.5h8c0.275,0,0.5-0.223,0.5-0.5C28,21.229,27.775,21.004,27.5,21.004z'
          fill={color}
          fillRule='evenodd'
        />
        <path
          clipRule='evenodd'
          d='M27.5,15.004h-19c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5   h19c0.275,0,0.5-0.224,0.5-0.5S27.775,15.004,27.5,15.004z'
          fill={color}
          fillRule='evenodd'
        />
        <path
          clipRule='evenodd'
          d='M27.5,18.004h-19c-0.276,0-0.5,0.225-0.5,0.5   c0,0.277,0.224,0.5,0.5,0.5h19c0.275,0,0.5-0.223,0.5-0.5C28,18.229,27.775,18.004,27.5,18.004z'
          fill={color}
          fillRule='evenodd'
        />
        <path
          clipRule='evenodd'
          d='M9,13h7c0.553,0,1-0.447,1-1V5.004c0-0.553-0.447-1-1-1H9   c-0.553,0-1,0.447-1,1V12C8,12.552,8.447,13,9,13z M10,6h5v5h-5V6z'
          fill={color}
          fillRule='evenodd'
        />
      </g>
    </svg>
  );
};

export default NewsIcon;

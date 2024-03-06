import { useState } from 'react';
import { IconProps } from './Icons.types';

export const PlayIcon = ({ color, backgroundColor, ...props }: IconProps) => {
  const iconColor = color || '#00426C';
  const fillColor = backgroundColor || '#FFFFFF';
  const hoveredColor = '#6F9ABB';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="63"
      height="63"
      viewBox="0 0 63 63"
      fill="none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <circle
        opacity="0.8"
        cx="31.5"
        cy="31.5"
        r="31.5"
        fill={isHovered ? hoveredColor : fillColor}
      />
      <path d="M45.1504 32.0251L23.8879 44.301L23.8879 19.7492L45.1504 32.0251Z" fill={iconColor} />
    </svg>
  );
};

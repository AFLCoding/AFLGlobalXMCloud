import { IconProps } from './Icons.types';

export const RightArrow = ({ color, backgroundColor, ...props }: IconProps) => {
  const iconColor = color || '#FFFFFF';
  const fillColor = backgroundColor || '#1D446B';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70.5"
      height="70.5"
      viewBox="0 0 70 70"
      {...props}
      fill="none"
    >
      <circle cx="35" cy="35" r="35" fill={fillColor} />
      <path
        d="M49.0607 36.0607C49.6464 35.4749 49.6464 34.5251 49.0607 33.9393L39.5147 24.3934C38.9289 23.8076 37.9792 23.8076 37.3934 24.3934C36.8076 24.9792 36.8076 25.9289 37.3934 26.5147L45.8787 35L37.3934 43.4853C36.8076 44.0711 36.8076 45.0208 37.3934 45.6066C37.9792 46.1924 38.9289 46.1924 39.5147 45.6066L49.0607 36.0607ZM22 36.5H48V33.5H22V36.5Z"
        fill={iconColor}
      />
    </svg>
  );
};

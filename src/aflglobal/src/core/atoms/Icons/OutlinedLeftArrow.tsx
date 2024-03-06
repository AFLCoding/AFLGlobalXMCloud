import { IconProps } from './Icons.types';

export const OutlinedLeftArrow = ({ color, backgroundColor, strokeColor, ...props }: IconProps) => {
  const iconColor = color || '#6F9ABB';
  const fillColor = backgroundColor || '#fff';
  const borderColor = strokeColor || '#6F9ABB';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 70 70"
      fill="none"
      {...props}
    >
      <circle
        cx="35"
        cy="35"
        r="34"
        transform="matrix(-1 0 0 1 70 0)"
        fill={fillColor}
        stroke={iconColor}
        strokeWidth="2"
      />
      <path
        d="M20.9393 36.0607C20.3536 35.4749 20.3536 34.5251 20.9393 33.9393L30.4853 24.3934C31.0711 23.8076 32.0208 23.8076 32.6066 24.3934C33.1924 24.9792 33.1924 25.9289 32.6066 26.5147L24.1213 35L32.6066 43.4853C33.1924 44.0711 33.1924 45.0208 32.6066 45.6066C32.0208 46.1924 31.0711 46.1924 30.4853 45.6066L20.9393 36.0607ZM48 36.5H22V33.5H48V36.5Z"
        fill={borderColor}
      />
    </svg>
  );
};

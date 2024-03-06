import { IconProps } from './Icons.types';

export const HoverArrow = ({ color }: IconProps) => {
  const iconColor = color || '#FFFFFF';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="73"
      height="38"
      viewBox="0 0 73 38"
      fill={iconColor}
    >
      <path
        d="M71.7678 20.7678C72.7441 19.7915 72.7441 18.2085 71.7678 17.2322L55.8579 1.32233C54.8816 0.34602 53.2986 0.34602 52.3223 1.32233C51.346 2.29864 51.346 3.88155 52.3223 4.85786L66.4645 19L52.3223 33.1421C51.346 34.1184 51.346 35.7014 52.3223 36.6777C53.2986 37.654 54.8816 37.654 55.8579 36.6777L71.7678 20.7678ZM0 21.5H70V16.5H0V21.5Z"
        fill="white"
      />
    </svg>
  );
};

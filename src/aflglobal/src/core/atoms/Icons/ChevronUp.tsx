import { IconProps } from './Icons.types';

export const ChevronUp = ({ color, ...props }: IconProps) => {
  const iconColor = color || '#002A3A';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      {...props}
      fill="none"
    >
      <path d="M11 8L6 2L1 8" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

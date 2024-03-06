import { IconProps } from './Icons.types';

export const CloseIcon = ({ color, ...props }: IconProps) => {
  const iconColor = color || '#002A3A';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      color={iconColor}
      {...props}
    >
      <path d="M1 1L9 9" stroke={iconColor} strokeLinecap="round" />
      <path d="M9 1L1 9" stroke={iconColor} strokeLinecap="round" />
    </svg>
  );
};

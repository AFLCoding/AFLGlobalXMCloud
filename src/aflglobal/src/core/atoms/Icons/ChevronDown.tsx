import { IconProps } from './Icons.types';

export const ChevronDown = ({ color, ...props }: IconProps) => {
  const iconColor = color || '#58595B';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      {...props}
      fill="none"
    >
      <path
        d="M1 1L6 7L11 1"
        stroke={iconColor}
        strokeWidth={props.strokeWidth || 1.4}
        strokeLinecap="round"
      />
    </svg>
  );
};

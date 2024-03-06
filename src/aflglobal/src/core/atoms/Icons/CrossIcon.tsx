import { IconProps } from './Icons.types';

export const CrossIcon = ({ color, ...props }: IconProps) => {
  const fillColor = color || 'none';

  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill={fillColor}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.65625 1L14.5601 13.9039" stroke="#95979A" stroke-linecap="round" />
      <path d="M1 13.9043L13.9039 1.00043" stroke="#95979A" stroke-linecap="round" />
    </svg>
  );
};

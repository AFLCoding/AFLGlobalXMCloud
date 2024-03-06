import { IconProps } from './Icons.types';

export const CheckBox = ({ color, ...props }: IconProps) => {
  const fillColor = color || '#569BBE';

  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill={fillColor}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="11" height="11" fill="white" stroke={fillColor} />
    </svg>
  );
};

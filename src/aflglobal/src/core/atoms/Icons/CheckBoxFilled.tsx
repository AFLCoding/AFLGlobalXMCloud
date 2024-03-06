import { IconProps } from './Icons.types';

export const CheckBoxFilled = ({ color, ...props }: IconProps) => {
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
      <rect width="12" height="12" fill={fillColor} />

      <path d="M4 6.14286L5.42857 7.57143" stroke="white" strokeLinecap="round" />

      <path d="M9 4L5.42857 7.57143" stroke="white" strokeLinecap="round" />
    </svg>
  );
};

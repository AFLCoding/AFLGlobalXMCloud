import { IconProps } from './Icons.types';

export const UpArrow = ({ color, ...props }: IconProps) => {
  const iconColor = color || '#FFFFFF';

  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.91309 17L5.91309 2.27937L7.81226 2.27937L7.81226 17L5.91309 17Z"
        fill={iconColor}
      />
      <path
        d="M13.227 6.36216L11.8968 7.69238L6.86352 2.65817L1.83022 7.69238L0.5 6.36217L6.86355 -0.000469963L13.227 6.36216Z"
        fill={iconColor}
      />
    </svg>
  );
};

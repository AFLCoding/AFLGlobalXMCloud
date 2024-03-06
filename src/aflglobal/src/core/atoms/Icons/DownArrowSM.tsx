import { IconProps } from './Icons.types';

export const DownArrow = ({ color, ...props }: IconProps) => {
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
        d="M7.81348 0L7.81348 14.7206L5.9143 14.7206L5.9143 -8.30154e-08L7.81348 0Z"
        fill={iconColor}
      />
      <path
        d="M0.499515 10.6378L1.82973 9.30762L6.86304 14.3418L11.8963 9.30762L13.2266 10.6378L6.86302 17.0005L0.499515 10.6378Z"
        fill={iconColor}
      />
    </svg>
  );
};

import { IconProps } from './Icons.types';

export const Download = ({ color }: IconProps) => {
  const iconColor = color || '#FFFFFF';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={iconColor}
    >
      <path
        d="M11.5312 5.86688L8.66498 8.73312V2H7.33123V8.73312L4.46499 5.86688L3.53125 6.8L7.99813 11.2669L12.465 6.8L11.5312 5.86688Z"
        fill={iconColor}
      />
      <path d="M4.33203 12.668H11.6652V14.0011H4.33203V12.668Z" fill={iconColor} />
    </svg>
  );
};

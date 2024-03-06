import { IconProps } from './Icons.types';

export const CloseModal = ({ color }: IconProps) => {
  const fillColor = color || '#fff';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
      <circle cx="17.5" cy="17.5" r="17.5" fill={fillColor} fill-opacity="0.7" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="10.5"
        y="10.5"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path d="M1.26733 1.17383L13.4412 13.3477" stroke="#58595B" stroke-linecap="round" />
        <path d="M0.6521 13.3477L12.826 1.1738" stroke="#58595B" stroke-linecap="round" />
      </svg>
    </svg>
  );
};

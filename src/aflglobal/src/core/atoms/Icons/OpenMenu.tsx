import { IconProps } from './Icons.types';

export const OpenMenu = ({ ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M8 2L8 14"
        stroke="#1D446B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 8H14" stroke="#1D446B" stroke-width="3" stroke-linecap="round" />
    </svg>
  );
};

import { IconProps } from './Icons.types';

export const CloseMenu = ({ ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="4"
      viewBox="0 0 16 4"
      fill="none"
      {...props}
    >
      <path d="M2 2H14" stroke="#1D446B" stroke-width="3" strokeLinecap="round" />
    </svg>
  );
};

import { IconProps } from './Icons.types';

export const Minus = ({ ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="2"
      viewBox="0 0 14 2"
      fill="none"
      {...props}
    >
      <path d="M1 1H13" stroke="#002A3A" stroke-width="2" stroke-linecap="round" />
    </svg>
  );
};

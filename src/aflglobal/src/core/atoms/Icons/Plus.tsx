import { IconProps } from './Icons.types';

export const Plus = ({ ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <path
        d="M7 1L7 13"
        stroke="#002A3A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M1 7H13" stroke="#002A3A" stroke-width="2" stroke-linecap="round" />
    </svg>
  );
};

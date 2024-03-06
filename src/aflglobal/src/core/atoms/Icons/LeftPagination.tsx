import { IconProps } from './Icons.types';

export const LeftPagination = ({ color, ...props }: IconProps) => {
  const fillColor = color || '#FFFFFF';

  return (
    <svg
      width="18"
      height="13"
      viewBox="0 0 18 13"
      {...props}
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 7.45044L2.77937 7.45044L2.77937 5.55127L17.5 5.55127L17.5 7.45044Z"
        fill={fillColor}
      />
      <path
        d="M6.86314 0.136722L8.19336 1.46694L3.15914 6.50025L8.19336 11.5336L6.86314 12.8638L0.500507 6.50022L6.86314 0.136722Z"
        fill={fillColor}
      />
    </svg>
  );
};

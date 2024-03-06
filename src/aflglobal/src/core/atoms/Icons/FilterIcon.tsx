import { IconProps } from './Icons.types';

export const FilterIcon = ({ color, ...props }: IconProps) => {
  const iconColor = color || '#ffffff';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_1529_5109)">
        <path
          d="M15.8333 16.6665L10 16.6665"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66536 16.6665L0.832031 16.6665"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.832 10L8.33203 10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.9987 10L0.832031 10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8346 3.3335L11.668 3.3335"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33203 3.3335L0.832031 3.3335"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 19.1665L10 14.1665"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12.5L5 7.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.668 5.8335L11.668 0.833496"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1529_5109">
          <rect
            width="20"
            height="16.6667"
            fill={iconColor}
            transform="translate(0 20) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

import { IconProps } from './Icons.types';

export const RightPagination = ({ color, ...props }: IconProps) => {
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
      <path d="M0.5 5.5498H15.2206V7.44898H0.5V5.5498Z" fill={fillColor} />
      <path
        d="M11.1369 12.8635L9.80664 11.5333L14.8409 6.5L9.80664 1.46669L11.1369 0.136475L17.4995 6.50002L11.1369 12.8635Z"
        fill={fillColor}
      />
    </svg>
  );
};

import { IconProps } from './Icons.types';

export const PriceRange = ({ color, backgroundColor, ...props }: IconProps) => {
  const iconColor = color || '#002A3A';
  const strokeColor = backgroundColor || ' #569BBE';

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="7.5" stroke={strokeColor} />
      <path
        d="M8.196 13.068H7.584V12.132C7.536 12.144 7.44 12.144 7.404 12.144C6.672 12.144 6.012 11.988 5.544 11.784L5.628 10.932C6.108 11.244 6.744 11.424 7.44 11.424C7.464 11.424 7.548 11.424 7.584 11.412V7.968C6.084 7.2 5.52 6.516 5.52 5.664C5.52 4.56 6.324 3.732 7.584 3.528V2.748H8.196V3.48C8.82 3.48 9.42 3.6 9.816 3.756L9.684 4.512C9.324 4.308 8.772 4.212 8.196 4.2V7.38L8.436 7.512C9.324 8.016 10.188 8.604 10.188 9.78C10.188 10.968 9.456 11.796 8.196 12.072V13.068ZM7.584 7.044V4.26C6.78 4.428 6.348 4.92 6.348 5.64C6.348 6.156 6.696 6.564 7.584 7.044ZM8.196 8.316V11.316C8.94 11.112 9.36 10.536 9.36 9.72C9.36 9.216 9.024 8.808 8.196 8.316Z"
        fill={iconColor}
      />
    </svg>
  );
};

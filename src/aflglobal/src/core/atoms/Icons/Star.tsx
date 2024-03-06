import { IconProps } from './Icons.types';

export const Star = ({ color, ...props }: IconProps) => {
  const fillColor = color || '#002A3A';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="74"
      height="14"
      viewBox="0 0 74 14"
      fill="none"
      {...props}
    >
      <path
        d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
        fill={fillColor}
      />
      <path
        d="M22 0L23.5716 4.83688H28.6574L24.5429 7.82624L26.1145 12.6631L22 9.67376L17.8855 12.6631L19.4571 7.82624L15.3426 4.83688H20.4284L22 0Z"
        fill={fillColor}
      />
      <path
        d="M37 0L38.5716 4.83688H43.6574L39.5429 7.82624L41.1145 12.6631L37 9.67376L32.8855 12.6631L34.4571 7.82624L30.3426 4.83688H35.4284L37 0Z"
        fill={fillColor}
      />
      <path
        d="M52 0L53.5716 4.83688H58.6574L54.5429 7.82624L56.1145 12.6631L52 9.67376L47.8855 12.6631L49.4571 7.82624L45.3426 4.83688H50.4284L52 0Z"
        fill={fillColor}
      />
      <path
        d="M67 0L68.5716 4.83688H73.6574L69.5429 7.82624L71.1145 12.6631L67 9.67376L62.8855 12.6631L64.4571 7.82624L60.3426 4.83688H65.4284L67 0Z"
        fill={fillColor}
      />
    </svg>
  );
};

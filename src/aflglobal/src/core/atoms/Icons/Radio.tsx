import { IconProps } from './Icons.types';

export const Radio = ({ color, ...props }: IconProps) => {
  const fillColor = color || 'none';

  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill={fillColor}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle id="Ellipse 86" cx="10" cy="10.5" r="9" stroke="#6F9ABB" stroke-width="2" />
    </svg>
  );
};

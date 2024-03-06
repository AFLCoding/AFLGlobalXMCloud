import { IconProps } from './Icons.types';

export const UpArrowLarge = ({ color, ...props }: IconProps) => {
  const iconColor = color || '#FFFFFF';

  return (
    <svg width="24" height="30" viewBox="0 0 24 30" fill="none" {...props}>
      <path
        d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807613 11.0711 0.807613 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM13.5 30L13.5 2L10.5 2L10.5 30L13.5 30Z"
        fill={iconColor}
      />
    </svg>
  );
};

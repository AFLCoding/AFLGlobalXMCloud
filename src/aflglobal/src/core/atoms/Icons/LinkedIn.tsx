import { IconProps } from './Icons.types';

export const LinkedIn = ({ color, ...props }: IconProps) => {
  const fillColor = color || '#FFFFFF';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      viewBox="0 0 20 19"
      {...props}
      fill={fillColor}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.14341 5.71431H11.0953V7.74027H11.1525C11.7028 6.75295 13.0485 5.71431 15.0553 5.71431C19.2282 5.71431 20 8.31123 20 11.6895V18.5713H15.8787V12.4709C15.8787 11.0167 15.8484 9.14466 13.7357 9.14466C11.5898 9.14466 11.261 10.7277 11.261 12.365V18.5713H7.14338V5.71431H7.14341ZM4.28627 2.14296C4.28627 3.32591 3.32626 4.28593 2.14331 4.28593C0.960358 4.28593 0 3.32591 0 2.14296C0 0.960015 0.960358 0 2.14331 0C3.32626 0 4.28627 0.960015 4.28627 2.14296ZM0 5.71431H4.28627V18.5713H0V5.71431Z"
        fill={fillColor}
      />
    </svg>
  );
};

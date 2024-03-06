export interface LinkedInProps {
  color?: string;
}

export const Caret = ({ color, ...props }: LinkedInProps) => {
  const fillColor = color || '#FFFFFF';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="10"
      viewBox="0 0 7 10"
      {...props}
      fill="none"
    >
      <path d="M1 9L5.8 5L1 1" stroke="#58595B" strokeLinecap="round" fill={fillColor} />
    </svg>
  );
};

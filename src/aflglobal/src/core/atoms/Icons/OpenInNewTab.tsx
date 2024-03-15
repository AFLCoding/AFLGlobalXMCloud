import { IconProps } from '.';

const OpenInNewTab = ({ color, ...props }: IconProps): JSX.Element => {
  const fillColor = color || '#1D446B';
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
    >
      <path
        fill={fillColor}
        d="M189.538-189.538v-580.924h257.847v28.924H218.462v523.076h523.076v-228.923h28.924v257.847H189.538Zm200.116-178.77-21.346-21.346 352.269-351.884h-149.5v-28.924h199.385v199.385h-28.924v-149.5L389.654-368.308Z"
      />
    </svg>
  );
};

export default OpenInNewTab;

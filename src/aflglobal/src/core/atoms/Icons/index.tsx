import OpenInNewTab from './OpenInNewTab';
import Search from './Search';

export interface IconPropsextend {
  name: string;
  color?: string;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  backgroundColor?: string;
  strokeColor?: string;
}

const IconRenderer: React.FC<IconProps> = ({ name, color, className }) => {
  switch (name) {
    case 'Search':
      return <Search className={className} color={color} />;
    default:
      return <OpenInNewTab className={className} color={color} />;
  }
};

export default IconRenderer;

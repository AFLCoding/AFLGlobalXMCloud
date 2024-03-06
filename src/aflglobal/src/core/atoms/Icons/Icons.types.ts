export interface IconRendererProps {
  iconName: string;
  color?: string;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  backgroundColor?: string;
  strokeColor?: string;
}

import { Instagram } from './Instagram';
import { Facebook } from './Facebook';
import { Pinterest } from './Pinterest';
import { Twitter } from './Twitter';
import { LinkedIn } from './LinkedIn';
import { LeftArrow } from './LeftArrow';
import { RightArrow } from './RightArrow';
import { OpenMenu } from './OpenMenu';
import { CloseMenu } from './CloseMenu';
import { Search } from './Search';
import { PlayIcon } from './PlayIcon';
import { Location } from './Location';
import { IconRendererProps } from './Icons.types';
import { PauseIcon } from './PauseIcon';
import { OutlinedLeftArrow } from './OutlinedLeftArrow';
import { Caret } from './Caret';
import { PDF } from './PDF';
import { ChevronUp } from './ChevronUp';
import { ChevronDown } from './ChevronDown';
import { CloseIcon } from './CloseIcon';
import { FilterIcon } from './FilterIcon';
import { CheckBox } from './CheckBox';
import { CheckBoxFilled } from './CheckBoxFilled';
import { PriceRange } from './PriceRange';
import { Star } from './Star';
import { TenYearsBadge } from './TenYearsBadge';
import { UpArrowLarge } from './UpArrowLarge';
import { ZoomIn } from './ZoomIn';
import { ZoomOut } from './ZoomOut';
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from 'next-share';
import { SubscribeBell } from './SubscribeBell';
import { SubscribeBellRing } from './SubscribeBellRing';
import { CrossIcon } from './CrossIcon';
import { LeftPagination } from './LeftPagination';
import { RightPagination } from './RightPagination';
import { MapMarker } from './MapMarker';
import { Download } from './Download';
import Attachment from './Attachment';
import { DownArrow } from './DownArrowSM';
import { UpArrow } from './UpArrowSM';
const IconRenderer = ({ iconName, color }: IconRendererProps) => {
  switch (iconName) {
    case 'Instagram':
      return <Instagram />;
    case 'Facebook':
      return <Facebook />;
    case 'Pinterest':
      return <Pinterest />;
    case 'Twitter':
      return <Twitter />;
    case 'LinkedIn':
      return <LinkedIn />;
    case 'LeftArrow':
      return <LeftArrow />;
    case 'RightArrow':
      return <RightArrow />;
    case 'OpenMenu':
      return <OpenMenu />;
    case 'CloseMenu':
      return <CloseMenu />;
    case 'Search':
      return <Search />;
    case 'PlayIcon':
      return <PlayIcon />;
    case 'Location':
      return <Location />;
    case 'PauseIcon':
      return <PauseIcon />;
    case 'OutlinedLeftArrow':
      return <OutlinedLeftArrow />;
    case 'Caret':
      return <Caret />;
    case 'PDF':
      return <PDF />;
    case 'ChevronUp':
      return <ChevronUp />;
    case 'ChevronDown':
      return <ChevronDown />;
    case 'CloseIcon':
      return <CloseIcon />;
    case 'FilterIcon':
      return <FilterIcon />;
    case 'CheckBox':
      return <CheckBox />;
    case 'CheckBoxFilled':
      return <CheckBoxFilled />;
    case 'PriceRange':
      return <PriceRange />;
    case 'Star':
      return <Star />;
    case 'TenYearsBadge':
      return <TenYearsBadge />;
    case 'UpArrowLarge':
      return <UpArrowLarge />;
    case 'UpArrow':
      return <UpArrow />;
    case 'DownArrow':
      return <DownArrow />;
    case 'SubscribeBell':
      return <SubscribeBell color={color} />;
    case 'SubscribeBellRing':
      return <SubscribeBellRing color={color} />;
    case 'CrossIcon':
      return <CrossIcon />;
    case 'ZoomIn':
      return <ZoomIn />;
    case 'ZoomOut':
      return <ZoomOut />;
    case 'LeftPagination':
      return <LeftPagination color={color} />;
    case 'RightPagination':
      return <RightPagination color={color} />;
    case 'MapMarker':
      return <MapMarker />;
    case 'Download':
      return <Download />;
    case 'Attachment':
      return <Attachment />;
    default:
      return null;
  }
};

export default IconRenderer;

interface CTAIconRendererProps extends IconRendererProps {
  url: string;
  image_url: string;
  color: string;
  quote?: string;
  className?: string;
}

export const CTAIconRenderer: React.FC<CTAIconRendererProps> = ({
  iconName,
  url,
  image_url,
  color,
  quote,
  className,
}) => {
  switch (iconName) {
    case 'Facebook':
      return (
        <FacebookShareButton url={url} quote={quote}>
          <Facebook color={color} className={className} />
        </FacebookShareButton>
      );
    case 'Pinterest':
      return (
        <PinterestShareButton media={image_url} url={url}>
          <Pinterest color={color} className={className} />
        </PinterestShareButton>
      );
    case 'Twitter':
      return (
        <TwitterShareButton url={url} title={quote}>
          <Twitter color={color} className={className} />
        </TwitterShareButton>
      );
    case 'X':
      return (
        <TwitterShareButton url={url} title={quote}>
          <Twitter color={color} className={className} />
        </TwitterShareButton>
      );
    case 'LinkedIn':
      return (
        <LinkedinShareButton url={url}>
          <LinkedIn color={color} className={className} />
        </LinkedinShareButton>
      );
    case 'Linkedin':
      return (
        <LinkedinShareButton url={url}>
          <LinkedIn color={color} className={className} />
        </LinkedinShareButton>
      );
    default:
      return null;
  }
};

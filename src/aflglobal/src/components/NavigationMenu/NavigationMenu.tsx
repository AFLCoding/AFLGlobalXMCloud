import { NavigationMenuProps, navigationMenuProps } from './NavigationMenu.types';
import useIsMediumScreen from 'src/hooks/responsive/useIsMediumScreen';
import MobileNavigationMenu from 'src/core/molecules/MobileNavigationMenu/MobileNavigationMenu';
import DesktopNavigationMenu from 'src/core/molecules/DesktopNavigationMenu/DesktopNavigationMenu';

const NavigationMenu = () => {
  const props: NavigationMenuProps = navigationMenuProps;
  const isMediumScreen = useIsMediumScreen();
  return isMediumScreen ? <MobileNavigationMenu {...props} /> : <DesktopNavigationMenu {...props} />;
};

export default NavigationMenu;

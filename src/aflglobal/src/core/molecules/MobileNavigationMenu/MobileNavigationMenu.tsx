import { MenuItem, NavigationMenuProps } from 'components/NavigationMenu/NavigationMenu.types';
import { useState } from 'react';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import classes from './MobileNavigationMenu.module.scss';
import HamburgerButton from 'src/core/atoms/Buttons/HamburgerButton';

const MobileNavigationMenu = (props: NavigationMenuProps) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onNavigationItemClick = (event: Event, menuItem: MenuItem) => {
    if (menuItem?.Children?.length) {
      event.preventDefault();
      setSelectedMenuItem(menuItem);
      console.log(selectedMenuItem);
      // TODO: Code to open secondary navigation menu
    }
  };

  return (
    <>
      <HamburgerButton isOpen={isMenuOpen} onClick={setIsMenuOpen} />
      <nav>
        <ul className={`${classes.navigationItems} ${isMenuOpen && classes.menuOpen}`}>
          {props.fields.MenuItems.map((menuItem) => (
            <li key={menuItem.Id} className={classes.navigationItem}>
              <Link
                field={menuItem.Link}
                className={`${classes.navigationLink} ${
                  menuItem?.Children?.length && classes.withChevronIcon
                }`}
                onClick={(event) => onNavigationItemClick(event as unknown as Event, menuItem)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileNavigationMenu;

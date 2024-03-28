import { MenuItem, NavigationMenuProps } from 'components/NavigationMenu/NavigationMenu.types';
import classes from './DesktopNavigationMenu.module.scss';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { useState } from 'react';

const DesktopNavigationMenu = (props: NavigationMenuProps) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>();

  const onNavigationItemClick = (event: Event, menuItem: MenuItem) => {
    if (menuItem?.Children?.length) {
      event.preventDefault();
      setSelectedMenuItem(menuItem);
      // TODO: Code to open secondary navigation menu
    }
  };

  return (
    <nav className={classes.mainNavigation}>
      <ul className={classes.navigationItems}>
        {props.fields.MenuItems.map((menuItem) => (
          <li key={menuItem.Id} className={classes.navigationItem}>
            <Link
              field={menuItem.Link}
              className={`${classes.navigationLink} ${
                selectedMenuItem == menuItem && classes.active
              }`}
              onClick={(event) => onNavigationItemClick(event as unknown as Event, menuItem)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavigationMenu;

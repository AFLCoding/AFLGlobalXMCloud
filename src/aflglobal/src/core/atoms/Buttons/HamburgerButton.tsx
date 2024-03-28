import classes from './Buttons.module.scss';
import { HamburgerButtonProps } from './Buttons.types';

const HamburgerButton = (props: HamburgerButtonProps) => {
  return (
    <div className={classes.hamburgerButton} onClick={() => props.onClick(!props.isOpen)}>
      <span className={`${classes.menuIcon} ${props.isOpen && classes.open}`}></span>
    </div>
  );
};

export default HamburgerButton;

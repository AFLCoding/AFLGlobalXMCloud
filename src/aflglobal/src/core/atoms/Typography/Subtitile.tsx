import { Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import classes from './Typography.module.scss';

const Subtitle = (props: { field: TextField }) => {
  return <Text tag="h3" {...props} className={classes.title} />;
};

export default Subtitle;

import {
  Link,
  LinkField,
  LinkFieldValue,
  Text,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import styles from './Button.module.scss';
import IconRenderer from '../Icons';

export type CommonButtonProps = {
  field: TextField | LinkField;
  variant?: 'primary' | 'outlined';
  onClick?: () => void;
  prefixIcon?: string;
  suffixIcon?: string;
  className?: string;
};

const CommonButton = (props: CommonButtonProps) => {
  const isLinkButton = Boolean((props.field as LinkField)?.value?.href);

  const button = (
    <button
      className={`btn ${styles[props.variant || 'primary']} ${styles.commonButton} ${
        props.className
      }`}
      onClick={props.onClick}
    >
      {props.prefixIcon && <IconRenderer iconName={props.prefixIcon} />}
      <Text
        tag="span"
        field={
          isLinkButton
            ? { value: (props.field.value as LinkFieldValue).text }
            : (props.field as TextField)
        }
      />
      {props.suffixIcon && <IconRenderer iconName={props.suffixIcon} />}
    </button>
  );

  return isLinkButton ? <Link field={props.field as LinkField}>{button}</Link> : button;
};

export default CommonButton;

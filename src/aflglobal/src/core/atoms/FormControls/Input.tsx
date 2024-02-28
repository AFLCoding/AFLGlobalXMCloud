import { useFormContext } from 'react-hook-form';
import { InputProps } from './FormControls.types';
import styles from './FormControls.module.scss';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

const Input = (props: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = (errors[props.name]?.message as string) || '';

  return (
    <div
      className={`form-group ${styles.formControl} ${props.className} ${
        props.required ? styles.required : ''
      }`}
    >
      <div>
        <Text tag="label" htmlFor={props.name} field={props.label} />
        <span className={styles.errorMessage}>{errorMessage}</span>
      </div>
      <input
        {...register(props.name)}
        id={props.name}
        type={props.type || 'text'}
        maxLength={!props.type || props.type == 'text' ? props.max : undefined}
        max={props.type == 'number' ? props.max : undefined}
        className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
        required={props.required}
      />
    </div>
  );
};

export default Input;

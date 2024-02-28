import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';


export type Option = {
  value: string | number;
  label: string;
};

export type FormControlProps = {
  name: string;
  label?: TextField;
  className?: string;
  required?: boolean;
};

export type InputProps = {
  type?: string;
  max?: number;
} & FormControlProps;

export type SelectProps = {
  options: Array<Option>;
} & FormControlProps;

export type TextAreaProps = {
  rows?: number;
  max?: number;
} & FormControlProps;

export type RadioGroupProps = {
  options: Array<Option>;
  radioButtonClassName?: string;
} & FormControlProps;

export type CheckboxGroupProps = {
  options: Array<Option>;
  checkboxClassName?: string;
  maxCheckboxesInColumn?: number;
} & FormControlProps;

export type ScaleProps = {
  name: string;
  label?: TextField | JSX.Element;
  className?: string;
  options?: Array<Option>;
};



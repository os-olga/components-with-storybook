export type CheckboxProps = {
  label?: string;
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

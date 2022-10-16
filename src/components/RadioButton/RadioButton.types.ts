export type RadioButtonProps = {
  label?: string;
  value: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
};

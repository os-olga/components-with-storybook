export type ToggleProps = {
  checked: boolean;
  label?: string;
  style?: React.CSSProperties;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

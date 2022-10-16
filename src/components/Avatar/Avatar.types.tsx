export type AvatarProps = {
  firstname?: string;
  lastname?: string;
  email?: string;
  image?: string;
  size: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
};

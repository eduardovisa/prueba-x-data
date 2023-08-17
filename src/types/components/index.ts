export type InputProps = {
  key: string;
  type: string;
  placeholder: string;
  label?: string;
};

export type InputPasswordProps = {
  isPasswordVisible: boolean;
  setPasswordVisibility: () => void;
};

export type HeadingProps = {
  label: string;
  fontSize: string;
  fontWeight: string;
  textColor: string;
  spacing: string;
  mb: string;
};

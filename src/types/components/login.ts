export type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  label?: string;
};

export type InputPasswordProps = {
  isPasswordVisible: boolean;
  setPasswordVisibility: () => void;
};

export type LoginLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

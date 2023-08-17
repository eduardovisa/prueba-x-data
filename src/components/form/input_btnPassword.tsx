import { EyeCLose, EyeOpen } from '@/svg';
import { InputPasswordProps } from '@/types/components';

const InputPassword: React.FC<InputPasswordProps> = ({
  isPasswordVisible,
  setPasswordVisibility,
}) => {

  return (
    <button
      className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
      onClick={setPasswordVisibility}
    >
      {isPasswordVisible ? <EyeCLose /> : <EyeOpen />}
    </button>
  );
};

export default InputPassword;
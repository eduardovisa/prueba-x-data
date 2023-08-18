import { useState } from 'react';
import { InputProps } from '@/types/components/login';
import { setPreState } from '@/utils/functions/login';
import InputPassword from './input_btnPassword';

const Input = (props: InputProps) => {
  const { name, type, label, placeholder, ...rest } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPasswordType = (type == 'password');

  return (
    <div>
      {label && (
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <label
              htmlFor={name}
              className="block mb-1 text-[12px] text-input-label font-[700] font-mulish tracking-[0.3px] leading-normal"
            >
              {label}
            </label>
          </div>
          {isPasswordType && <a href="#" className="text-[10px] text-secondary-gray-light">Forgot password?</a>}
        </div>
      )}
      <div className="relative">
        <input
          type={isPasswordType ? (isPasswordVisible ? 'text' : 'password') : type}
          name={name}
          id={name}
          placeholder={placeholder}
          required={false}
          className="bg-input-bg border border-input-border rounded-[8px] placeholder-input-placeholder/40 h-42 w-316 sm:w-536 lg:w-316 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
        />
        {isPasswordType && (
          <InputPassword
            isPasswordVisible={isPasswordVisible}
            setPasswordVisibility={() => setPreState(setIsPasswordVisible)}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
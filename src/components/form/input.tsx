import { InputProps } from '@/types/components';

const Input = (props: InputProps) => {
  const { key, type, label, placeholder, required, ...rest } = props;

  return (
    <div>
      {label && (
        <label
          htmlFor={key}
          className="block mb-1 text-[12px] text-input-label font-[700] font-mulish tracking-[0.3px] leading-normal"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={key}
        id={key}
        placeholder={placeholder}
        className="bg-input-bg border border-input-border rounded-[8px] placeholder-input-placeholder/40 h-42 sm:w-316 md:w-536 lg:w-316 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required={required}
      />
    </div>
  );
};

export default Input;

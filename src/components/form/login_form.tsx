import Input from './input';
import { loginUser } from '@/utils/functions/login';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';

const Login = () => {
  const router = useRouter();

  const redirigir = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    loginUser(event.target) && router.push('/overview');
  };

  return (
    <form
      className="space-y-4 sm:space-y-6"
      onSubmit={(event) => redirigir(event)}
    >
      <Input
        name="email"
        type="text"
        placeholder="Email address"
        label="EMAIL"
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        label="PASSWORD"
      />
      <button
        type="submit"
        className="w-316 h-48 sm:w-536 lg:w-316 rounded-[8px] text-white bg-primary-blue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Log In
      </button>
      <div id="errorEmail"></div>
      <div className="flex items-center justify-center">
        <p className="text-[14px] font-light text-input-label">
          Don’t have an account yet?{' '}
          <a
            href="#"
            className="font-[14px] font-[600] hover:underline text-primary-blue"
          >
            Sign up
          </a>
        </p>
      </div>
    </form>
  );
};

export default Login;

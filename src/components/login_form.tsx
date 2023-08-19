import { LogoLogin } from '@/svg/logo';
import Input from './form/input';
import LoginLayout from './layouts/login_layout';
import { loginUser } from '@/utils/functions/login';

const Login = () => {
  return (
    <LoginLayout>
      <a href="/" className="flex items-center mb-2">
        <LogoLogin />
      </a>
      <h1 className="text-[19px] font-[700] text-secondary-gray/70 tracking-[0.4px] mb-6 leading-normal">
        Dashboard Kit
      </h1>
      <h1 className="text-[24px] font-[700] text-primary-black tracking-[0.3px] mb-3 leading-normal">
        Log In to Dashboard Kit
      </h1>
      <h1 className="text-[14px] font-[400] text-secondary-gray-light tracking-[0.3px] mb-6 leading-normal">
        Enter your email and password below
      </h1>
      <form
        className="space-y-4 sm:space-y-6"
        onSubmit={(event) => loginUser(event)}
      >
        <Input
          name="email"
          type="email"
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
    </LoginLayout>
  );
};

export default Login;

import { LogoLogin } from '@/svg/logo';
import { LoginLayoutProps } from '@/types/components/login';

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <section className="bg-primary-bg-black">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="bg-white rounded-lg shadow w-380 h-710 sm:w-600 sm:h-582 lg:w-380">
          <div className="h-full bg-[#fff] rounded-[8px] p-6 flex flex-col items-center justify-center">
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
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginLayout;

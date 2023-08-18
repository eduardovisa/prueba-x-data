import { LogoNav } from '@/svg/logo';
import { NavLayoutProps } from '@/types/components/dashboard';

const NavLayout = ({ children }: NavLayoutProps) => {
  return (
    <div className="flex">
      <div className="flex flex-none h-screen sm:w-[76px] lg:w-[255px] bg-primary-bg-black justify-center">
        <div className="flex sm:mb-2 sm:mt-6">
          <div className="flex-auto hidden sm:block">
            <a href="#">
              <LogoNav />
            </a>
          </div>
          <div className="hidden lg:block flex-auto">
            <h1 className="text-[19px] font-[700] text-secondary-gray/70 tracking-[0.4px] leading-normal ml-3">
              Dashboard Kit
            </h1>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex-auto">{children}</div>
    </div>
  );
};

export default NavLayout;

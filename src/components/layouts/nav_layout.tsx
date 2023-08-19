import { LogoDesktopNav } from '@/svg/logo';
import { NavLayoutProps } from '@/types/components/nav';
import menuDesktop from '../nav/nav_desktop';
import routes from '@/utils/data/routes';

const NavLayout = ({ children }: NavLayoutProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-none sm:w-[76px] lg:w-[255px] bg-primary-bg-black">
        <div className="flex sm:mb-6 sm:mt-6 items-center justify-center">
          <div className="flex-none w-20 hidden sm:block">
            <a href="/" className="flex items-center justify-center">
              <LogoDesktopNav />
            </a>
          </div>
          <div className="hidden lg:block flex-1">
            <h1 className="text-[19px] font-[700] text-secondary-gray/70 tracking-[0.4px] leading-normal">
              Dashboard Kit
            </h1>
          </div>
        </div>
        <ul className="mt-6">{menuDesktop(routes)}</ul>
      </div>
      <div className="flex-auto">{children}</div>
    </div>
  );
};

export default NavLayout;

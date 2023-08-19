import { BellIcon } from '@/svg/header';
import { LogoMobileNav } from '@/svg/logo';

const MobileHeader = () => {
  return (
    <div className="bg-primary-bg-black h-[60px] sm:hidden flex justify-between items-center p-4">
      <div className="flex-1 cursor-pointer">
        <a href="/">
          <LogoMobileNav />
        </a>
      </div>
      <div className="flex-none cursor-pointer">
        <BellIcon />
      </div>
    </div>
  );
};

export default MobileHeader;

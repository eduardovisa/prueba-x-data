import { DividerVerticalIcon } from '@/svg/divider';
import { HeaderProps } from '@/types/components/header';
import { BellIcon, CircleUserImg, SearchIcon } from '@/svg/header';

const DesktopHeader = ({ label, userName, userImg }: HeaderProps) => {
  const imageClass = userImg
    ? { backgroundImage: `url(${userImg})` }
    : { background: 'black' };

  return (
    <div className="hidden sm:inline-flex flex w-full">
      <div className="flex-1 items-center">
        <h1 className="text-[24px] font-[700] text-primary-black tracking-[0.3px] leading-normal">
          {label}
        </h1>
      </div>
      <div className="flex flex-none justify-end items-center">
        <div className="pr-5">
          <SearchIcon />
        </div>
        <div className="pr-5">
          <BellIcon />
        </div>
        <div className="pr-6 pl-6">
          <DividerVerticalIcon />
        </div>
        <div className="pr-5">
          <h1 className="text-[14px] font-[600] text-primary-black tracking-[0.2px] leading-normal">
            {userName}
          </h1>
        </div>
        <div
          className={`rounded-full bg-center bg-cover bg-no-repeat`}
          style={{ ...imageClass }}
        >
          <CircleUserImg />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;

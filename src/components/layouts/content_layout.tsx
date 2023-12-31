import { LayoutProps } from '@/types/components/content_layout';
import NavLayout from './nav_layout';
import DesktopHeader from '../header/header_desktop';
import { HeaderProps } from '@/types/components/header';
import MobileHeader from '../header/header_mobile';

const ContentLayout = ({
  children,
  label,
  userName,
  userImg,
}: LayoutProps & HeaderProps) => {
  return (
    <NavLayout>
      <div className="h-full sm:p-10 bg-primary-gray">
        <MobileHeader />
        <DesktopHeader label={label} userName={userName} userImg={userImg} />
        {children}
      </div>
    </NavLayout>
  );
};

export default ContentLayout;

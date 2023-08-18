import { DividerIcon } from '@/svg/divider';
import RoutesProps from '@/types/routes_types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navList = (routes: RoutesProps[], isExtra?: boolean) => {
  const router = useRouter();
  let nav_list: JSX.Element[] = [];

  isExtra && nav_list.push(<DividerIcon key={`divider-nav`} />);

  routes.map((route, index) => {
    nav_list.push(
      <Link
        key={`${isExtra ? 'extra' : 'main'}-link-route-${index}`}
        href={route.path}
      >
        <li className={`flex mb-2 mt-10 items-center justify-center`}>
          <div className="flex-none w-20 hidden sm:block">
            <div className="flex items-center justify-center">{route.icon}</div>
          </div>
          <div className="hidden lg:block flex-1">
            <h1 className="text-[16px] font-[400] text-secondary-gray/70 tracking-[0.2px] leading-normal">
              {route.label}
            </h1>
          </div>
        </li>
      </Link>
    );
  });

  return nav_list;
};

export default navList;

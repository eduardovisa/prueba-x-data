import { useRouter } from 'next/router';
import { DividerIcon } from '@/svg/divider';
import { NavIcon } from '@/svg/routes_icons';
import Link from 'next/link';
import RoutesProps from '@/types/routes_types';

const navList = (routes: RoutesProps[], isExtra?: boolean) => {
  const router = useRouter();
  let nav_list: JSX.Element[] = [];

  isExtra && nav_list.push(<DividerIcon key={`divider-nav`} />);

  routes.map((route, index) => {
    nav_list.push(
      <Link
        key={`${isExtra ? 'extra' : 'main'}-link-route-${index} w-screen`}
        href={route.path}
      >
        <li
          className={`flex items-center justify-center ${
            router.pathname == route.path && 'border-l-4 border-primary-white'
          } lg:w-[255px] sm:h-[56px]`}
        >
          <div className="flex-none w-20 hidden sm:block">
            <div className="flex items-center justify-center text-white">
              <NavIcon
                children={route.icon}
                color={`${router.pathname == route.path ? 'white' : '#9FA2B4'}`}
                opacity={`${router.pathname == route.path ? '1' : '0.4'}`}
              />
            </div>
          </div>
          <div className="hidden lg:block flex-1">
            <h1
              className={`text-[16px] font-[400] leading-normal ${
                router.pathname == route.path
                  ? 'text-primary-white'
                  : 'text-secondary-gray/70 tracking-[0.2px]'
              }`}
            >
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

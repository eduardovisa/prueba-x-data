import { DividerHorizontalIcon } from '@/svg/divider';
import { NavIcon } from '@/svg/routes_icons';
import Link from 'next/link';
import RoutesProps from '@/types/data/routes_types';
import { useRouter } from 'next/router';

const NavList = (routes: RoutesProps[], isExtra?: boolean) => {
  const router = useRouter();
  let nav_list: JSX.Element[] = [];

  isExtra && nav_list.push(<DividerHorizontalIcon key={`divider-nav`} />);

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
                color={`${router.pathname == route.path ? 'white' : '#9FA2B4'}`}
                opacity={`${router.pathname == route.path ? '1' : '0.4'}`}
              >
                {route.icon}
              </NavIcon>
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

export default NavList;

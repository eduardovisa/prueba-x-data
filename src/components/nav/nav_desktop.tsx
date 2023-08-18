import { JSX } from 'react';
import { checkRoutes } from '@/utils/functions/nav';
import navList from './nav_list';
import RoutesProps from '@/types/data/routes_types';

const menuDesktop = (routes: RoutesProps[]) => {
  let nav_list: JSX.Element[] = [];
  const newRoutes = checkRoutes(routes);

  nav_list = nav_list.concat(
    navList(newRoutes.mainRoutes),
    navList(newRoutes.extraRoutes, true)
  );

  return nav_list;
};

export default menuDesktop;

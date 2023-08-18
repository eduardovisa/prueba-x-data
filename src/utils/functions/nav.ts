import RoutesProps from '@/types/data/routes_types';

export const checkRoutes = (routes: RoutesProps[]) => {
  let mainRoutes: RoutesProps[] = [];
  let extraRoutes: RoutesProps[] = [];

  routes.map((route) => {
    if (!route.isExtra) {
      mainRoutes.push(route);
    } else {
      extraRoutes.push(route);
    }
  });

  return { mainRoutes, extraRoutes };
};

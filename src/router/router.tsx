import { JSX } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import HomePage from '@/pages/home';
import { Login } from '@/pages/login';
import ContractTable from '@/pages/contractTable';
import FormNewHouse from '@/pages/home/components/formNewHouse';
import FormNewOwner from '@/pages/home/components/formNewOwner';
import FormNewTenant from '@/pages/home/components/formNewTenant';
import FormNewContract from '@/pages/home/components/formNewContract';
import TerminatedContracts from '@/pages/terminatedContracts/index.tsx';

export type RouteType = {
  path: string;
  element?: JSX.Element;
  options?: Omit<RouteObject, 'path' | 'element' | 'children'>;
  permissions?: string[];
  children?: RouteType[];
} & Partial<RouteObject>;

export function routesResolver(
  routes: RouteType[],
  accountPermissions: string[],
): RouteObject[] {
  return routes.reduce<RouteObject[]>((acc, route) => {
    const { path, element, options, children, permissions } = route;

    if (permissions) {
      const hasPermission = permissions.some((permission) =>
        accountPermissions.includes(permission),
      );
      if (!hasPermission) {
        return [
          ...acc,
          {
            path,
            element: <Login />,
            children: children
              ? routesResolver(children, accountPermissions)
              : undefined,
            ...options,
          } as RouteObject,
        ];
      }
    }

    return [
      ...acc,
      {
        path,
        element,
        children: children
          ? routesResolver(children, accountPermissions)
          : undefined,
        ...options,
      } as RouteObject,
    ];
  }, []);
}

export function createRoutes() {
  const routes: RouteType[] = [
    {
      path: '/',
      element: <Navigate to="/login" replace />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/home',
      element: <HomePage />,
    },
    {
      path: '/newContract',
      element: <FormNewContract />,
    },
    {
      path: '/contracts/active',
      element: <ContractTable />,
    },
    {
      path: '/contracts/terminated',
      element: <TerminatedContracts />,
    },
    {
      path: '/newHouse',
      element: <FormNewHouse />,
    },
    {
      path: '/newOwner',
      element: <FormNewOwner />,
    },
    {
      path: '/newTenant',
      element: <FormNewTenant />,
    },
  ];

  return routes;
}

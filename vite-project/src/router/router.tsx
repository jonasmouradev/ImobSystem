import { Navigate, RouteObject } from "react-router-dom";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import TerminatedContracts from "../components/TerminatedContracts";
import FormNewContract from "../components/FormNewContract";
import ContractTable from "../components/activeContracts/ContractTable";
import FormNewHouse from "../components/FormNewHouse";
import FormNewOwner from "../components/FormNewOwner";
import FormNewInquilino from "../components/FormNewTenant";
import React from "react";

export type RouteType = {
  path: string;
  element?: JSX.Element;
  options?: Omit<RouteObject, "path" | "element" | "children">;
  permissions?: string[];
  children?: RouteType[];
} & Partial<RouteObject>;

export function routesResolver(
  routes: RouteType[],
  accountPermissions: string[]
): RouteObject[] {
  return routes.reduce<RouteObject[]>((acc, route) => {
    const { path, element, options, children, permissions } = route;

    if (permissions) {
      const hasPermission = permissions.some((permission) =>
        accountPermissions.includes(permission)
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
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/newContract",
      element: <FormNewContract />,
    },
    {
      path: "/activeContracts",
      element: <ContractTable />,
    },
    {
      path: "/terminated",
      element: <TerminatedContracts />,
    },
    {
      path: "/newHouse",
      element: <FormNewHouse />,
    },
    {
      path: "/newOwner",
      element: <FormNewOwner />,
    },
  ];

  return routes;
}

import { LoginPage } from "../features/auth/pages/LoginPage";
import { UserPage } from "../features/users/pages/UserPage";
import type { RouteObject } from "react-router-dom";
export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/users",
    element: <UserPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

import { LoginPage } from "../features/auth/pages/LoginPage";
import { HomePage } from "../features/home/pages/HomePage";
import { HomePageTest } from "../features/home/pages/HomePageTest";
import { UserPage } from "../features/users/pages/UserPage";
import type { RouteObject } from "react-router-dom";
export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
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

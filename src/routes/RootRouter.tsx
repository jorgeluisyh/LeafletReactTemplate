import { NotFoundPage } from '../shared/pages/NotFoundPage'
import { createBrowserRouter, Router  } from 'react-router-dom'
import { publicRoutes } from './PublicRoutes'

export const router = createBrowserRouter([
  ...publicRoutes,
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

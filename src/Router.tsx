import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import { DefaultLayout } from './layout/DefaultLayout'

const HomePage = lazy(() => import('@/pages/Home.page'))
const SamplePage = lazy(() => import('@/pages/Sample.page'))
const SamplePage2 = lazy(() => import('@/pages/Sample2.page'))
const Settings = lazy(() => import('@/pages/Settings.page'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/sample',
        element: <SamplePage />,
      },
      {
        path: '/sample2',
        element: <SamplePage2 />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}

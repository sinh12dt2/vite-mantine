import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home.page'
import { SamplePage } from './pages/Sample.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sample',
    element: <SamplePage />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}

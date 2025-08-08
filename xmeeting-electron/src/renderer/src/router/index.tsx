import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '@renderer/views/Login'
import MainLayout from '@renderer/layout/MainLayout'
import ErrorBoundary from '@renderer/layout/ErrorBoundary'
import Home from '@renderer/views/Home'
import LoginLayout from '@renderer/layout/LoginLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/',
        element: <LoginLayout />,
        children: [
          {
            index: true,
            element: <Home />
          }
        ]
      }
    ]
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}

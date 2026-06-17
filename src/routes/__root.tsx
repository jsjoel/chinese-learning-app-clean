import { createRootRoute, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'

export const Route = createRootRoute({
  component: () => (
    <div className="w-full h-screen">
      <Outlet />
    </div>
  ),
})

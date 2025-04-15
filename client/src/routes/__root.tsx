import { Navbar } from "@/components/core";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  ),
});

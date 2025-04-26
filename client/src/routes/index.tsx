import { Category, Hero } from "@/components/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Hero />
      <Category text="Men" />
    </>
  );
}

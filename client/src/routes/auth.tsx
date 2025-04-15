import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return <main>article</main>;
}

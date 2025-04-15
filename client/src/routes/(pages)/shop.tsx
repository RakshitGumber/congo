import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(pages)/shop")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /(pages)/shop!";
}

import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/oauth")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /oauth!";
}

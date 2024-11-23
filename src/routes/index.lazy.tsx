import { createLazyFileRoute } from "@tanstack/react-router";
import { SupporterSignUp } from "../components/SupporterSignUp";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SupporterSignUp />;
}

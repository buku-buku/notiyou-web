import { createFileRoute } from "@tanstack/react-router";
import { SupporterSignUp } from "../components/SupporterSignUp";

type SupporterSignUpSearch = {
  user: string;
};

export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: (search): SupporterSignUpSearch => {
    return {
      user: (search.user as string) || "",
    };
  },
});

function RouteComponent() {
  return <SupporterSignUp />;
}

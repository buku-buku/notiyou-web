import { createFileRoute } from "@tanstack/react-router";
import { SupporterSignUp } from "../components/SupporterSignUp";

import { z } from "zod";

const supporterSignUpSchema = z.object({
  user: z.string(),
});

type SupporterSignUpSearch = z.infer<typeof supporterSignUpSchema>;

export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: (search): SupporterSignUpSearch =>
    supporterSignUpSchema.parse(search),
});

function RouteComponent() {
  return <SupporterSignUp />;
}

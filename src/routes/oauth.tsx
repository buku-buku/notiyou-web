import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useEffect } from "react";
import { z } from "zod";
import { singUpWithKakao } from "../service/service";
const oauthSchema = z.object({
  code: z.string(),
});

type OauthSearch = z.infer<typeof oauthSchema>;

export const Route = createFileRoute("/oauth")({
  component: RouteComponent,
  validateSearch: (search): OauthSearch => oauthSchema.parse(search),
});

function RouteComponent() {
  const { code } = useSearch({ from: "/oauth" });

  useEffect(() => {
    const supabaseLogin = async () => {
      const user = await singUpWithKakao(code);
      console.log(user);
    };

    supabaseLogin();
  }, [code]);

  return "Hello /oauth!";
}

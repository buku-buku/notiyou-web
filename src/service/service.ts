import { supabase } from "./client";

const getKakaoToken = async (code: string) => {
  const result = await fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
      client_secret: import.meta.env.VITE_KAKAO_CLIENT_SECRET,
      redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
      code,
    }),
  });

  const { id_token } = await result.json();

  return id_token;
};

export const singUpWithKakao = async (code: string) => {
  const token = await getKakaoToken(code);

  const {
    data: { session },
    error,
  } = await supabase.auth.signInWithIdToken({
    provider: "kakao",
    token: token,
  });

  if (!session) {
    throw new Error("Failed to sign in with Kakao");
  }

  return { session, error };
};

export const connectWithChallenger = async (challengerId: string) => {
  console.log(challengerId + "connected to supporters");
};

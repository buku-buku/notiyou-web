import { supabase } from "./client";

export const connectChallenger = async (userId: string) => {
  console.log(userId + "connected to supporters");
};

const getKakaoToken = async () => {
  const result = await fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST",
  });

  const { id_token } = await result.json();

  return id_token;
};

export const singUpWithKakao = async () => {
  const token = await getKakaoToken();

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

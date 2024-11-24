import { useSearch } from "@tanstack/react-router";
import { challenger } from "../service/service";

// Kakao SDK를 불러오기 위한 타입 선언
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export const SupporterSignUp = () => {
  const userToken = useSearch({
    from: "/",
    select: (search) => search.user,
  });

  const handleSignUpSupporter = async () => {
    const user = await challenger.getUser(userToken);

    function loginWithKakao() {
      window.Kakao.Auth.authorize({
        redirectUri: import.meta.env.VITE_REDIRECT_URI,
      });
    }

    loginWithKakao();
    await Promise.resolve({
      userId: user.id,
    });
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full flex justify-center items-center">
        <button
          className="py-3 px-4 border border-gray-400"
          onClick={handleSignUpSupporter}
        >
          조력자 회원가입
        </button>
      </div>
    </section>
  );
};

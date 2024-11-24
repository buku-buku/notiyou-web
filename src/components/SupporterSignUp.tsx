import { useSearch } from "@tanstack/react-router";

// Kakao SDK를 불러오기 위한 타입 선언
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export const SupporterSignUp = () => {
  const challengerId = useSearch({
    from: "/",
    select: (search) => search.challengerId,
  });

  const handleSignUpSupporter = async () => {
    console.log("save in local storage" + challengerId);
    function loginWithKakao() {
      window.Kakao.Auth.authorize({
        redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
      });
    }

    loginWithKakao();
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

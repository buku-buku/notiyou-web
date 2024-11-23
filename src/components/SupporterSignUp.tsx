import { useSearch } from "@tanstack/react-router";
import { challenger } from "../service/service";

export const SupporterSignUp = () => {
  const userToken = useSearch({
    from: "/",
    select: (search) => search.user,
  });

  const handleSignUpSupporter = async () => {
    const user = await challenger.getUser(userToken);

    function loginWithKakao() {
      Kakao.Auth.authorize({
        redirectUri: "http://localhost:5173/oauth",
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

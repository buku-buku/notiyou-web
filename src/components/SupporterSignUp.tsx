import { useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { challenger } from "../service/service";

export const SupporterSignUp = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const userToken = useSearch({
    from: "/",
    select: (search) => search.user,
  });

  console.log(userId);

  useEffect(() => {
    console.log(userToken);

    const getUser = async () => {
      const user = await challenger.getUser();
      setUserId(user.id);
    };

    getUser();
  }, [userToken]);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full flex justify-center items-center">
        <button className="py-3 px-4 border border-gray-400">
          조력자 회원가입
        </button>
      </div>
    </section>
  );
};

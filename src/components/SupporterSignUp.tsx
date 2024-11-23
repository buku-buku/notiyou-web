import { useSearch } from "@tanstack/react-router";

export const SupporterSignUp = () => {
  const search = useSearch({
    from: "/",
    select: (search) => search.user,
  });

  console.log(search);

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

import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Header: NextPage = () => {
  const router = useRouter();

  const onClientLogoComponentClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <header className="box-border w-[1751px] h-[193px] overflow-hidden flex flex-row items-center justify-between py-5 px-2.5 border-b-[2px] border-solid border-black">
      <a
        className="[text-decoration:none] flex flex-col items-center justify-center cursor-pointer"
        onClick={onClientLogoComponentClick}
      >
        <img
          className="relative w-[220px] h-[153px] object-cover"
          alt=""
          src="/client-logo@2x.png"
        />
      </a>
      <img
        className="relative w-[130px] h-[130px] overflow-hidden shrink-0"
        alt=""
        src="/icon--ionicons--sharp--menusharp1.svg"
      />
    </header>
  );
};

export default Header;

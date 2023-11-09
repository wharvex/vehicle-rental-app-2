import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ClientLogoComponent: NextPage = () => {
  const router = useRouter();

  const onClientLogoComponentClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
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
  );
};

export default ClientLogoComponent;

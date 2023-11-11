import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

type LinkHamburgerBottomContaineType = {
  linkText?: string;
  linkPage?: string;
};

const LinkHamburgerBottomContaine: NextPage<
  LinkHamburgerBottomContaineType
> = ({ linkText = "Link / Hamburger / Bottom", linkPage = "link page"}) => {
  
  const router = useRouter();
  const onLinkClick = useCallback(() => {
    router.push(linkPage);
  }, [router]);

  return (
    <div className="flex flex-row items-center justify-center py-[50px] px-0 box-border text-center text-21xl text-black font-reg-medium self-stretch cursor-pointer"
      onClick={onLinkClick}>
      <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit] flex items-center justify-center w-[340px] shrink-0">
        {linkText}
      </a>
    </div>
  );
};

export default LinkHamburgerBottomContaine;
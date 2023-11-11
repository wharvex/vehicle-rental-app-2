import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

type LinkHamburgerNonBottomContType = {
  linkText?: string;
  linkPage?: string;
};


const LinkHamburgerNonBottomCont: NextPage<LinkHamburgerNonBottomContType> = ({
  linkText = "Link / Hamburger / Non-Bottom", linkPage = "link page"
}) => {

  const router = useRouter();
  const onLinkClick = useCallback(() => {
    router.push(linkPage);
  }, [router]);
  
  return (
    <div className="box-border flex flex-row items-center justify-center py-[50px] px-0 text-center text-21xl text-black font-reg-medium self-stretch border-b-[1px] border-solid border-black cursor-pointer"
      onClick={onLinkClick}>
      <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit] flex items-center justify-center w-[340px] shrink-0">
        {linkText}
      </a>
    </div>
  );
};

export default LinkHamburgerNonBottomCont;
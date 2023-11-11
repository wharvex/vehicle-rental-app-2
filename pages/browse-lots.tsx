import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import MenuHamburger from "../components/hamburger"
import PortalDrawer from "../components/portal-drawer";

const BrowseLots: NextPage = () => {
  const router = useRouter();
  const [isMenuHamburgerOpen, setMenuHamburgerOpen] = useState(false);

  const onClientLogoComponentClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const openProfileHamburger = useCallback(() => {
    setMenuHamburgerOpen(true);
  }, []);

  const closeMenuHamburger = useCallback(() => {
    setMenuHamburgerOpen(false);
  }, []);

  const onBrowseClick = useCallback(() => {
    router.push("/browse-zip");
  }, [router]);

  const onContinueClick = useCallback(() => {
    router.push("/browse-dates");
  }, [router]); 

  const onBackToHomeClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <>
      <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start py-2.5 px-36 box-border gap-[10px]">
      <header className="self-stretch box-border h-[193px] overflow-hidden shrink-0 flex flex-row items-center justify-between py-5 px-2.5 border-b-[2px] border-solid border-black">
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
        <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onClick={openProfileHamburger}
          >
          <img
            className="relative w-[130px] h-[130px] overflow-hidden shrink-0"
            alt=""
            src="/icon--ionicons--sharp--menusharp1.svg"
          />
        </div>
      </header>        
      <main className="self-stretch flex flex-col items-center justify-start gap-[10px] text-center text-9xl text-black font-reg-heading">
          <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
            <div className="flex flex-col items-center justify-start gap-[10px]">
              Step 1: Enter zip code
            </div>
            <div className="flex flex-col items-center justify-start gap-[10px]">
              Step 2: Enter dates
            </div>
            <div className="flex flex-col items-center justify-start gap-[10px]">
              Step 3: Choose lots
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[75px] text-21xl">
            <div className="self-stretch flex flex-row items-center justify-center pt-[100px] px-0 pb-[25px] text-45xl">
              <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[100%] italic font-medium font-inherit">
                Choose car lots
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                  Pickup lot*:
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-17xl">
                <div className="w-[280px] h-[153px] flex flex-col items-start justify-start">
                    <select name="pickup-lot" id="pickup-lot" required> 
                        <option value="albany">Albany</option> 
                        <option value="rhinebeck">Rhinebeck</option> 
                        <option value="poughkeepsie">Poughkeepsie</option> 
                        <option value="westchester">Westchester</option> 
                    </select>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                  Return lot*:
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-17xl">
                <div className="w-[280px] h-[153px] flex flex-col items-start justify-start">
                    <select name="return-lot" id="return-lot" required> 
                        <option value="albany">Albany</option> 
                            <option value="rhinebeck">Rhinebeck</option> 
                            <option value="poughkeepsie">Poughkeepsie</option> 
                            <option value="westchester">Westchester</option> 
                    </select>
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
                onClick={onContinueClick}>
                    <div className="box-border w-[214px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                    <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                        Continue
                    </div>
                    </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
                    onClick={onBackToHomeClick}>
                    <div className="box-border w-[314px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                        <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                            Back to Home
                        </div>
                    </div>
                </button>
            </div>
          </div>
        </main>
        <div className="self-stretch flex-1 bg-white" />
        <footer className="self-stretch overflow-hidden shrink-0 flex flex-row items-center justify-between py-5 px-2.5 text-center text-13xl text-black font-hfb-extra-small border-t-[2px] border-solid border-black">
          <div className="w-[417px] flex flex-row items-center justify-center p-2.5 box-border">
            <div className="flex-1 relative tracking-[0.5px] leading-[100%] font-medium">
              <p className="m-0">{`© 2023 “Borrow Our Cars” &`}</p>
              <p className="m-0">“:thumbsup: design”</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="relative w-44 h-[184px] object-cover"
              alt=""
              src="/imageour-logo1@2x.png"
            />
          </div>
          <div className="flex flex-row items-center justify-center p-2.5">
            <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit] flex items-center justify-center w-[86px] shrink-0">
              About
            </a>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-31xl flex flex-col items-center justify-center">
            <div className="rounded-[90px] box-border w-[214px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
              <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                Support
              </div>
            </div>
          </button>
        </footer>
      </div>
        {isMenuHamburgerOpen && (
          <PortalDrawer
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Right"
            onOutsideClick={closeMenuHamburger}
          >
            <MenuHamburger onClose={closeMenuHamburger} />
          </PortalDrawer>
        )}
    </>
  );
};

export default BrowseLots;
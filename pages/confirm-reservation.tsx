import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ConfirmReservation: NextPage = () => {
  const router = useRouter();

  const onClientLogoComponentClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[2055px] overflow-y-auto flex flex-col items-start justify-start py-2.5 px-36 box-border gap-[30px]">
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
        <img
          className="relative w-[130px] h-[130px] overflow-hidden shrink-0"
          alt=""
          src="/icon--ionicons--sharp--menusharp1.svg"
        />
      </header>
      <main className="self-stretch flex flex-col items-center justify-start gap-[10px] text-center text-9xl text-black font-reg-medium">
        <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
          <div className="h-[137px] flex flex-col items-center justify-start gap-[10px]">
            <div className="flex-1 w-[170px] flex flex-row items-center justify-center py-2.5 px-0 box-border">
              <div className="relative tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center w-[170px] shrink-0">
                Confirm Reservation
              </div>
            </div>
            <div className="relative rounded-[50%] bg-white box-border w-[51px] h-[51px] border-[2px] border-solid border-black" />
          </div>
          <div className="flex-1 box-border h-[88px] border-b-[2px] border-solid border-black" />
          <div className="h-[137px] flex flex-col items-center justify-start gap-[10px]">
            <div className="flex-1 w-[170px] flex flex-row items-center justify-center py-2.5 px-0 box-border">
              <div className="relative tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center w-[170px] shrink-0">
                Payment Details
              </div>
            </div>
            <div className="relative rounded-[50%] bg-white box-border w-[51px] h-[51px] border-[2px] border-solid border-black" />
          </div>
          <div className="flex-1 box-border h-[88px] border-b-[2px] border-solid border-black" />
          <div className="h-[137px] flex flex-col items-center justify-start gap-[10px]">
            <div className="flex-1 w-[170px] flex flex-row items-center justify-center py-2.5 px-0 box-border">
              <div className="relative tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center w-[170px] shrink-0">
                Complete Payment
              </div>
            </div>
            <div className="relative rounded-[50%] bg-white box-border w-[51px] h-[51px] border-[2px] border-solid border-black" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[75px] text-21xl">
          <div className="self-stretch flex flex-row items-center justify-center pt-[100px] px-0 pb-[25px] text-45xl">
            <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[100%] italic font-medium font-inherit">
              Reservation Details
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                Vehicle Choice
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-17xl">
              <div className="flex flex-col items-center justify-center py-0 pr-[63px] pl-0">
                <img
                  className="relative w-[280px] h-[153px] overflow-hidden shrink-0"
                  alt=""
                  src="/iconimage1.svg"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-between">
                <div className="flex flex-col items-start justify-start py-0 px-2.5 gap-[10px]">
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 border-b-[2px] border-solid border-black">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      Make
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-11xl">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      Geo
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 px-2.5 gap-[10px]">
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 border-b-[2px] border-solid border-black">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      Model
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-11xl">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      Prizm
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 px-2.5 gap-[10px]">
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 border-b-[2px] border-solid border-black">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      Year
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-11xl">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      1991
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center">
                  <div className="box-border w-[214px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                    <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                      Edit
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                Date Range Choice
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-17xl">
              <div className="flex flex-col items-center justify-center py-0 pr-[63px] pl-0">
                <img
                  className="relative w-[280px] h-[153px] overflow-hidden shrink-0"
                  alt=""
                  src="/iconimage1.svg"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-between">
                <div className="flex flex-col items-start justify-start py-0 px-2.5 gap-[10px]">
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 border-b-[2px] border-solid border-black">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      From
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-11xl">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      10/21/2023
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 px-2.5 gap-[10px]">
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 border-b-[2px] border-solid border-black">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      To
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-11xl">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      10/25/2023
                    </div>
                  </div>
                </div>
                <div className="hidden flex-col items-start justify-start py-0 px-2.5 gap-[10px]">
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 border-b-[2px] border-solid border-black">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      Label
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-11xl">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      Value
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center">
                  <div className="box-border w-[214px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                    <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                      Edit
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                Location Choice
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-17xl">
              <div className="flex flex-col items-center justify-center py-0 pr-[63px] pl-0">
                <img
                  className="relative w-[280px] h-[153px] overflow-hidden shrink-0"
                  alt=""
                  src="/iconimage1.svg"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-between">
                <div className="flex flex-col items-start justify-start py-0 px-2.5 gap-[10px]">
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 border-b-[2px] border-solid border-black">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      Lot ID
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-11xl">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      A-1
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 px-2.5 gap-[10px]">
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 border-b-[2px] border-solid border-black">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      Lot Address
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-11xl">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      <p className="m-0">33 Thomas St</p>
                      <p className="m-0">New York, NY 10007</p>
                    </div>
                  </div>
                </div>
                <div className="hidden flex-col items-start justify-start py-0 px-2.5 gap-[10px]">
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 border-b-[2px] border-solid border-black">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      Label
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-11xl">
                    <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                      Value
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center">
                  <div className="box-border w-[214px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                    <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                      Edit
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start py-[15px] px-0">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center">
              <div className="box-border w-[308px] h-[118px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                  Proceed to Payment
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>
      <div className="self-stretch flex-1 bg-white" />
      <footer className="self-stretch overflow-hidden shrink-0 flex flex-row items-center justify-between py-5 px-2.5 text-center text-13xl text-black font-hfb-extra-small border-t-[2px] border-solid border-black">
        <div className="flex flex-row items-center justify-center p-2.5">
          <div className="relative tracking-[0.5px] leading-[100%] font-medium flex items-center w-[397px] shrink-0">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">{`© 2023 “Borrow Our Cars” &`}</p>
              <p className="m-0">“:thumbsup: design”</p>
            </span>
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
  );
};

export default ConfirmReservation;

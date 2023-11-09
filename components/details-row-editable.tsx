import type { NextPage } from "next";

type DetailsRowEditableType = {
  text?: string;
  showThirdDetail?: boolean;
};

const DetailsRowEditable: NextPage<DetailsRowEditableType> = ({
  text = "Something Choice",
  showThirdDetail = true,
}) => {
  return (
    <div className="w-[1152px] flex flex-col items-start justify-start gap-[10px] text-center text-21xl text-black font-reg-medium">
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="relative tracking-[0.5px] leading-[100%] font-medium">
          {text}
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
                Label
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-11xl">
              <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                Value
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 px-2.5 gap-[10px]">
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
          {showThirdDetail && (
            <div className="flex flex-col items-start justify-start py-0 px-2.5 gap-[10px]">
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
          )}
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
  );
};

export default DetailsRowEditable;

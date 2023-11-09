import type { NextPage } from "next";

type ButtonsmallsmallType = {
  buttonText?: string;
};

const Buttonsmallsmall: NextPage<ButtonsmallsmallType> = ({
  buttonText = "Text",
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-21xl text-black font-hfb-extra-small">
      <div className="box-border w-[214px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
        <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center">
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default Buttonsmallsmall;

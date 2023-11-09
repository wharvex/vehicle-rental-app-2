import type { NextPage } from "next";

type StepObjectType = {
  stepLabelText?: string;
};

const StepObject: NextPage<StepObjectType> = ({ stepLabelText = "Step X" }) => {
  return (
    <div className="h-[137px] flex flex-col items-center justify-start gap-[10px] text-center text-9xl text-black font-reg-medium">
      <div className="flex-1 w-[170px] flex flex-row items-center justify-center py-2.5 px-0 box-border">
        <div className="relative tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center w-[170px] shrink-0">
          {stepLabelText}
        </div>
      </div>
      <div className="relative rounded-[50%] bg-white box-border w-[51px] h-[51px] border-[2px] border-solid border-black" />
    </div>
  );
};

export default StepObject;

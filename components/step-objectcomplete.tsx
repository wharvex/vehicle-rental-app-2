import type { NextPage } from "next";

const StepObjectcomplete: NextPage = () => {
  return (
    <div className="h-[137px] flex flex-col items-center justify-start gap-[10px] text-center text-9xl text-black font-reg-medium">
      <div className="flex-1 w-[170px] flex flex-row items-center justify-center py-2.5 px-0 box-border">
        <div className="relative tracking-[0.5px] leading-[100%] font-medium flex items-center justify-center w-[170px] shrink-0">
          Step X
        </div>
      </div>
      <div className="rounded-31xl bg-lime w-[51px] h-[51px] flex flex-row items-center justify-center p-2.5 box-border">
        <div className="relative tracking-[0.5px] leading-[100%] font-medium">
          ✓
        </div>
      </div>
    </div>
  );
};

export default StepObjectcomplete;

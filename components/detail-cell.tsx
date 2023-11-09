import type { NextPage } from "next";

type DetailCellType = {
  valueText?: string;
  labelText?: string;
};

const DetailCell: NextPage<DetailCellType> = ({
  valueText = "Value",
  labelText = "Label",
}) => {
  return (
    <div className="flex flex-col items-start justify-start py-0 px-2.5 gap-[10px] text-center text-17xl text-black font-reg-medium">
      <div className="flex flex-row items-start justify-start py-2.5 px-0 border-b-[2px] border-solid border-black">
        <div className="relative tracking-[0.5px] leading-[100%] font-medium">
          {labelText}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-2.5 px-0 text-left text-11xl">
        <div className="relative tracking-[0.5px] leading-[100%] font-medium">
          {valueText}
        </div>
      </div>
    </div>
  );
};

export default DetailCell;

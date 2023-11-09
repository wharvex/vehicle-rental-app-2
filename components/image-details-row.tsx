import type { NextPage } from "next";

const ImageDetailsRow: NextPage = () => {
  return (
    <div className="overflow-hidden flex flex-col items-start justify-start py-[13px] pr-[86px] pl-[23px]">
      <div className="flex flex-col items-start justify-start">
        <img
          className="relative w-[234px] h-32 object-cover"
          alt=""
          src="/image@2x.png"
        />
      </div>
    </div>
  );
};

export default ImageDetailsRow;

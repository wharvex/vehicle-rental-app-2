import type { NextPage } from "next";

const DetailsRowImage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-0 pr-[63px] pl-0">
      <img
        className="relative w-[280px] h-[153px] overflow-hidden shrink-0"
        alt=""
        src="/iconimage1.svg"
      />
    </div>
  );
};

export default DetailsRowImage;

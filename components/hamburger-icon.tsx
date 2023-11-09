import type { NextPage } from "next";

const HamburgerIcon: NextPage = () => {
  return (
    <div className="w-[130px] h-[130px] overflow-hidden">
      <img
        className="absolute h-3/6 w-9/12 top-[25%] right-[12.46%] bottom-[25%] left-[12.54%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

export default HamburgerIcon;

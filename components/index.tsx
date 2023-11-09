import type { NextPage } from "next";

const Containerfooter: NextPage = () => {
  return (
    <footer className="box-border w-[1152px] overflow-hidden flex flex-row items-center justify-between py-5 px-2.5 text-center text-13xl text-black font-hfb-extra-small border-t-[2px] border-solid border-black">
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
          src="/imageour-logo@2x.png"
        />
      </div>
      <div className="flex flex-row items-center justify-center p-2.5">
        <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit] flex items-center justify-center w-[86px] shrink-0">
          About
        </a>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center">
        <div className="box-border w-[214px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
          <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
            Support
          </div>
        </div>
      </button>
    </footer>
  );
};

export default Containerfooter;

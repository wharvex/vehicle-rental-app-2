import type { NextPage } from "next";

type SearchType = {
  placeholder?: string;
};

const Search: NextPage<SearchType> = ({ placeholder = "placeholder" }) => {
  return (
    <div className="flex flex-row items-center justify-center text-left text-13xl text-grey font-hfb-extra-small">
      <div className="rounded-tl-31xl rounded-tr-none rounded-br-none rounded-bl-31xl box-border w-[326px] h-[58px] flex flex-row items-center justify-start py-[5px] px-[25px] border-t-[1px] border-solid border-black border-b-[1px] border-l-[1px]">
        <div className="relative tracking-[0.5px] leading-[100%] font-medium flex items-center w-[300px] shrink-0">
          {placeholder}
        </div>
      </div>
      <div className="w-[57px] h-[58px] flex flex-col items-center justify-center">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/search-bar-fragment-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Search;

import type { NextPage } from "next";

const VehicleImage: NextPage = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      <img
        className="relative w-[234px] h-32 object-cover"
        alt=""
        src="/image@2x.png"
      />
    </div>
  );
};

export default VehicleImage;

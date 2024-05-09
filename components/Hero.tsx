import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="w-full bg-[#F6F6F6]">
      <div className="grid items-center gap-4 overflow-hidden md:max-h-[475px] md:grid-cols-2">
        <div className="mx-auto  p-6  ">
          <h1 className="text-2xl font-bold text-[#202533] sm:text-4xl">
            Fresh Arrivals Online
          </h1>
          <p className="mt-4 text-sm text-[#474B57]">
            Discover Our Newest Collection Today.
          </p>
          <Button
            variant="default"
            className="mt-10 rounded border-none bg-[#0E1422] px-6 py-3 text-sm font-semibold  tracking-wider outline-none hover:bg-gray-700"
          >
            View Collection
            <span className="ml-3">
              <Image
                src="/assets/arrow-left.svg"
                width={0}
                height={0}
                alt="arrow"
                className="h-3 w-3 rotate-180 text-[#e6e8ec]"
                priority
              />
            </span>
          </Button>
        </div>
        {/* <img src="https://readymadeui.com/team-image.webp" className="w-full h-full object-cover shrink-0" /> */}
        <Image
          src="/assets/hero.png"
          width={255}
          height={382}
          alt="heroImage"
          priority
          className="mx-auto h-auto w-auto shrink-0 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;

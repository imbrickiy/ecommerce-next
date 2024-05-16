import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";
const ActionSection: FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16 ">
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Browse Our Fashion Paradise!
        </h2>
        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
          Step into a world of style and explore our diverse collection of
          clothing categories.
        </p>

        <Button
          variant="default"
          className="mt-10 rounded border-none bg-[#0E1422] px-6 py-3 text-sm font-semibold  tracking-wider outline-none hover:bg-gray-700"
        >
          Start Browsing
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
      <Image
        src="/assets/category.png"
        alt="delivery"
        width={255}
        height={311}
        className="mx-auto h-auto w-auto object-contain text-[#0E1422]"
        priority
      />
    </div>
  );
};

export default ActionSection;

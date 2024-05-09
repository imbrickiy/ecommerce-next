import Image from "next/image";

const Price = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-wrap justify-center">
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="shadow-pricing relative z-10 overflow-hidden rounded-xl bg-white p-8 sm:p-12 lg:px-6 lg:py-10 xl:p-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F6F6F6]">
            <Image
              src="/assets/delivery.svg"
              alt="delivery"
              width={0}
              height={0}
              className=" h-auto w-auto text-[#0E1422]"
              priority
            />
          </div>
          <span className="mb-4 block text-lg font-semibold text-primary">
            Free Shipping
          </span>
          <p className="  text-body-color mb-8 pb-8 text-base ">
            Upgrade your style today and get FREE shipping on all orders! Dont
            miss out.
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="shadow-pricing relative z-10 overflow-hidden rounded-xl bg-white p-8 sm:p-12 lg:px-6 lg:py-10 xl:p-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F6F6F6]">
            <Image
              src="/assets/guarantee.svg"
              alt="guarantee"
              width={0}
              height={0}
              className=" h-auto w-auto text-[#0E1422]"
              priority
            />
          </div>
          <span className="mb-4 block text-lg font-semibold text-primary">
            Satisfaction Guarantee
          </span>
          <p className="text-body-color mb-8 pb-8 text-base">
            Shop confidently with our Satisfaction Guarantee: Love it or get a
            refund.
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="shadow-pricing relative z-10 overflow-hidden rounded-xl bg-white p-8 sm:p-12 lg:px-6 lg:py-10 xl:p-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F6F6F6]">
            <Image
              src="/assets/secure.svg"
              alt="secure"
              width={0}
              height={0}
              priority
              className=" h-auto w-auto text-[#0E1422]"
            />
          </div>
          <span className="mb-4 block text-lg font-semibold text-primary">
            Secure Payment
          </span>
          <p
            className="
             text-body-color mb-8
             pb-8
             text-base
             "
          >
            Your security is our priority. Your payments are secure with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Price;

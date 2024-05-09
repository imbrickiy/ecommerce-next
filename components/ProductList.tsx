"use client";
import Image from "next/image";


interface IProductList {
  reverse?: boolean;
}
const ProductList = (reverse: IProductList) => {


  return (
    <div className="mx-auto sm:max-w-full lg:max-w-7xl">
      {
    reverse ? (
        <>
          <div className="mt-20 grid grid-cols-1 gap-6 max-xl:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative w-[264px] cursor-pointer rounded-2xl bg-white p-1 px-2 py-4 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 h-[210px] w-11/12 overflow-hidden">
                <Image
                  width={237}
                  height={312}
                  src="https://readymadeui.com/images/product9.webp"
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="mt-6 text-sm font-medium not-italic leading-[24.5px] text-[#0E1422]">
                  Sole Elegance
                </h3>
                <div className="mt-4 flex items-center justify-start">
                  <p className="flex items-center justify-center gap-8 rounded-full border border-[#E6E7E8] px-4 text-xs font-medium uppercase not-italic leading-6">
                    In stock
                  </p>
                  <p className="ml-4 text-sm font-normal not-italic leading-[24.5px] text-[#474B57]">
                    $10
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-[264px] cursor-pointer rounded-2xl bg-white p-1 px-2 py-4 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 h-[210px] w-11/12 overflow-hidden">
                <Image
                  width={237}
                  height={312}
                  src="https://readymadeui.com/images/product10.webp"
                  alt="Product 2"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="mt-6 text-sm font-medium not-italic leading-[24.5px] text-[#0E1422]">
                  Urban Sneakers
                </h3>
                <div className="mt-4 flex items-center justify-start">
                  <p className="flex items-center justify-center gap-8 rounded-full border border-[#E6E7E8] px-4 text-xs font-medium uppercase not-italic leading-6">
                    In stock
                  </p>
                  <p className="ml-4 text-sm font-normal not-italic leading-[24.5px] text-[#474B57]">
                    $10
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-[264px] cursor-pointer rounded-2xl bg-white p-1 px-2 py-4 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 h-[210px] w-11/12 overflow-hidden">
                <Image
                  width={237}
                  height={312}
                  src="https://readymadeui.com/images/product11.webp"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="mt-6 text-sm font-medium not-italic leading-[24.5px] text-[#0E1422]">
                  Velvet Boots
                </h3>
                <div className="mt-4 flex items-center justify-start">
                  <p className="flex items-center justify-center gap-8 rounded-full border border-[#E6E7E8] px-4 text-xs font-medium uppercase not-italic leading-6">
                    In stock
                  </p>
                  <p className="ml-4 text-sm font-normal not-italic leading-[24.5px] text-[#474B57]">
                    $10
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-[264px] cursor-pointer rounded-2xl bg-white p-1 px-2 py-4 transition-all hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-8 h-[210px] w-11/12 overflow-hidden">
                <Image
                  width={237}
                  height={312}
                  src="https://readymadeui.com/images/product12.webp"
                  alt="Product 3"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="mt-6 text-sm font-medium not-italic leading-[24.5px] text-[#0E1422]">
                  Summit Hiking
                </h3>
                <div className="mt-4 flex items-center justify-start">
                  <p className="flex items-center justify-center gap-8 rounded-full border border-[#E6E7E8] px-4 text-xs font-medium uppercase not-italic leading-6">
                    In stock
                  </p>
                  <p className="ml-4 text-sm font-normal not-italic leading-[24.5px] text-[#474B57]">
                    $10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : <div>Hello</div>}
      {/* <div className="mt-20 grid grid-cols-1 gap-6 max-xl:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative w-[264px] cursor-pointer rounded-2xl bg-white p-1 px-2 py-4 transition-all hover:-translate-y-2">
          <div className="aspect-w-16 aspect-h-8 h-[210px] w-11/12 overflow-hidden">
            <Image
              width={237}
              height={312}
              src="https://readymadeui.com/images/product9.webp"
              alt="Product 1"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h3 className="mt-6 text-sm font-medium not-italic leading-[24.5px] text-[#0E1422]">
              Sole Elegance
            </h3>
            <div className="mt-4 flex items-center justify-start">
              <p className="flex items-center justify-center gap-8 rounded-full border border-[#E6E7E8] px-4 text-xs font-medium uppercase not-italic leading-6">
                In stock
              </p>
              <p className="ml-4 text-sm font-normal not-italic leading-[24.5px] text-[#474B57]">
                $10
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[264px] cursor-pointer rounded-2xl bg-white p-1 px-2 py-4 transition-all hover:-translate-y-2">
          <div className="aspect-w-16 aspect-h-8 h-[210px] w-11/12 overflow-hidden">
            <Image
              width={237}
              height={312}
              src="https://readymadeui.com/images/product10.webp"
              alt="Product 2"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h3 className="mt-6 text-sm font-medium not-italic leading-[24.5px] text-[#0E1422]">
              Urban Sneakers
            </h3>
            <div className="mt-4 flex items-center justify-start">
              <p className="flex items-center justify-center gap-8 rounded-full border border-[#E6E7E8] px-4 text-xs font-medium uppercase not-italic leading-6">
                In stock
              </p>
              <p className="ml-4 text-sm font-normal not-italic leading-[24.5px] text-[#474B57]">
                $10
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[264px] cursor-pointer rounded-2xl bg-white p-1 px-2 py-4 transition-all hover:-translate-y-2">
          <div className="aspect-w-16 aspect-h-8 h-[210px] w-11/12 overflow-hidden">
            <Image
              width={237}
              height={312}
              src="https://readymadeui.com/images/product11.webp"
              alt="Product 3"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h3 className="mt-6 text-sm font-medium not-italic leading-[24.5px] text-[#0E1422]">
              Velvet Boots
            </h3>
            <div className="mt-4 flex items-center justify-start">
              <p className="flex items-center justify-center gap-8 rounded-full border border-[#E6E7E8] px-4 text-xs font-medium uppercase not-italic leading-6">
                In stock
              </p>
              <p className="ml-4 text-sm font-normal not-italic leading-[24.5px] text-[#474B57]">
                $10
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[264px] cursor-pointer rounded-2xl bg-white p-1 px-2 py-4 transition-all hover:-translate-y-2">
          <div className="aspect-w-16 aspect-h-8 h-[210px] w-11/12 overflow-hidden">
            <Image
              width={237}
              height={312}
              src="https://readymadeui.com/images/product12.webp"
              alt="Product 3"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h3 className="mt-6 text-sm font-medium not-italic leading-[24.5px] text-[#0E1422]">
              Summit Hiking
            </h3>
            <div className="mt-4 flex items-center justify-start">
              <p className="flex items-center justify-center gap-8 rounded-full border border-[#E6E7E8] px-4 text-xs font-medium uppercase not-italic leading-6">
                In stock
              </p>
              <p className="ml-4 text-sm font-normal not-italic leading-[24.5px] text-[#474B57]">
                $10
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductList;

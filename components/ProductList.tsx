"use client";
import Image from "next/image";

interface IProductList {
  reverse?: boolean;
  link?: string;
  image?: string;
  title?: string;
  stock?: boolean;
  price?: number;
}

const products = [
  {
    id: 1,
    title: "Velvet Boots",
    stock: true,
    price: 100,
    image: "https://readymadeui.com/images/product11.webp",
    link: "https://readymadeui.com/product/velvet-boots",
  },
  {
    id: 2,
    title: "Cotton Shirt",
    stock: false,
    price: 200,
    image: "https://readymadeui.com/images/product12.webp",
    link: "https://readymadeui.com/product/cotton-shirt",
  },
  {
    id: 3,
    title: "Cotton Pants",
    stock: true,
    price: 300,
    image: "https://readymadeui.com/images/product13.webp",
    link: "https://readymadeui.com/product/cotton-pants",
  },
  {
    id: 4,
    title: "Cotton Hoodie",
    stock: false,
    price: 400,
    image: "https://readymadeui.com/images/product14.webp",
    link: "https://readymadeui.com/product/cotton-hoodie",
  },
];
const ProductList = ({ reverse }: IProductList) => {
  const list = reverse ? products.slice(1, 3) : products;
  return (
    <div className="mx-auto sm:max-w-full lg:max-w-7xl">
      <div className="mt-20 grid grid-cols-1 gap-6 max-xl:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list?.map((product) => (
          <div
            className="relative w-[264px] cursor-pointer rounded-2xl bg-white p-1 px-2 py-4 transition-all hover:-translate-y-2"
            key={product.id}
          >
            <div className="aspect-w-16 aspect-h-8 h-[210px] w-11/12 overflow-hidden">
              <Image
                width={237}
                height={312}
                src={product.image}
                alt="Product 3"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h3 className="mt-6 text-sm font-medium not-italic leading-[24.5px] text-[#0E1422]">
                {product.title}
              </h3>
              <div className="mt-4 flex items-center justify-start">
                <p className="flex items-center justify-center gap-8 rounded-full border border-[#E6E7E8] px-4 text-xs font-medium uppercase not-italic leading-6">
                  {product.stock ? "In stock" : "Non stock"}
                </p>
                <p className="ml-4 text-sm font-normal not-italic leading-[24.5px] text-[#474B57]">
                  ${product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

import { FC } from "react";

const Newsletter: FC = () => {
  return (
    <div className="bg-[#E6E7E8]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900  sm:text-4xl">
            Join Our Newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500  sm:text-xl md:mb-12">
            We love to surprise our subscribers with occasional gifts.
          </p>
          {/* Error */}
          {/* <NewsletterForm /> */}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

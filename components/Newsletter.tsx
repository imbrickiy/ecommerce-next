"use client";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const Newsletter = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <div>
      <div className="bg-[#E6E7E8]">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900  sm:text-4xl">
              Join Our Newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500  sm:text-xl md:mb-12">
              We love to surprise our subscribers with occasional gifts.
            </p>
            <Form {...form}>
              <form>
                <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label className="mb-2 hidden text-sm font-medium text-gray-900 ">
                      Your email address
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <Input
                      className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 sm:rounded-none sm:rounded-l-lg"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div>
                    <Button
                      variant="default"
                      type="submit"
                      className="border-primary-600 hover:bg-primary-800 focus:ring-primary-300 w-full cursor-pointer rounded-lg border px-5 py-3 text-center text-sm font-medium text-white focus:ring-4 sm:rounded-none sm:rounded-r-lg "
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
                <div className="newsletter-form-footer mx-auto max-w-screen-sm text-center text-sm text-gray-500">
                  We care about the protection of your data.
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

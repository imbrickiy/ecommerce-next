"use client";
import { filters } from "./searchPanelData";

const SearchPanel = () => {
  return (
    <section className="rounded-xl  border border-[#E6E7E8] pl-4 pr-8 pt-5">
      <aside>
        <div className="hidden sm:block">
          <form className="space-y-10">
            {filters.map((section, index) => (
              <div key={section.name} className="flex flex-col gap-y-10">
                {section.name === "Category" && (
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-900 ">
                      {section.name}
                    </legend>
                    <div className="space-y-3 pt-6">
                      {section.options?.map((option, optionIdx) => (
                        <div
                          key={option.value}
                          className="flex items-center border-b-2 p-3"
                        >
                          <input
                            id={`${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            onClick={() => console.log(option)}
                          />
                          <label
                            htmlFor={`${section.id}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                )}
                {section.name === "Color" && (
                  <fieldset>
                    <legend className="text-sm font-medium text-gray-900">
                      {section.name}
                    </legend>
                    <div className="inline-flex gap-3 pt-6">
                      {section.optionsColor?.map((option, optionIdx) => (
                        <div
                          key={optionIdx}
                          className={`${option.color} h-6 w-6 rounded-full `}
                        >
                          <input
                            className="block h-6 w-6 cursor-pointer appearance-none rounded-full border-none bg-transparent transition duration-300 ease-in checked:border-none checked:bg-transparent checked:ring-offset-neutral-50 focus:bg-transparent focus:checked:bg-transparent"
                            type="checkbox"
                            onClick={() => console.log(option)}
                          />
                        </div>
                      ))}
                    </div>
                  </fieldset>
                )}
                {section.name === "Sizes" && (
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-900">
                      {section.name}
                    </legend>
                    <div className="flex flex-wrap justify-start py-6">
                      {section.optionsSize?.map((option, optionIdx) => (
                        <div
                          key={optionIdx}
                          className="flex items-center justify-center"
                        >
                          <input
                            id={`${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            className=" m-1 h-10 w-10 appearance-none items-center justify-center rounded border transition duration-300 ease-in target:bg-none checked:bg-gray-300 hover:bg-none focus:bg-transparent"
                            onClick={() => console.log(option)}
                          />
                          <label
                            htmlFor={`${section.id}-${optionIdx}`}
                            className="absolute text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                )}
                {/* <fieldset>
                  <legend className="block text-sm font-medium text-gray-900">
                    {section.name}
                  </legend>
                  <div className="space-y-3 pt-6">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset> */}
              </div>
            ))}
          </form>
        </div>
      </aside>
    </section>
  );
};

export default SearchPanel;

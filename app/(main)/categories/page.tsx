import SearchPanel from "./_components/FilterPanel";
import { ProductList } from "./_components/ProductList";

const Categories = () => {
  return (
    <section className="m-4 mx-auto max-w-7xl p-4 flex">
      <div className="hidden sm:block w-60">
        <SearchPanel />
      </div>
      <div className="sm:w-full">
        <ProductList />
      </div>
    </section>
  );
};

export default Categories;

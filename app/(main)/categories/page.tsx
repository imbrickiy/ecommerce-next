import SearchPanel from "./_components/SearchPanel";

const Categories = () => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4 p-4">
      <div className='hidden sm:block'>
        <SearchPanel />
      </div>
      <div className="m-6 sm:w-full">RightMenu</div>
    </section>
  );
};

export default Categories;

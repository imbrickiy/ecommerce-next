import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductList from "./ProductList";
const FeaturedTab = () => {
  return (
    <div className="bg-white">
      <Tabs defaultValue="featured" className="flex flex-col justify-center">
        <TabsList className="bg-white">
          <TabsTrigger value="featured" className="rounded-full">
            Featured
          </TabsTrigger>
          <TabsTrigger value="latest" className="rounded-full">
            Latest
          </TabsTrigger>
        </TabsList>
        <TabsContent value="featured">
          <div className="mt-8 flex w-full flex-col items-center p-4">
            <div className=''>Featured</div>
            <div>Featured</div>
          </div>
        </TabsContent>
        <TabsContent value="latest">
          <div className="mx-auto mt-8 max-w-6xl p-4">
            <ProductList />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeaturedTab;

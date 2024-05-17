import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductList from "./Products";
const FeaturedTab = () => {
  return (
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
          <ProductList />
        </div>
      </TabsContent>
      <TabsContent value="latest">
        <div className="mt-8 flex w-full flex-col items-center p-4">
          <ProductList reverse />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default FeaturedTab;

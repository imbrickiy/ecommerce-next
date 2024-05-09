import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductList from "./ProductList";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
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
          <Card className="mx-auto mt-8 max-w-6xl p-4">
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, youll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
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

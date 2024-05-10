import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";
import { signout } from "../actions";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <h1 className="text-2xl">User email:</h1>
      <p>{data.user.email}</p>
      <form>
        <Button variant="default" formAction={signout}>
          Sign out
        </Button>
      </form>
    </div>
  );
}

import { redirect } from "next/navigation";
import { createClient } from "./_lib/supabase";

// The front door: signed-in visitors go to their tasks, everyone else to log in.
export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  redirect(user ? "/tasks" : "/login");
}

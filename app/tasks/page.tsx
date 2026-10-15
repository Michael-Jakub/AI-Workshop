import { redirect } from "next/navigation";
import { createClient } from "../_lib/supabase";
import { logOut } from "../_lib/auth-actions";

export default async function TasksPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <main>
      <h1>Your tasks</h1>
      <p>Signed in as {user.email}</p>
      <form action={logOut} className="logout-form">
        <button type="submit">Log out</button>
      </form>
    </main>
  );
}

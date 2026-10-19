import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../_lib/supabase";
import { logOut } from "../_lib/auth-actions";
import AddTaskForm from "../_lib/AddTaskForm";

type Task = {
  id: number;
  title: string;
  priority: "high" | "medium" | "low";
};

// Lower number = higher on the list.
const RANK = { high: 0, medium: 1, low: 2 };
const LABEL = { high: "High", medium: "Medium", low: "Low" };

export default async function TasksPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // The database only hands back this visitor's own tasks.
  const { data, error } = await supabase
    .from("tasks")
    .select("id, title, priority")
    .order("created_at", { ascending: true });

  const tasks = ((data ?? []) as Task[]).sort(
    (a, b) => RANK[a.priority] - RANK[b.priority]
  );

  return (
    <main>
      <h1>Your tasks</h1>
      <p>Signed in as {user.email}</p>
      <p>
        <Link href="/done">See what you have completed</Link>
      </p>

      <AddTaskForm />

      {error ? (
        <p className="form-error task-empty" role="alert">
          Could not load your tasks. Please reload the page.
        </p>
      ) : tasks.length === 0 ? (
        <p className="task-empty">No tasks yet.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <span className={`priority priority-${task.priority}`}>
                {LABEL[task.priority]}
              </span>
              {task.title}
            </li>
          ))}
        </ul>
      )}

      <form action={logOut} className="logout-form">
        <button type="submit">Log out</button>
      </form>
    </main>
  );
}

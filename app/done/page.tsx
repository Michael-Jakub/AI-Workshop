import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../_lib/supabase";

type Week = {
  week_start: string;
  task_count: number;
  titles: string[];
};

// "2026-10-12" -> "Oct 12, 2026". Read as UTC so the date never shifts a day.
function formatWeek(day: string) {
  return new Date(`${day}T00:00:00Z`).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function DonePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // The database groups finished tasks into weeks and counts them before
  // handing them back, newest week first. Only this visitor's tasks come back.
  const { data, error } = await supabase
    .from("completed_weeks")
    .select("week_start, task_count, titles")
    .order("week_start", { ascending: false });

  const weeks = (data ?? []) as Week[];

  return (
    <main>
      <h1>Completed</h1>
      <p>
        <Link href="/tasks">Back to your tasks</Link>
      </p>

      {error ? (
        <p className="form-error task-empty" role="alert">
          Could not load your completed tasks. Please reload the page.
        </p>
      ) : weeks.length === 0 ? (
        <p className="task-empty">Nothing completed yet.</p>
      ) : (
        <div className="week-list">
          {weeks.map((week, i) => (
            <details key={week.week_start} className="week" open={i === 0}>
              <summary>
                Week of {formatWeek(week.week_start)}
                <span className="week-count">
                  {week.task_count} {week.task_count === 1 ? "task" : "tasks"}
                </span>
              </summary>
              <ul className="task-list">
                {week.titles.map((title, j) => (
                  <li key={j}>{title}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      )}
    </main>
  );
}

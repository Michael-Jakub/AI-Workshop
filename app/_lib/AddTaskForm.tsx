"use client";

import { useActionState } from "react";
import { addTask } from "./task-actions";

// The "type a task, pick a priority, click Add" form on the tasks page.
export default function AddTaskForm() {
  const [state, formAction, pending] = useActionState(addTask, null);

  return (
    <form action={formAction} className="task-form">
      <label>
        Task
        <input name="title" type="text" required maxLength={200} />
      </label>
      <label>
        Priority
        <select name="priority" defaultValue="medium">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>
      <button type="submit" disabled={pending}>
        {pending ? "Adding…" : "Add"}
      </button>
      {state?.error && (
        <p className="form-error" role="alert">
          {state.error}
        </p>
      )}
    </form>
  );
}

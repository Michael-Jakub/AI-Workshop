"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "./supabase";

export type TaskFormState = { error: string } | null;

const PRIORITIES = ["high", "medium", "low"];

// Saves a new task for the signed-in visitor, then refreshes the list.
export async function addTask(
  _prev: TaskFormState,
  formData: FormData
): Promise<TaskFormState> {
  const title = String(formData.get("title") ?? "").trim();
  const priority = String(formData.get("priority") ?? "");

  if (!title) return { error: "Please type a task." };
  if (!PRIORITIES.includes(priority)) {
    return { error: "Please choose High, Medium or Low." };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "You are signed out. Please log in again." };

  const { error } = await supabase
    .from("tasks")
    .insert({ title, priority, user_id: user.id });

  if (error) return { error: "Could not save your task. Please try again." };

  revalidatePath("/tasks");
  return null;
}

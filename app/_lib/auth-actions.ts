"use server";

import { redirect } from "next/navigation";
import { createClient } from "./supabase";

export type FormState = { error: string } | null;

function readForm(formData: FormData) {
  return {
    email: String(formData.get("email") ?? "").trim(),
    password: String(formData.get("password") ?? ""),
  };
}

export async function signUp(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const { email, password } = readForm(formData);

  if (!email) return { error: "Please enter your email." };
  if (password.length < 8) {
    return { error: "Your password needs at least 8 characters." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) return { error: error.message };
  if (!data.session) {
    return { error: "Check your email for a confirmation link, then log in." };
  }

  redirect("/tasks");
}

export async function logIn(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const { email, password } = readForm(formData);

  if (!email || !password) {
    return { error: "Please enter your email and password." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return { error: "Wrong email or password. Please try again." };

  redirect("/tasks");
}

export async function logOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

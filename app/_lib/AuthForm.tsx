"use client";

import Link from "next/link";
import { useActionState } from "react";
import type { FormState } from "./auth-actions";

type Props = {
  title: string;
  button: string;
  action: (prev: FormState, formData: FormData) => Promise<FormState>;
  switchText: string;
  switchLink: string;
  switchLabel: string;
};

// The email + password form shared by the Sign up and Log in pages.
export default function AuthForm(props: Props) {
  const [state, formAction, pending] = useActionState(props.action, null);

  return (
    <main>
      <h1>{props.title}</h1>
      <form action={formAction} className="auth-form">
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Password (8 or more characters)
          <input
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete={
              props.button === "Sign up" ? "new-password" : "current-password"
            }
          />
        </label>
        {state?.error && (
          <p className="form-error" role="alert">
            {state.error}
          </p>
        )}
        <button type="submit" disabled={pending}>
          {pending ? "Please wait…" : props.button}
        </button>
      </form>
      <p className="auth-switch">
        {props.switchText} <Link href={props.switchLink}>{props.switchLabel}</Link>
      </p>
    </main>
  );
}

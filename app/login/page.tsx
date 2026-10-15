import AuthForm from "../_lib/AuthForm";
import { logIn } from "../_lib/auth-actions";

export default function LoginPage() {
  return (
    <AuthForm
      title="Log in"
      button="Log in"
      action={logIn}
      switchText="New here?"
      switchLink="/signup"
      switchLabel="Sign up"
    />
  );
}

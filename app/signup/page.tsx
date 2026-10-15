import AuthForm from "../_lib/AuthForm";
import { signUp } from "../_lib/auth-actions";

export default function SignUpPage() {
  return (
    <AuthForm
      title="Sign up"
      button="Sign up"
      action={signUp}
      switchText="Already have an account?"
      switchLink="/login"
      switchLabel="Log in"
    />
  );
}

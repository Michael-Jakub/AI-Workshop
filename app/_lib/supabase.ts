import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Makes a Supabase connection for the current visitor, using their
// sign-in cookies. Used by pages and form actions on the server.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Pages can't write cookies. proxy.ts keeps them fresh instead.
          }
        },
      },
    }
  );
}

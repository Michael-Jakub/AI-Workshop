# Project state
Last updated: 2026-10-08

## Works
- A Next.js site (App Router, TypeScript, plain CSS) is live on Vercel and deploys from the main branch.
- A Supabase project exists and is linked to the repo.

## Broken or flaky
- Nothing known to be broken. Nobody has checked this beyond what Michael reported.
- The site does not use Supabase yet: there is no sign-in and there are no tasks.

## Environment notes
- Repo: Michael-Jakub/AI-Workshop, default branch main.
- Live site: https://ai-workshop-90ztqnug1-michael-jakub.vercel.app (not confirmed; this may be one specific deployment rather than the main production address; replace it once confirmed in Vercel).
- Vercel dashboard: https://vercel.com/michael-jakub/ai-workshop
- Supabase dashboard: https://supabase.com/dashboard/project/jujwzvdrihqgckzgerhp
- Keys and passwords live only in Vercel > ai-workshop > Settings > Environment Variables. Not yet confirmed whether the Supabase keys are set there.
- Supabase may require email confirmation for new accounts by default. Not yet checked; this affects Slice 1.
- Every pull request gets a Vercel preview link. Merging to main deploys the live site.

## Next session
Start Slice 1 (Sign up and log in) from roadmap.md. First decide whether new accounts must confirm their email.

# Project state
Last updated: 2026-10-19

## Works
- A Next.js site (App Router, TypeScript, plain CSS) is live on Vercel and deploys from the main branch.
- A Supabase project exists and is linked to the repo.
- A visitor can make an account on the live site with an email and a password of 8 or more characters, and lands on a page that says "Signed in as" followed by their email.
- A visitor can log in, and a wrong password shows an error message instead of a crash.
- A visitor can log out, and after that the /tasks page sends them back to the login page.
- A visitor who closes the tab and comes back to the live site is still signed in.
- A signed-in student can type a study task, choose High, Medium or Low, and click Add, and the task appears in their list without reloading the page.
- The task list always shows High tasks at the top, then Medium, then Low.
- A student who logs out and logs back in sees the same tasks they added before.
- Each account sees only its own tasks; a second account starts with an empty list.
- A signed-in student can click "See what you have completed" on the tasks page to open a Completed page at /done. It shows finished tasks grouped by week, newest week first, with a count for each week; clicking a week's heading opens or closes its list. Weeks start on Monday, Hawaii time.

## Broken or flaky
- Nothing known to be broken. Nobody has checked this beyond what Michael reported.
- Students still cannot mark a task finished on the site (that is slice 3). The Completed page only shows tasks whose completed_at was set by hand in the Supabase Table Editor.

## Environment notes
- Repo: Michael-Jakub/AI-Workshop, default branch main.
- Live site: https://ai-workshop-90ztqnug1-michael-jakub.vercel.app (not confirmed; this may be one specific deployment rather than the main production address; replace it once confirmed in Vercel).
- Vercel dashboard: https://vercel.com/michael-jakub/ai-workshop
- Supabase dashboard: https://supabase.com/dashboard/project/jujwzvdrihqgckzgerhp
- Keys and passwords live only in Vercel > ai-workshop > Settings > Environment Variables. Not yet confirmed whether the Supabase keys are set there.
- Supabase may require email confirmation for new accounts by default. Not yet checked; this affects Slice 1.
- Every pull request gets a Vercel preview link. Merging to main deploys the live site.
- Database changes are made by hand in the Supabase SQL Editor; there are no migration files in the repo. The tasks table has a completed_at column (when a task was finished; empty means not finished), and a completed_weeks view groups finished tasks by week for the Completed page. Students can see and add their own tasks, but there is no rule yet that lets them change a task; slice 3 will need one.

## Next session
Start slice 3 (Finish and get rewarded) from roadmap.md. It needs a database rule that lets students change their own tasks, and ticking a task should fill in completed_at so it shows on the Completed page.

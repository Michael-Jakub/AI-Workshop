# AI Workshop

## Stack
- Next.js with the App Router, TypeScript, plain CSS (no CSS frameworks).
- Supabase for sign-in and the database.
- Deployed on Vercel. Every branch gets a preview link on its pull request; merging to main deploys the live site.

## Commands
- `npm install` to install packages.
- `npm run dev` to run the site locally.
- `npm run build` to check the site builds. Run this before every push.
- `npm run lint` to check code style.

## Never
- Add a dependency without asking first.
- Edit .env or any environment variable.
- Change auth configuration without saying what is changing and why.
- Create new top-level folders.
- Edit roadmap.md, project-state.md or CLAUDE.md during feature work. Only a separate docs session edits them.
- Put passwords, API keys or connection strings in code, prompts or chat. They belong in Vercel > ai-workshop > Settings > Environment Variables.
- Use real personal data. Fake names and fake content only.
- Merge a pull request. Push the branch, open a draft pull request, and stop.

## Conventions
- Pages live in the existing app folder, following App Router conventions.
- One CSS approach: plain CSS files, no inline style objects except for tiny one-off cases.
- Keep changes small and limited to the active slice.
- Explain every change in plain language in the pull request description, written for someone with no coding background, so Michael can review and explain it.
- Ask before adding any new library, service or account.

## Current focus
See roadmap.md, work only on the slice marked ACTIVE.

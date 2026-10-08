# Roadmap

## What this is
A task list website for students who want to organize their studying by priority. Students sign in, add study tasks marked High, Medium or Low, and get a small reward each time they finish one.

## What Done means
A student who has never seen the site can open it, make an account, add a few study tasks with a priority, and see them sorted with High at the top. When they tick a task off, a congratulations message appears and a "tasks completed" counter goes up. If they log out and come back later, their tasks and their count are still there, and no other account can see them.

## Slices
1. Sign up and log in | done-criteria: (1) A new visitor clicks Sign up, enters an email and a password of 8 or more characters, clicks any confirmation link they are emailed, and ends on a page that says "Signed in as" followed by that email. (2) They click Log out and land on the login page; typing the site address followed by /tasks sends them back to the login page instead of the tasks page. (3) Logging in with the right email but a wrong password shows an error message, not a blank page or a crash; the right password shows "Signed in as" again. (4) They close the tab, open the live site again, and are still signed in. | status: ACTIVE
2. Tasks that stay | done-criteria: (1) While signed in, they type "Read chapter 4", choose High, click Add, and the task appears in the list without reloading. (2) They add a Low task and then a High task; both High tasks show above the Low one. (3) They log out, log back in, and the same tasks are there. (4) A second account sees an empty list, with none of the first account's tasks. | status: pending
3. Finish and get rewarded | done-criteria: (1) Ticking the box next to a task shows a congratulations message and moves the task to a Done section, crossed out. (2) The "Tasks completed" counter at the top goes up by one for each task ticked. (3) After a page reload, the counter shows the same number and finished tasks are still in Done. | status: pending

## Backlog
- Due dates
- Grouping tasks by class
- Points, badges and streaks
- Editing a task's wording
- Password reset
- Sign-in with Google
- Study timer
- Reminders
- Sharing lists
- Dark mode
- Mobile app

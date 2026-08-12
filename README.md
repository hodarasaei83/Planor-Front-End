"Planor"

This is a Next.js project developed by Planor team.

Getting Started

First, run the development server:

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

Creating a Branch

Before starting a new task, always make sure your local develop branch is up to date.
Branch Naming

Use the following format:

feature/<task-name>
fix/<task-name>

Examples:

feature/login-page
fix/task-card-bug

Keep branch names short, descriptive, and related to the task.

Commit Convention

All commits must follow this format:

git commit -m "<type>: <short description>"
Commit Types:
feat New feature feat: add task creation modal
fix Bug fix fix: resolve task card bug
refactor Code restructuring without changing behavior refactor: simplify task state management
style UI, CSS, formatting, or visual changes style: improve sidebar spacing
docs Documentation docs: update project readme
test Tests test: add task validation tests
chore Maintenance/configuration chore: update dependencies
perf Performance improvements perf: optimize task list rendering
build Build/tooling changes build: update next configuration

Examples
git commit -m "feat: add task creation modal"

git commit -m "fix: prevent duplicate task creation"

git commit -m "refactor: simplify board component"

git commit -m "style: improve responsive sidebar"

git commit -m "docs: update git workflow"

git commit -m "test: add task creation tests"

git commit -m "chore: update dependencies"

Commit Rules
Keep commit messages:

Short
Clear
Related to one specific change
Written in the imperative form

Use:

git commit -m "feat: add task filtering"
git commit -m "fix: prevent empty task submission"
git commit -m "remove: unused task component"

Avoid vague commits:

git commit -m "fix"
git commit -m "update"
git commit -m "changes"
git commit -m "final"
git commit -m "bug fix"

Golden Rules

1. Never push directly to main or develop.

2. One task = one branch.

3. Keep commits small and meaningful.

4. Keep your branch updated with develop.

5. Do not modify unrelated files.

6. Communicate before changing shared files.

7. Every change goes through a Pull Request.

8. Resolve conflicts before requesting a merge.

9. Never use git push --force. Use --force-with-lease when required.

10. Keep the Git history clean and understandable.

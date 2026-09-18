#  Dev Stack Builder

**Dev Stack Builder** is a responsive React web app that lets developers browse a
curated catalog of web development technologies — frontend, backend, database,
language, styling, and DevOps tools — and build their own personal "stack" by
adding and removing items from a live sidebar panel.

##  Technologies Used

- React.js (Vite)
- Tailwind CSS
- React-Toastify (NPM package for alerts)
- JSON (local data source for technologies)
- JavaScript (ES6+)

##  Features

1. **Interactive stack builder** — add technologies to "Your Stack" with one
   click; duplicate adds are blocked with a warning toast, and added cards
   are visually disabled.
2. **Fully responsive design** — a 3-column tech grid on desktop collapses to
   2 columns on tablet and 1 column on mobile, with a mobile hamburger navbar.
3. **Single-source gradient theming** — the entire brand identity (logo text,
   hero highlight, buttons) is driven by one gradient defined once in
   `src/index.css`, so re-theming the whole app is a one-line change.

##  Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Then open the printed local URL in your browser.

---

##  React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension for JavaScript that lets us write HTML-like markup
directly inside our JS/component files. React uses it because it makes the
structure of the UI easier to read and write than calling
`React.createElement()` manually — it gets compiled into regular JavaScript
under the hood.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — they are
read-only from the child's perspective. State is data a component manages
*internally* and can change over time (usually via `useState`), which
triggers a re-render whenever it updates. In this project, `technologies`
and `icon` data flow into `TechCard` as props, while things like `stack` and
`loading` are state owned by `App`.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a functional component hold and update its own local data
between renders. I used it in `App.jsx` for `technologies` (the fetched
list), `loading` (whether data is still being fetched), and `stack` (the
list of technologies the user has added), and inside `Navbar.jsx` for
`menuOpen` (mobile menu toggle).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects — code that reaches outside the component,
like network requests — after render. Fetching data is a side effect, so it
can't happen directly in the component body; I used `useEffect` with an
empty dependency array `[]` in `App.jsx` so the `technologies.json` file is
fetched exactly once, right after the component first mounts.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React tell list items apart between renders so it can
efficiently figure out which items were added, removed, or reordered,
instead of re-rendering the entire list from scratch. Without stable unique
keys, React can misapply updates to the wrong DOM elements. I used each
technology's `id` field as the key when mapping over `technologies` and
`stack`.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some
condition/state value, using things like ternaries or `&&`. In
`YourStack.jsx`, I check `stack.length === 0` — if true, an empty-state
message with an icon is shown; otherwise, the list of added technologies is
rendered instead.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child as props, e.g. `<TechCard tech={tech} isAdded={...} onAdd={onAdd} />`. To send information back up, the parent passes a *function* down as a prop (like `onAdd` or `onRemove`), and the child calls that function — often with some data as an argument — whenever an event happens (like a button click). This is how, for example, clicking "Add to Stack" inside `TechCard` ultimately updates the `stack` state that lives in `App`.
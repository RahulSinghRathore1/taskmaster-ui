# TaskMaster – React Task Dashboard

This is a basic simple task management UI built using React. The app lets users create, view, complete, and delete tasks. It includes a collapsible sidebar, dark mode toggle, and saves tasks in local storage so they stay after refresh.

## Architechture

The project is built using React and is organized into components and context files:

- **Sidebar and Header** are separate components and show navigation links and user info.
- **TaskForm** is used for adding new tasks.
- **TaskList** shows all the current tasks.
- **TaskCard** is the card that shows each task's info like title, due date, priority, and status.
  **Priority indicator** (e.g., a colored circle: Red for High, Yellow for Medium, Green for Low).

The app uses React Context for task state and theme (dark/light) handling. CSS Modules are used for styling so styles are scoped to each component.

---

## Key Development Decisions

- Used `Context API` instead of prop drilling for task and theme state.
- Implemented localStorage to keep tasks after refreshing the browser.
- Designed layout to be responsive for mobile, tablet, and desktop.
- Dark mode toggle is included and updates the UI instantly.
- Task form is always visible on Dashboard and Tasks pages for easy use.

There is potential to expand and improve this project further by adding more advanced features with additional time and planning.
This version focuses on meeting the assignment’s core UI and interaction requirements in a clean, responsive layout.

## How to Run the App Locally

1. Clone the repository

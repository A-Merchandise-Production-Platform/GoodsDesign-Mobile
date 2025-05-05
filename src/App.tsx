import { MemoryRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage.jsx";
import TaskListPage from "./pages/task/TaskListPage.jsx";
import TaskDetailPage from "./pages/task/TaskDetailPage.jsx";

export function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/task" element={<TaskListPage />} />
        <Route path="/task/:id" element={<TaskDetailPage />} />
      </Routes>
    </MemoryRouter>
  );
}

import { MemoryRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage.jsx";
import TaskPage from "./pages/TaskPage.jsx";

export function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/task" element={<TaskPage />} />
      </Routes>
    </MemoryRouter>
  );
}

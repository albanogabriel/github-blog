import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Main } from "./pages/Main";
import { FullPost } from "./pages/FullPost";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<FullPost/>} />
      </Route>
    </Routes>
  )
}
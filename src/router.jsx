import { BrowserRouter, Routes, Route } from "react-router";
import Shows from "./pages/Shows";
import Stages from "./pages/Stages";
import Artists from "./pages/Artists";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="shows" element={<Shows />} />
        <Route path="palcos" element={<Stages />} />
        <Route path="artistas" element={<Artists />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

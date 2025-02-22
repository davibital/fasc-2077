import { BrowserRouter, Routes, Route } from "react-router";
import Artists from "@/pages/Artists";
import ShowList from "./pages/Shows";
import StageList from "./pages/Stages";
import ShowDetail from "./pages/Artists/"
import App from "./pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="shows/:showName" element={<ShowDetail />} />
        <Route path="shows" element={<ShowList />} />
        <Route path="palcos" element={<StageList />} />
        <Route path="artistas" element={<Artists />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

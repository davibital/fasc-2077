import { BrowserRouter, Routes, Route } from "react-router";
import Shows from "@/pages/Shows";
import Stages from "@/pages/Stages";
import Artists from "@/pages/Artists";
import ShowList from "./pages/Shows/showList";
import StageList from "./pages/Stages/stageList";
import ShowDetail from "./pages/Shows/showDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="shows" element={<Shows />} />
        <Route path="shows/:showName" element={<ShowDetail />} />
        <Route path="showsList" element={<ShowList />} />
        <Route path="palcos" element={<Stages />} />
        <Route path="stageList" element={<StageList />} />
        <Route path="artistas" element={<Artists />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

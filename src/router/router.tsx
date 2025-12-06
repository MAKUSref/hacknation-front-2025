import { BrowserRouter, Route, Routes } from "react-router";
import { PATHS } from "./paths";
import { MainLayout } from "@/components/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { ProcessPage } from "@/pages/ProcessPage";
import { EpuapLoginPage } from "@/pages/EpuapLoginPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.PROCESS} element={<ProcessPage />} />
        </Route>
        <Route path={PATHS.EPUAP_LOGIN} element={<EpuapLoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

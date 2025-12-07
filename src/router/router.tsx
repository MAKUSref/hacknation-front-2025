import { BrowserRouter, Route, Routes } from "react-router";
import { PATHS } from "./paths";
import { MainLayout } from "@/components/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { ProcessPage } from "@/pages/legislative/ProcessPage";
import { EpuapLoginPage } from "@/pages/EpuapLoginPage";
import { NavigationLayout } from "@/components/layouts/NavigationLayout";
import { AllProcessesPage } from "@/pages/legislative/AllProcessesPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route path={PATHS.HOME} element={<NavigationLayout />}>
            <Route index path={PATHS.HOME} element={<HomePage />} />
            <Route path={PATHS.ALL_PROCESSES} element={<AllProcessesPage />} />
            <Route path={PATHS.PROCESS} element={<ProcessPage />} />
          </Route>
          <Route path={PATHS.EPUAP_LOGIN} element={<EpuapLoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

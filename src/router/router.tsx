import { BrowserRouter, Route, Routes } from "react-router";
import { PATHS } from "./paths";
import { MainLayout } from "@/components/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { ProcessPage } from "@/pages/legislative/ProcessPage";
import { EpuapLoginPage } from "@/pages/EpuapLoginPage";
import { NavigationLayout } from "@/components/layouts/NavigationLayout";
import { AllProcessesPage } from "@/pages/legislative/AllProcessesPage";
import { WatchedProcessesPage } from "@/pages/legislative/WatchedProcessesPage";
import { AdminLayout } from "@/components/layouts/AdminLayout";
import { AdminDashboardPage } from "@/pages/admin/AdminDashboardPage";
import { AddProcessPage } from "@/pages/admin/AddProcessPage";
import { UpdateProcessPage } from "@/pages/admin/UpdateProcessPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route path={PATHS.HOME} element={<NavigationLayout />}>
            <Route index path={PATHS.HOME} element={<HomePage />} />
            <Route path={PATHS.ALL_PROCESSES} element={<AllProcessesPage />} />
            <Route path={PATHS.PROCESS} element={<ProcessPage />} />
            <Route
              path={PATHS.WATCHED_PROCESSES}
              element={<WatchedProcessesPage />}
            />
          </Route>
          <Route path={PATHS.EPUAP_LOGIN} element={<EpuapLoginPage />} />

          <Route path={PATHS.ADMIN.DASHBOARD} element={<AdminLayout />}>
            <Route index path={PATHS.ADMIN.DASHBOARD} element={<AdminDashboardPage />} />
            <Route path={PATHS.ADMIN.ADD_PROCESSES} element={<AddProcessPage />} />
            <Route path={PATHS.ADMIN.UPDATE_PROCESS} element={<UpdateProcessPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

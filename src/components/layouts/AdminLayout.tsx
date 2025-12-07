import { Outlet } from "react-router";
import { AdminNavbar } from "../molecules/AdminNavbar";

export function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

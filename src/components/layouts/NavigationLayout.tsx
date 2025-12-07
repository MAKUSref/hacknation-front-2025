import { Outlet } from "react-router";
import { Footer } from "../molecules/Footer";
import { Navbar } from "../molecules/Navbar";

export function NavigationLayout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

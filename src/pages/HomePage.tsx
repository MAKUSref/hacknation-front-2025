import { ConfirmModal } from "@/components/organisms/modals/ConfirmModal";
import { useHealthCheck } from "@/hooks/useHealthCheck";
import { Navbar } from "@/components/molecules/Navbar";

export const HomePage = () => {
  useHealthCheck();

  return (
    <>
      <Navbar />
      <div className="">
        <h1 className="">Welcome to the Home Page</h1>
        <p className="">This is the main landing page of the application.</p>
        <ConfirmModal />
      </div>
    </>
  );
};

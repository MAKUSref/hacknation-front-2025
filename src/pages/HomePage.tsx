import { ConfirmModal } from "@/components/organisms/modals/ConfirmModal";
import { useHealthCheck } from "@/hooks/useHealthCheck";

export const HomePage = () => {
  useHealthCheck()
  
  return (
    <div className="">
      <h1 className="">Welcome to the Home Page</h1>
      <p className="">This is the main landing page of the application.</p>
      <ConfirmModal />
    </div>
  );
};

import { ConfirmModal } from "@/components/organisms/modals/ConfirmModal";
import { useHealthCheck } from "@/hooks/useHealthCheck";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { PATHS } from "@/router/paths";


export const HomePage = () => {
  useHealthCheck();
  const accessToken = useAppSelector((state) => state.session.accessToken);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!accessToken) {
      navigate(PATHS.LOGIN);
    }
  }, [accessToken, navigate])

  return (
    <div className="">
      <h1 className="">Welcome to the Home Page</h1>
      <p className="">This is the main landing page of the application.</p>
      <ConfirmModal />
    </div>
  );
};

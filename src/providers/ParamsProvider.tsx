import { useFieldsModal } from "@/contexts/ChooseFieldsModalContext";
import { useEffect, type PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router";

export function ParamsProvider({ children }: PropsWithChildren) {
  const { setOn: setOnFieldsModal } = useFieldsModal();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const completeRegister = params.get("completeRegister");
    
    console.log({ completeRegister, search: location.search });

    if (completeRegister === "true") {
      // Remove the query param
      params.delete("completeRegister");
      const newSearch = params.toString();
      navigate(
        {
          pathname: location.pathname,
          search: newSearch ? `?${newSearch}` : "",
        },
        { replace: true }
      );
      
      setOnFieldsModal();
    }
  }, [location.search, location.pathname, navigate, setOnFieldsModal]);

  return <>{children}</>;
}
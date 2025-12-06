import { PATHS } from "@/router/paths";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import epuapLoginImage from "@/assets/imgs/epuap.png";
import { Spin } from "antd";

export function EpuapLoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(`${PATHS.HOME}?completeRegister=true`);
    }, 3200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="w-full flex items-center justify-center">
      <img className="w-full p-4" src={epuapLoginImage} alt="Epuap Login" />
      <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center bg-[#00000066]">
        <Spin size="large" />
        <p className="text-white">Logowanie ...</p>
      </div>
    </div>
  );
}

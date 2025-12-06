import { useFieldsModal } from "@/contexts/ChooseFieldsModalContext";
import { useQueryState } from "nuqs";
import { useEffect, type PropsWithChildren } from "react";

export function ParamsProvider({ children }: PropsWithChildren) {
  const [completeRegister, setCompleteRegister] = useQueryState("completeRegister");
  const { setOn: setOnFieldsModal } = useFieldsModal();

  useEffect(() => {
    if (completeRegister === "true") {
      setCompleteRegister(null);
      setOnFieldsModal();
    }
  }, [completeRegister, setCompleteRegister, setOnFieldsModal]);

  return <>{children}</>;
}
import { ChooseFieldsModal } from "@/components/organisms/modals/ChooseFieldsModal";
import { useToggle } from "@/hooks/useToggle";
import { createContext, use, type ReactNode } from "react";

const useContextData = () => {
  const toggleProps = useToggle();
  
  return {
    ...toggleProps,
    setOn: () => {
      console.log("set on");
      toggleProps.setOn();
    }
  };
};

type ContextData = ReturnType<typeof useContextData>;

const ChooseFieldsModalContext = createContext<ContextData | null>(null);

type Props = {
  children: ReactNode;
};

const ChooseFieldsModalProvider = ({ children }: Props) => {
  const contextData = useContextData();

  return (
    <ChooseFieldsModalContext value={contextData}>
      <ChooseFieldsModal />
      {children}
    </ChooseFieldsModalContext>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFieldsModal = () => {
  const context = use(ChooseFieldsModalContext);
  if (!context) {
    throw new Error(
      "useFieldsModal can be used only inside ChooseFieldsModalProvider"
    );
  }
  return context;
};

export { ChooseFieldsModalProvider };

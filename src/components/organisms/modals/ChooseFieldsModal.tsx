import { useFieldsModal } from "@/contexts/ChooseFieldsModalContext";
import { Modal } from "antd";

export function ChooseFieldsModal() {
  const { value, setOff } = useFieldsModal();
  return (
    <Modal open={value} onCancel={setOff} onOk={setOff}>
      <div>ChooseFieldsModal</div>
    </Modal>
  );
}

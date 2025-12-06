import { Btn } from "@/components/atoms/Button";
import { useToggle } from "@/hooks/useToggle";
import { PATHS } from "@/router/paths";
import { Modal } from "antd";
import { useNavigate } from "react-router";

export function ConfirmModal() {
  const { value, setOn, setOff } = useToggle();
  const navigate = useNavigate();

  const onConfirm = () => {
    setOff();
    navigate(PATHS.LOGIN);
  }

  return (
    <>
      <Btn onClick={setOn}>Important Action</Btn>
      <Modal open={value} onCancel={setOff} onOk={onConfirm}>
        <h2>Are you sure?</h2>
        <p>Important action cannot be undone.</p>
      </Modal>
    </>
  );
}

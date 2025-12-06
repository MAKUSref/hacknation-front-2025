import emblemIcon from "@/assets/emblem.svg";
import { useLoginMutation } from "@/api/baseApi/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setAccessToken } from "@/redux/session/sessionSlice";
import { Btn } from "../atoms/Button";
import { useFieldsModal } from "@/contexts/ChooseFieldsModalContext";

export function LoginButton() {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const { setOn } = useFieldsModal();

  const handleLogin = () => {
    login({ email: "test", password: "test" })
      .unwrap()
      .then((response) => {
        setOn();
        dispatch(setAccessToken(response.accessToken));
      });
  };

  return (
    <Btn
      onClick={handleLogin}
      variant="outline"
      className="flex-nowrap gap-2.5"
    >
      <img width={35} src={emblemIcon} alt="Emblem icon" />
      <span>Zaloguj się</span>
    </Btn>
  );
}

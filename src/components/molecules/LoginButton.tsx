import emblemIcon from "@/assets/emblem.svg";
import { useLoginMutation } from "@/api/baseApi/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setAccessToken } from "@/redux/session/sessionSlice";
import { Btn } from "../atoms/Button";
import { useNavigate } from "react-router";
import { PATHS } from "@/router/paths";

export function LoginButton() {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ email: "jan@example.com", password: "test" })
      .unwrap()
      .then((response) => {
        dispatch(setAccessToken(response.accessToken));
        navigate(PATHS.EPUAP_LOGIN);
      });
  };

  return (
    <Btn
      onClick={handleLogin}
      variant="outline"
      className="flex-nowrap gap-2.5 pl-3 text-sm"
    >
      <img width={35} src={emblemIcon} alt="Emblem icon" />
      <span>Zaloguj się</span>
    </Btn>
  );
}

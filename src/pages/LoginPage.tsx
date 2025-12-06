import { useLoginMutation } from "@/api/baseApi/auth/authApi";
import { Btn } from "@/components/atoms/Button";
import { useAppDispatch } from "@/redux/hooks";
import { setAccessToken } from "@/redux/session/sessionSlice";
import { useNavigate } from "react-router";
import { PATHS } from "@/router/paths";

export function LoginPage() {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ email: "test", password: "test" }).unwrap().then((response) => {
      dispatch(setAccessToken(response.accessToken));
    }).then(() => {
      navigate(PATHS.HOME);
    });
  }

  return (
    <div className="max-w-[500px] px-3 py-6 mx-auto">
      <Btn onClick={handleLogin} type="submit" className="w-full">
        Login
      </Btn>
    </div>
  );
}

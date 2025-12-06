import emblemIcon from "@/assets/emblem.svg";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { logout, setAccessToken } from "@/redux/session/sessionSlice";
import { useLoginMutation } from "@/api/baseApi/auth/authApi";
import { useNavigate } from "react-router";
import { PATHS } from "@/router/paths";

export function Navbar(props: React.HTMLAttributes<HTMLElement>) {
  const accessToken = useAppSelector((state) => state.session.accessToken);
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ email: "test", password: "test" })
      .unwrap()
      .then((response) => {
        dispatch(setAccessToken(response.accessToken));
      })
      .then(() => {
        navigate(PATHS.HOME);
      });
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="p-2 w-full flex items-center" {...props}>
      <button
        onClick={accessToken ? handleLogout : handleLogin}
        className="p-3 border-black border-2 ml-auto rounded-4xl flex flex-row items-center gap-1 hover:cursor-pointer"
      >
        <span>
          <img width={35} src={emblemIcon} alt="Emblem icon" />
        </span>
        {accessToken ? "Wyloguj" : "Zaloguj"}
      </button>
    </nav>
  );
}

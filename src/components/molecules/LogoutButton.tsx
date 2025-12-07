import { useAppDispatch } from "@/redux/hooks";
import { Btn } from "../atoms/Button";
import { logout } from "@/redux/session/sessionSlice";
import UserIcon from "@/assets/user.svg";

export function LogoutButton({ onClick }: { onClick?: () => void }) {
  const dispatch = useAppDispatch();

  return (
    <Btn
      className="gap-2.5 px-5! text-sm"
      variant="outline"
      onClick={() => {
        if (onClick) onClick();
        dispatch(logout());
      }}
    >
      <img src={UserIcon} width={25} alt="User icon" />
      Wyloguj się
    </Btn>
  );
}

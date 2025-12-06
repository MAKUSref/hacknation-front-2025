import { useAppDispatch } from "@/redux/hooks";
import { Btn } from "../atoms/Button";
import { logout } from "@/redux/session/sessionSlice";

export function LogoutButton() {
  const dispatch = useAppDispatch();

  return (
    <Btn variant="outline" onClick={() => dispatch(logout())}>
      Logout
    </Btn>
  );
}

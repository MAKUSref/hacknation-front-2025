import { useAppSelector } from "@/redux/hooks";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export function Navbar(props: React.HTMLAttributes<HTMLElement>) {
  const accessToken = useAppSelector((state) => state.session.accessToken);

  return (
    <nav className="p-2 w-full flex items-center justify-end" {...props}>
      {accessToken ? <LogoutButton /> : <LoginButton />}
    </nav>
  );
}

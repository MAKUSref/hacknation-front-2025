import { useAppSelector } from "@/redux/hooks";
import serviceLogo from "@/assets/service-logo.svg";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { Link } from "@/components/atoms/Link";
import { useNavigate } from "react-router";
import { PATHS } from "@/router/paths";

export function Navbar(props: React.HTMLAttributes<HTMLElement>) {
  const accessToken = useAppSelector((state) => state.session.accessToken);
  const navigate = useNavigate();

  return (
    <nav
      className="p-2 w-full flex flex-wrap items-center gap-6 container fixed top-0 left-0 right-0 bg-white"
      {...props}
    >
      <div className="shrink-0">
        <img
          className="cursor-pointer"
          src={serviceLogo}
          alt="Service Logo"
          onClick={() => navigate(PATHS.HOME)}
        />
      </div>
      <div className="navigation-links flex flex-wrap gap-6 max-md:hidden">
        <div className="whitespace-nowrap">
          <Link exact href={PATHS.HOME}>
            Strona Główna
          </Link>
        </div>
        <div className="whitespace-nowrap">
          <Link exact href={PATHS.ALL_PROCESSES}>
            Wszystkie dokumenty
          </Link>
        </div>
        {accessToken && (
          <div className="whitespace-nowrap">
            <Link href={PATHS.WATCHED_PROCESSES}>Obserwowane dokumenty</Link>
          </div>
        )}
      </div>
      <div className="shrink-0 ml-auto">
        {accessToken ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
}

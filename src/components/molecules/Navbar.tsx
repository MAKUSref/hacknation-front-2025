import { useAppSelector } from "@/redux/hooks";
import serviceLogo from "@/assets/service-logo.svg";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { Link } from "@/components/atoms/Link";

export function Navbar(props: React.HTMLAttributes<HTMLElement>) {
  const accessToken = useAppSelector((state) => state.session.accessToken);

  return (
    <nav
      className="p-2 w-full flex flex-wrap items-center gap-6 container"
      {...props}
    >
      <div className="shrink-0">
        <img src={serviceLogo} alt="Service Logo" />
      </div>
      <div className="navigation-links flex flex-wrap gap-6 max-md:hidden">
        <div className="whitespace-nowrap">
          <Link active href="#">
            Strona Główna
          </Link>
        </div>
        <div className="whitespace-nowrap">
          <Link href="#">Wszystkie dokumenty</Link>
        </div>
        <div className="whitespace-nowrap">
          <Link href="#">Obserwowane dokumenty</Link>
        </div>
      </div>
      <div className="shrink-0 ml-auto">
        {accessToken ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
}

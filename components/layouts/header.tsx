import { PageRoutes } from "@/constants/page-routes";
import Nav from "./nav";

const Header = () => {
  return (
    <header class="flex items-center justify-between px-6 md:px-12 py-4">
      <a href={PageRoutes.Home} class="font-bold text-xl">
        PZ<span class="text-red-400">Play</span>
      </a>
      <Nav />
    </header>
  );
};

export default Header;

import { PageRoutes } from "@/constants/page-routes";
import Nav from "./nav";

const Header = () => {
  return (
    <header class="flex items-center justify-between px-6 py-2">
      <a href={PageRoutes.Home}>Pagzone Play</a>
      <Nav />
    </header>
  );
};

export default Header;

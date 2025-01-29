import { PageRoutes } from "@/constants/page-routes";
import { cn } from "@/utils/cn";
import { isLinkActive } from "@/utils/is-link-active";
import { createMemo, For, Show } from "solid-js";
import { usePageContext } from "vike-solid/usePageContext";

const Nav = () => {
  const pageContext = usePageContext();

  const navLinks = createMemo<{ name: string; href: PageRoutes; visible: () => boolean }[]>(() => [
    {
      name: "Sign In",
      href: PageRoutes.SignIn,
      visible: () => true,
    },
    {
      name: "Sign Up",
      href: PageRoutes.SignUp,
      visible: () => true,
    },
  ]);

  return (
    <nav>
      <ul class="flex items-center gap-x-5">
        <For each={navLinks()}>
          {({ name, href, visible }) => (
            <Show when={visible()}>
              <li>
                <a
                  href={href}
                  class={cn(isLinkActive(href, pageContext.urlPathname) && "text-red-400")}
                >
                  {name}
                </a>
              </li>
            </Show>
          )}
        </For>
      </ul>
    </nav>
  );
};

export default Nav;

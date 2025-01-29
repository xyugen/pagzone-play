import A from "@/components/ui/a";
import { FlowProps } from "solid-js";

const Layout = (props: FlowProps) => {
  const year = new Date().getFullYear();
  return (
    <div class="p-2 relative flex flex-col justify-center items-center min-h-screen">
      <div class="p-5 md:p-9 mx-auto max-w-full md:max-w-sm w-full border border-neutral-200 rounded-lg bg-white space-y-4">
        {props.children}
      </div>

      <footer class="text-center text-neutral-500 text-xs mt-2">
        {year}{" "}
        <A href="https://www.facebook.com/pagzone.collective" target="_blank">
          Pagzone
        </A>
        . All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;

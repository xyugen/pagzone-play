import { cn } from "@/utils/cn";
import { JSX, splitProps } from "solid-js";

const A = (props: JSX.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <a class={cn("text-red-400 hover:text-red-400/80 transition-colors", local.class)} {...rest} />
  );
};

export default A;

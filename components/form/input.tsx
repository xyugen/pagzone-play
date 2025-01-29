import { cn } from "@/utils/cn";
import { JSX, splitProps } from "solid-js";

const Input = (props: JSX.InputHTMLAttributes<HTMLInputElement>) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <input
      type="text"
      class={cn(
        "block border border-neutral-200 w-full rounded-md py-1.5 px-2 ring-0 ring-inset ring-gray-400 placeholder:text-neutral-400 text-neutral-500 focus-visible:text-neutral-800 focus-visible:ring-red-300 focus-visible:ring-2 transition-all outline-none",
        local.class
      )}
      {...rest}
    />
  );
};

export default Input;

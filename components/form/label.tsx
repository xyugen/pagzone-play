import { cn } from "@/utils/cn";
import { JSX } from "solid-js/jsx-runtime";

const Label = (props: JSX.LabelHTMLAttributes<HTMLLabelElement>) => {
  return <label {...props} class={cn("block text-neutral-500 text-sm", props.class)} />;
};

export default Label;

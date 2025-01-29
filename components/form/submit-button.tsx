import { cn } from "@/utils/cn";
import { LoaderCircle } from "lucide-solid";
import { JSX, Show, splitProps } from "solid-js";
import { Button } from "../ui/button";

interface SubmitButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const [local, rest] = splitProps(props, ["children", "isSubmitting", "class"]);

  return (
    <Button
      type="submit"
      class={cn("relative disabled:opacity-70", local.class)}
      disabled={local.isSubmitting}
      {...rest}
    >
      <Show when={local.isSubmitting} fallback={local.children}>
        <LoaderCircle class="size-6 animate-spin text-current" />
      </Show>
    </Button>
  );
};

export default SubmitButton;

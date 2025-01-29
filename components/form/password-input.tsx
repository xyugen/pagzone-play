import { Eye, EyeOff } from "lucide-solid";
import { createSignal, JSX, Show } from "solid-js";
import Input from "./input";

/**
 * A password input component that allows toggling visibility of the password text.
 *
 * @param props - The input properties extending the standard HTML input attributes.
 */
const PasswordInput = (props: JSX.InputHTMLAttributes<HTMLInputElement>) => {
  let inputRef!: HTMLInputElement;
  const [showPassword, setShowPassword] = createSignal<boolean>(false);

  const handleClick = () => {
    if (inputRef) {
      inputRef.focus();
    }
    setShowPassword(!showPassword());
  };

  return (
    <div class="relative w-full">
      <Input {...props} ref={inputRef} type={showPassword() ? "text" : "password"} />
      <button
        type="button"
        tabIndex={-1}
        onClick={handleClick}
        aria-label={showPassword() ? "Hide password" : "Show password"}
        class="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
      >
        <Show
          when={showPassword()}
          fallback={<EyeOff class="size-5 text-red-400 hover:text-red-500/80 transition-colors" />}
        >
          <Eye class="size-5 text-red-400 hover:text-red-500/80 transition-colors" />
        </Show>
      </button>
    </div>
  );
};

export default PasswordInput;

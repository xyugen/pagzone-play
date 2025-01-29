// felte.d.ts
import "solid-js";

import { JSX as JSXOrig } from "solid-js";

type TForm = JSXOrig.FormHTMLAttributes<HTMLFormElement> & {
  "use:form"?: any;
  onFelteSuccess?: (e: CustomEvent) => void;
  onFelteError?: (e: CustomEvent) => void;
};

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      form: TForm;
    }
  }
}

import { FlowProps } from "solid-js";
import { Toaster } from "solid-sonner";

const Wrapper = (props: FlowProps) => {
  return (
    <>
      <Toaster
        toastOptions={{
          classes: {
            error: "bg-red-500! text-white!",
            success: "bg-green-500! text-white!",
            loading: "bg-yellow-500! text-white!",
            info: "bg-blue-400! text-white!",
          },
        }}
      />
      {props.children}
    </>
  );
};

export default Wrapper;

import { type FlowProps } from "solid-js";
import { useMetadata } from "vike-metadata-solid";

import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import "./global.css";

useMetadata.setGlobalDefaults({
  title: "Pagzone Play",
  // description: "Demo showcasing Vike and Solid.",
});

export default function RootLayout(props: FlowProps) {
  return (
    <>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </>
  );
}

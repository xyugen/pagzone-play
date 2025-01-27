import { type FlowProps } from "solid-js";
import { useMetadata } from "vike-metadata-solid";

import "@/styles/global.css";
import getTitle from "@/utils/get-title";

import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

useMetadata.setGlobalDefaults({
  title: getTitle(),
  // description: "Demo showcasing Vike and Solid.",
});

export default function RootLayout(props: FlowProps) {
  return (
    <div>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
}

import { type FlowProps } from "solid-js";
import { useMetadata } from "vike-metadata-solid";

import Wrapper from "@/components/layouts/wrapper";
import "@/styles/global.css";
import getTitle from "@/utils/get-title";

useMetadata.setGlobalDefaults({
  title: getTitle(),
  // description: "Demo showcasing Vike and Solid.",
});

export default function RootLayout(props: FlowProps) {
  return <Wrapper>{props.children}</Wrapper>;
}

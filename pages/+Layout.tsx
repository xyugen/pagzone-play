import getTitle from "@/utils/get-title";
import { type FlowProps } from "solid-js";
import { useMetadata } from "vike-metadata-solid";

import "./global.css";

useMetadata.setGlobalDefaults({
  title: getTitle("Home"),
  // description: "Demo showcasing Vike and Solid.",
});

export default function RootLayout(props: FlowProps) {
  return <div>{props.children}</div>;
}

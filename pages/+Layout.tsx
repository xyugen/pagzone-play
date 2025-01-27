import { type FlowProps } from "solid-js";
import { useMetadata } from "vike-metadata-solid";

import "./global.css";

useMetadata.setGlobalDefaults({
  title: "Pagzone Play",
  // description: "Demo showcasing Vike and Solid.",
});

export default function RootLayout(props: FlowProps) {
  return <div>{props.children}</div>;
}

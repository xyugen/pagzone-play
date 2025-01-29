import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { FlowProps } from "solid-js";

const Layout = (props: FlowProps) => {
  return (
    <div>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};

export default Layout;

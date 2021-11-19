import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { CssLayout } from "@divriots/dockit-react/mdx-layout-css";
import { Logo } from "./Logo";

export const Layout = (props) => (
  <MDXProvider>
    <CssLayout
      logo={
        <div style={{ width: "250px" }}>
          <Logo />
        </div>
      }
      {...props}
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"
    />
  </MDXProvider>
);

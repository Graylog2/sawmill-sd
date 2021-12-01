import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { CssLayout } from "@divriots/dockit-react/mdx-layout-css";
import { Logo } from "../Logo";
import theme from "~/theme/src/theme.json";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "~/theme/src/variables.css";
import "bootstrap/dist/css/bootstrap.css";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: var(--default-typography-font-sizes-root);
  }
`;

export const Layout = (props: unknown) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MDXProvider components={{}}>
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
  </ThemeProvider>
);

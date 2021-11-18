import React, { useState } from "react";
import { MDXProvider } from "@mdx-js/react";

import { CoreLayout } from "./CoreLayout";
import { StylesheetSwitch } from "./StylesheetSwitch";
import type { ColorScheme } from "./StylesheetSwitch";
import styles from "./common-styles";

export const getInitialColorScheme = () =>
  localStorage.getItem("colorScheme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches && "dark") ||
  "light";

export const CssLayout = ({
  components = {},
  onSwitch = (scheme: ColorScheme) => {},
  ...rest
}) => {
  const stylesheets = {
    light: "https://cdn.jsdelivr.net/npm/water.css/out/light.min.css",
    dark: "https://cdn.jsdelivr.net/npm/water.css/out/dark.min.css",
  };

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    getInitialColorScheme()
  );

  return (
    <MDXProvider components={{ ...components }}>
      <style>{styles}</style>
      <link rel="stylesheet" href={stylesheets[colorScheme]} />
      <CoreLayout
        stylesheetSwitch={
          <StylesheetSwitch
            colorScheme={colorScheme}
            onSwitch={(scheme) => {
              onSwitch(scheme);
              localStorage.setItem("colorScheme", scheme);
              setColorScheme(scheme);
            }}
          />
        }
        {...rest}
      />
    </MDXProvider>
  );
};

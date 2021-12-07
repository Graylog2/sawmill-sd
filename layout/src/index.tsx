import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CssLayout } from '@divriots/dockit-react/mdx-layout-css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.css';
import 'https://unpkg.com/prismjs@1.25.0/themes/prism-tomorrow.css';

import SawmillPlayground from '~/layout/src/SawmillPlayground';
import * as theme from '~/theme/src/theme.json';
import sawmillVariables from '~/theme/src/variables.css';
import noirVars from '~/theme/src/variables-noir.css';
import { Logo } from './Logo';

const GlobalStyle = createGlobalStyle`
  :root {
    --text-main: --sawmill-color-text-primary;
    ${sawmillVariables}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${noirVars}
    }
  }
  
  html {
    font-size: var(--sawmill-typography-font-sizes-root);
  }
  
  body {
    color: var(--sawmill-color-text-primary);
  }
`;

export const Layout = (props: unknown) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={{ SawmillPlayground }}>
        <GlobalStyle />
        <CssLayout
          logo={
            <div style={{ width: '250px' }}>
              <Logo />
            </div>
          }
          {...props}
        />
      </MDXProvider>
    </ThemeProvider>
  );
};

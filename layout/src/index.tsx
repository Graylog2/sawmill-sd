import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CssLayout } from '@divriots/dockit-react/mdx-layout-css';
import { Logo } from './Logo';
import * as theme from '~/theme/src/theme.json';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '~/theme/src/variables.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'https://unpkg.com/prismjs@1.25.0/themes/prism-tomorrow.css';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: var(--sawmill-typography-font-sizes-root);
  }
  
  body {
    color: var(--sawmill-color-text-primary) !important;
  }
`;

export const Layout = (props: unknown) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={{}}>
      <GlobalStyle />
      <CssLayout
        logo={
          <div style={{ width: '250px' }}>
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

import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  CssLayout,
  getInitialColorScheme,
} from '@divriots/dockit-react/mdx-layout-css';
import { Logo } from './Logo';
import * as theme from '~/theme/src/theme.json';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import '~/theme/src/variables.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'https://unpkg.com/prismjs@1.25.0/themes/prism-tomorrow.css';

const noirVars = async () => await import('~/theme/src/variables-noir.css');

const GlobalStyle = createGlobalStyle`
  @import '../../theme/src/variables.css';
  @import 'bootstrap/dist/css/bootstrap.css';

  @media (prefers-color-scheme: dark) {
    :root {
      @import '../../theme/src/variables-noir.css';
    }
  }

  :root {
    --text-main: --sawmill-color-text-primary;
  }
  
  html {
    font-size: var(--sawmill-typography-font-sizes-root);
  }
  
  body {
    color: var(--sawmill-color-text-primary);
  }
`;

const DarkColors = createGlobalStyle`
  @media (prefers-color-scheme: dark) {
    :root {
      ${noirVars()}
    }
  }
`;

export const Layout = (props: unknown) => {
  const [mode, setMode] = React.useState(getInitialColorScheme());

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={{}}>
        <GlobalStyle />
        {mode === 'dark' ? <DarkColors /> : null}
        <CssLayout
          logo={
            <div style={{ width: '250px' }}>
              <Logo />
            </div>
          }
          onSwitch={handleModeSwitch}
          {...props}
        />
      </MDXProvider>
    </ThemeProvider>
  );
};

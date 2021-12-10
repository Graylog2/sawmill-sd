import * as React from 'react';
import { Showcases } from '@divriots/dockit-react/showcases';
import '../../opacity/src/styles.css';
import { createGlobalStyle } from 'styled-components';

export const RadiiShowcase = ({ values }) => {
  const radiusClassNames = React.useMemo(
    () =>
      values
        .map((value) => {
          return `.${value} { border-radius: var(${value}); }`;
        })
        .join('\n'),
    [values]
  );

  const GlobalStyle = React.useMemo(
    () => createGlobalStyle`
  ${radiusClassNames}
`,
    [radiusClassNames]
  );

  return (
    <>
      <GlobalStyle />
      <Showcases
        showcaseClasses={values}
        showcaseComponent="box"
        componentProps={{
          className: 'box',
        }}
      />
    </>
  );
};

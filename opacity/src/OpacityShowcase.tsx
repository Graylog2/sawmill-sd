import * as React from 'react';
import { getCssCustomProps } from '@divriots/dockit-react/style-showcases';
import { Showcases } from '@divriots/dockit-react/showcases';
import './styles.css';
import { createGlobalStyle } from 'styled-components';

const props = getCssCustomProps('--sawmill-opacities');
const values = props.map(([name]) => name);

const opacityClassNames = values
  .map((value) => {
    return `.${value} { opacity: var(${value}); }`;
  })
  .join('\n');

const GlobalStyle = createGlobalStyle`
  ${opacityClassNames}
`;

export const OpacityShowcase = () => {
  return (
    <>
      <GlobalStyle />
      <Showcases
        showcaseClasses={values}
        showcaseComponent="box"
        componentProps={{
          className: 'box',
          checkeredBackground: true,
        }}
      />
    </>
  );
};

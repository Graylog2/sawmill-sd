import * as React from 'react';
import { getCssCustomProps } from '@divriots/dockit-react/style-showcases';
import { Showcases } from '@divriots/dockit-react/showcases';
import './styles.css';
import { createGlobalStyle } from 'styled-components';

const props = getCssCustomProps('--sawmill-shadows');
const values = props.map(([name]) => name);

const opacityClassNames = values
  .map((value) => {
    return `.${value} { box-shadow: var(${value}) !important; }`;
  })
  .join('\n');

const GlobalStyle = createGlobalStyle`
  ${opacityClassNames}
`;

export const ShadowsShowcase = () => {
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

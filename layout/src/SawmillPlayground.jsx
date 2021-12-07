import * as React from 'react';
import { ShadowPlayground } from '@divriots/dockit-react/playground';
import styles from 'bootstrap/dist/css/bootstrap.css?raw';
import vars from '~/theme/src/variables.css?raw';
import noirVars from '~/theme/src/variables-noir.css?raw';

const rootVars = `
:root {
  ${vars}
}

@media (prefers-color-scheme: dark) {
  :root {
    ${noirVars}
  }
}
`;

const SawmillPlayground = ({ ...props }) => (
  <ShadowPlayground styles={`${rootVars} ${styles}`} {...props} />
);

export default SawmillPlayground;

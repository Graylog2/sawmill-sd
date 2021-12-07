import * as React from 'react';
import { ShadowPlayground } from '@divriots/dockit-react/playground';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.css?raw';
import sawmillVars from '~/theme/src/variables.css?raw';
import noirSawmillVars from '~/theme/src/variables-noir.css?raw';

const styles = `
  :root {
    ${sawmillVars}
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      ${noirSawmillVars}
    }
  }
  
  ${bootstrapStyles}
`;

const SawmillPlayground = ({ ...props }) => (
  <ShadowPlayground styles={styles} {...props} />
);

export default SawmillPlayground;

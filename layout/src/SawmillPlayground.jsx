import * as React from 'react';
import { Playground } from '@divriots/dockit-react/playground';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.css?raw';
import sawmillVars from '~/theme/src/variables.css?raw';
import noirSawmillVars from '~/theme/src/variables-noir.css?raw';

const styles = `
  ${sawmillVars}
  ${noirSawmillVars}
  ${bootstrapStyles}
`;

const SawmillPlayground = ({ scope, code }) => (
  <Playground styles={styles} scope={scope} code={code} />
);

export default SawmillPlayground;

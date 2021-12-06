import { ShadowPlayground } from '@divriots/dockit-react/playground';
import styles from 'bootstrap/dist/css/bootstrap.css?raw';

const SawmillPlayground = ({ ...props }) => {
  return <ShadowPlayground styles={styles} {...props} />;
};

export default SawmillPlayground;

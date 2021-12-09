import * as React from 'react';
import { Caption } from '@divriots/dockit-react/caption';

const styles = {
  box: {
    height: '1rem',
    backgroundColor: '#718096',
  },
};

interface SpaceProps {
  scale: (string | number)[] | Record<string, string | number>;
  prefix: string;
}

const SpacingsShowcase = ({ scale, prefix }: SpaceProps) => {
  const values = Array.isArray(scale)
    ? (scale as any[]).map((s, i) => [i, s])
    : Object.entries(scale);

  const scaleValues = values
    .map(([k, v]) =>
      v || v === 0
        ? [
            `${k}`.trim().replace(/var\(|\)/gi, ''),
            typeof v === 'number' ? `${v}px` : v,
          ]
        : null
    )
    .filter((i) => i);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {scaleValues.map(([name, value]) => (
          <tr key={`${name}-${value}`}>
            <td>
              <Caption text={`${prefix}-${name}`} />
            </td>
            <td>
              <pre>{value}</pre>
            </td>
            <td>
              <div style={{ ...styles.box, width: value }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SpacingsShowcase;

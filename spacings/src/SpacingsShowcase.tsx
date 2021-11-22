import React from "react";

const styles = {
  box: {
    height: "1rem",
    backgroundColor: "#718096",
  },
};

interface SpaceProps {
  scale: (string | number)[] | Record<string, string | number>;
}

const SpacingsShowcase = ({ scale }: SpaceProps) => {
  const values = Array.isArray(scale)
    ? (scale as any[]).map((s, i) => [i, s])
    : Object.entries(scale);

  const scaleValues = values
    .map(([k, v]) =>
      v || v === 0
        ? [
            `${k}`.trim().replace(/var\(|\)/gi, ""),
            typeof v === "number" ? `${v}px` : v,
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        {scaleValues.map(([name, value]) => (
          <tr key={name}>
            <td>
              <pre>{name}</pre>
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

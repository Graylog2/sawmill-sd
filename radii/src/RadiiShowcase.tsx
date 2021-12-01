import * as React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  border: 1px solid #000;
`;

const OpacityCard = ({ theme }) => {
  const { colors, radii } = theme.default;

  const out = Object.keys(radii).map((radius) => {
    return (
      <>
        <Box
          key={radius}
          style={{
            backgroundColor: colors.brand.primary,
            borderRadius: radii[radius],
          }}
        />
        <caption>theme.default.radii.{radius}</caption>
      </>
    );
  });

  return out;
};

export default OpacityCard;

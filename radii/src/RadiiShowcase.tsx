import * as React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  border: 1px solid #000;
`;

const OpacityCard = ({ theme }) => {
  const { colors, radii } = theme.sawmill;

  return Object.keys(radii).map((radius) => {
    return (
      <>
        <Box
          key={radius}
          style={{
            backgroundColor: colors.teint.brand.primary,
            borderRadius: radii[radius],
          }}
        />
        <caption>theme.sawmill.radii.{radius}</caption>
      </>
    );
  });
};

export default OpacityCard;

import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  border: 1px solid #000;
`;

const OpacityCard = ({ theme }) => {
  const { color, radius } = theme;

  return Object.keys(radius).map((rad) => {
    return (
      <>
        <Box
          key={rad}
          style={{
            backgroundColor: color.brand.primary,
            borderRadius: radius[rad],
          }}
        />
        <caption style={{ whiteSpace: 'nowrap' }}>
          --sawmill-radius-{rad}
        </caption>
      </>
    );
  });
};

export default OpacityCard;

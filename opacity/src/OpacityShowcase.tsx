import * as React from 'react';
import styled from 'styled-components';

const CheckeredBox = styled.div`
  background-color: #000000;
  background-image: linear-gradient(45deg, #999 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #999 75%),
      linear-gradient(45deg, transparent 75%, #999 75%),
        linear-gradient(45deg, #999 25%, #fff 25%);
  background-size: 1.2rem 1.2rem;
  background-position: 0 0, 0 0, -0.6rem -0.6rem, 0.6rem 0.6rem;
  box-shadow: none;
  height: 100px;
  width: 100px;
`;

const OpacityShowcase = ({ theme }) => {
  const { color, opacity } = theme;

  return Object.keys(opacity).map((alpha) => {
    return (
      <React.Fragment key={alpha}>
        <CheckeredBox>
          <div
            style={{
              backgroundColor: color.brand.primary,
              width: '100px',
              height: '100px',
              position: 'relative',
              opacity: opacity[alpha],
            }}
          />
        </CheckeredBox>

        <caption style={{ whiteSpace: 'nowrap' }}>
          --sawmill-opacity-{alpha}
        </caption>
      </React.Fragment>
    );
  });
};

export default OpacityShowcase;

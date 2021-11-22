import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  border: 1px solid #000;
  border-radius: 4px;
`;

const CheckeredBox = styled.div`
  opacity: 1;
  background-color: #000000;
  background-image: linear-gradient(45deg, #999 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #999 75%),
      linear-gradient(45deg, transparent 75%, #999 75%),
        linear-gradient(45deg, #999 25%, #fff 25%);
  background-size: 1rem 1rem;
  background-position: 0 0, 0 0, -0.5rem -0.5rem, 0.5rem 0.5rem;
  position: absolute;
  top: 0;
  z-index: -1;
  boxshadow: none;
  width: 100%;
  height: 100%;
`;

const OpacityCard = ({theme}) => {
  const { colors, opacity } = theme.default;

  const out = Object.keys(opacity).map((alpha) => {
    return (<><Box>
    <CheckeredBox>
    <div key={alpha} style={{
      backgroundColor: colors.brand.primary, 
    opacity: opacity[alpha],
    width: '100%',
    height: '100%'
    }} />
    </CheckeredBox>
    </Box>
    <caption>theme.default.opacity.{alpha}</caption>
    </>)
  })

  return out;
}

export default OpacityCard;
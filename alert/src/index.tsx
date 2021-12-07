import * as React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { Alert as BootstrapAlert } from 'react-bootstrap';

import { TButtonVariantKeys } from '~/button/src/types';

interface AlertProps {
  $bsStyle: TButtonVariantKeys;
  theme: DefaultTheme;
}

interface Props {
  bsStyle: TButtonVariantKeys;
  children: React.ReactNode;
  onDismiss: () => void;
}

const StyledAlert = styled(BootstrapAlert).attrs(
  ({ bsStyle }: { bsStyle: TButtonVariantKeys }) => ({
    bsStyle: null,
    $bsStyle: bsStyle || 'default',
  })
)(({ $bsStyle }: AlertProps) => {
  return css`
    background-color: var(--sawmill-colors-variant-${$bsStyle}-lightest);
    border-color: var(--sawmill-colors-variant-${$bsStyle}-lighter);
    color: var(--sawmill-colors-variant-${$bsStyle}-darker);

    a:not(.btn) {
      color: var(--sawmill-colors-variant-${$bsStyle}-dark);
      font-weight: var(--sawmill-typography-font-weights-bold);
      text-decoration: underline;

      &:hover,
      &:focus,
      &:active {
        color: var(--sawmill-colors-variant-${$bsStyle}-darker);
      }

      &:hover,
      &:focus {
        text-decoration: none;
      }
    }

    &.alert-dismissible {
      .close {
        top: calc(var(--sawmill-spacings-xxs) * -1);
      }
    }
  `;
});

export const Alert = ({ bsStyle, ...rest }: Props) => {
  return <StyledAlert bsStyle={bsStyle} {...rest} />;
};

import * as React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import merge from 'lodash/merge';

import { TButtonProps, TButtonVariantStates } from './types';
import { generateColors, generateSizes } from './styles';

const baseColors = {
  background: {
    default: '--sawmill-colors-variant-gray-3',
    danger: '--sawmill-colors-variant-danger-5',
    info: '--sawmill-colors-variant-info-5',
    link: '--sawmill-colors-variant-transparent',
    primary: '--sawmill-colors-variant-primary-5',
    success: '--sawmill-colors-variant-success-5',
    warning: '--sawmill-colors-variant-warning-3',
  },
  border: {
    default: '--sawmill-colors-variant-gray-3',
    danger: '--sawmill-colors-variant-danger-5',
    info: '--sawmill-colors-variant-info-5',
    link: '--sawmill-colors-variant-transparent',
    primary: '--sawmill-colors-variant-primary-5',
    success: '--sawmill-colors-variant-success-5',
    warning: '--sawmill-colors-variant-warning-3',
  },
  text: {
    default: '--sawmill-colors-variant-gray-9',
    danger: '--sawmill-colors-variant-gray-0',
    info: '--sawmill-colors-variant-gray-0',
    link: '--sawmill-colors-variant-primary-7',
    primary: '--sawmill-colors-variant-gray-0',
    success: '--sawmill-colors-variant-gray-9',
    warning: '--sawmill-colors-variant-gray-9',
  },
};

const hoverColors = merge({}, baseColors, {
  background: {
    default: '--sawmill-colors-variant-gray-4',
    danger: '--sawmill-colors-variant-danger-6',
    info: '--sawmill-colors-variant-info-6',
    primary: '--sawmill-colors-variant-primary-6',
    success: '--sawmill-colors-variant-success-6',
    warning: '--sawmill-colors-variant-warning-4',
  },
  text: {
    link: '--sawmill-colors-variant-primary-8',
  },
});

const activeColors = merge({}, baseColors, {
  background: {
    default: '--sawmill-colors-variant-gray-4',
    danger: '--sawmill-colors-variant-danger-6',
    info: '--sawmill-colors-variant-info-6',
    primary: '--sawmill-colors-variant-primary-6',
    success: '--sawmill-colors-variant-success-6',
    warning: '--sawmill-colors-variant-warning-4',
  },
  border: {
    default: '--sawmill-colors-variant-gray-5',
    danger: '--sawmill-colors-variant-danger-7',
    info: '--sawmill-colors-variant-info-7',
    primary: '--sawmill-colors-variant-primary-7',
    success: '--sawmill-colors-variant-success-7',
    warning: '--sawmill-colors-variant-warning-5',
  },
  text: {
    link: '--sawmill-colors-variant-primary-8',
  },
});

const variantColors: TButtonVariantStates = {
  base: baseColors,
  hover: hoverColors,
  active: activeColors,
};

const buttonStyles = [...generateColors(variantColors), ...generateSizes()];

const StyledButton = styled(BootstrapButton)(
  ({ inline }) => css`
    ${buttonStyles}
    ${inline
      ? `
    padding: var(--sawmill-spacings-1) var(--sawmill-spacings-xxs);
    font-size: var(--sawmill-typography-font-sizes-base);
    line-height: var(--sawmill-typography-font-sizes-base);
    margin: var(--sawmill-spacings-0);
    `
      : null}
  `
);

/**
	Button component that the user can press to trigger an action.
 */
export const Button = ({
  active = false,
  block = false,
  bsClass = 'btn',
  bsStyle = 'default',
  disabled = false,
  type = 'button',
  inline = false,
  ...props
}: TButtonProps) => {
  return (
    <StyledButton
      active={active}
      block={block}
      bsClass={bsClass}
      bsStyle={bsStyle}
      disabled={disabled}
      type={type}
      inline={inline}
      {...props}
    />
  );
};

import * as React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import styled, { css } from 'styled-components';

import { TButtonProps, TButtonVariantStates } from './types';
import { generateColors, generateSizes } from './styles';

const variantColors: TButtonVariantStates = {
  base: {
    background: {
      danger: '--sawmill-colors-variant-danger-5',
      default: '--sawmill-colors-variant-gray-8',
      info: '--sawmill-colors-variant-info-5',
      link: '--sawmill-colors-variant-transparent',
      primary: '--sawmill-colors-variant-primary-5',
      success: '--sawmill-colors-variant-success-5',
      warning: '--sawmill-colors-variant-warning-4',
    },
    border: {
      danger: '--sawmill-colors-variant-danger-5',
      default: '--sawmill-colors-variant-gray-8',
      info: '--sawmill-colors-variant-info-5',
      link: '--sawmill-colors-variant-transparent',
      primary: '--sawmill-colors-variant-primary-5',
      success: '--sawmill-colors-variant-success-5',
      warning: '--sawmill-colors-variant-warning-4',
    },
    text: {
      danger: '--sawmill-colors-variant-gray-8',
      default: '--sawmill-colors-variant-gray-0',
      info: '--sawmill-colors-variant-gray-9',
      link: '--sawmill-colors-variant-primary-7',
      primary: '--sawmill-colors-variant-gray-9',
      success: '--sawmill-colors-variant-gray-9',
      warning: '--sawmill-colors-variant-gray-1',
    },
  },
  hover: {
    background: {
      danger: '--sawmill-colors-variant-danger-7',
      default: '--sawmill-colors-variant-gray-7',
      info: '--sawmill-colors-variant-info-7',
      link: '--sawmill-colors-variant-transparent',
      primary: '--sawmill-colors-variant-primary-7',
      success: '--sawmill-colors-variant-success-7',
      warning: '--sawmill-colors-variant-warning-5',
    },
    border: {
      danger: '--sawmill-colors-variant-danger-7',
      default: '--sawmill-colors-variant-gray-7',
      info: '--sawmill-colors-variant-info-7',
      link: '--sawmill-colors-variant-transparent',
      primary: '--sawmill-colors-variant-primary-4',
      success: '--sawmill-colors-variant-success-4',
      warning: '--sawmill-colors-variant-warning-5',
    },
    text: {
      danger: '--sawmill-colors-variant-gray-9',
      default: '--sawmill-colors-variant-gray-1',
      info: '--sawmill-colors-variant-gray-9',
      link: '--sawmill-colors-variant-primary-8',
      primary: '--sawmill-colors-variant-gray-8',
      success: '--sawmill-colors-variant-gray-8',
      warning: '--sawmill-colors-variant-gray-2',
    },
  },
  active: {
    background: {
      danger: '--sawmill-colors-variant-danger-7',
      default: '--sawmill-colors-variant-gray-7',
      info: '--sawmill-colors-variant-info-7',
      link: '--sawmill-colors-variant-transparent',
      primary: '--sawmill-colors-variant-primary-7',
      success: '--sawmill-colors-variant-success-7',
      warning: '--sawmill-colors-variant-warning-5',
    },
    border: {
      danger: '--sawmill-colors-variant-danger-8',
      default: '--sawmill-colors-variant-gray-5',
      info: '--sawmill-colors-variant-info-8',
      link: '--sawmill-colors-variant-transparent',
      primary: '--sawmill-colors-variant-primary-7',
      success: '--sawmill-colors-variant-success-7',
      warning: '--sawmill-colors-variant-warning-8',
    },
    text: {
      danger: '--sawmill-colors-variant-gray-9',
      default: '--sawmill-colors-variant-gray-1',
      info: '--sawmill-colors-variant-gray-9',
      link: '--sawmill-colors-variant-primary-8',
      primary: '--sawmill-colors-variant-gray-8',
      success: '--sawmill-colors-variant-gray-8',
      warning: '--sawmill-colors-variant-gray-2',
    },
  },
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

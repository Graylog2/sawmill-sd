import * as React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import styled from 'styled-components';

import { TButtonProps, TButtonVariantStates } from './types';
import { generateColors, generateSizes } from './styles';

const variantColors: TButtonVariantStates = {
  base: {
    background: {
      danger: '--sawmill-colors-variant-danger-base',
      default: '--sawmill-colors-gray-70',
      info: '--sawmill-colors-variant-info-base',
      link: '--sawmill-colors-transparent',
      primary: '--sawmill-colors-variant-primary-base',
      success: '--sawmill-colors-variant-success-base',
      warning: '--sawmill-colors-variant-warning-base',
    },
    border: {
      danger: '--sawmill-colors-variant-danger-base',
      default: '--sawmill-colors-gray-70',
      info: '--sawmill-colors-variant-info-base',
      link: '--sawmill-colors-transparent',
      primary: '--sawmill-colors-variant-primary-base',
      success: '--sawmill-colors-variant-success-base',
      warning: '--sawmill-colors-variant-warning-base',
    },
    text: {
      danger: '--sawmill-colors-gray-10',
      default: '--sawmill-colors-gray-10',
      info: '--sawmill-colors-gray-10',
      link: '--sawmill-colors-variant-info-base',
      primary: '--sawmill-colors-gray-90',
      success: '--sawmill-colors-gray-10',
      warning: '--sawmill-colors-gray-10',
    },
  },
  hover: {
    background: {
      danger: '--sawmill-colors-variant-danger-dark',
      default: '--sawmill-colors-gray-70',
      info: '--sawmill-colors-variant-info-dark',
      link: '--sawmill-colors-transparent',
      primary: '--sawmill-colors-variant-primary-dark',
      success: '--sawmill-colors-variant-success-dark',
      warning: '--sawmill-colors-variant-warning-dark',
    },
    border: {
      danger: '--sawmill-colors-variant-danger-light',
      default: '--sawmill-colors-gray-70',
      info: '--sawmill-colors-variant-info-light',
      link: '--sawmill-colors-transparent',
      primary: '--sawmill-colors-variant-primary-light',
      success: '--sawmill-colors-variant-success-light',
      warning: '--sawmill-colors-variant-warning-light',
    },
    text: {
      danger: '--sawmill-colors-gray-20',
      default: '--sawmill-colors-gray-20',
      info: '--sawmill-colors-gray-20',
      link: '--sawmill-colors-variant-info-dark',
      primary: '--sawmill-colors-gray-20',
      success: '--sawmill-colors-gray-20',
      warning: '--sawmill-colors-gray-20',
    },
  },
  active: {
    background: {
      danger: '--sawmill-colors-variant-danger-lighter',
      default: '--sawmill-colors-gray-30',
      info: '--sawmill-colors-variant-info-lighter',
      link: '--sawmill-colors-transparent',
      primary: '--sawmill-colors-variant-primary-lighter',
      success: '--sawmill-colors-variant-success-lighter',
      warning: '--sawmill-colors-variant-warning-lighter',
    },
    border: {
      danger: '--sawmill-colors-variant-danger-base',
      default: '--sawmill-colors-gray-70',
      info: '--sawmill-colors-variant-info-base',
      link: '--sawmill-colors-transparent',
      primary: '--sawmill-colors-variant-primary-base',
      success: '--sawmill-colors-variant-success-base',
      warning: '--sawmill-colors-variant-warning-base',
    },
    text: {
      danger: '--sawmill-colors-variant-danger-darkest',
      default: '--sawmill-colors-gray-80',
      info: '--sawmill-colors-variant-info-darkest',
      link: '--sawmill-colors-variant-info-darkest',
      primary: '--sawmill-colors-variant-primary-darkest',
      success: '--sawmill-colors-variant-success-darkest',
      warning: '--sawmill-colors-variant-warning-darkest',
    },
  },
  disabled: {
    background: {
      danger: '--sawmill-colors-gray-10',
      default: '--sawmill-colors-gray-10',
      info: '--sawmill-colors-gray-10',
      link: '--sawmill-colors-transparent',
      primary: '--sawmill-colors-gray-10',
      success: '--sawmill-colors-gray-10',
      warning: '--sawmill-colors-gray-10',
    },
    border: {
      danger: '--sawmill-colors-variant-danger-lighter',
      default: '--sawmill-colors-gray-60',
      info: '--sawmill-colors-variant-info-lighter',
      link: '--sawmill-colors-transparent',
      primary: '--sawmill-colors-variant-primary-lighter',
      success: '--sawmill-colors-variant-success-lighter',
      warning: '--sawmill-colors-variant-warning-lighter',
    },
    text: {
      danger: '--sawmill-colors-variant-danger-base',
      default: '--sawmill-colors-gray-80',
      info: '--sawmill-colors-variant-info-base',
      link: '--sawmill-colors-variant-info-light',
      primary: '--sawmill-colors-variant-primary-base',
      success: '--sawmill-colors-variant-success-base',
      warning: '--sawmill-colors-variant-warning-base',
    },
  },
};

const buttonStyles = [...generateColors(variantColors), ...generateSizes()];

const StyledButton = styled(BootstrapButton)`
  ${buttonStyles}
`;

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
      {...props}
    />
  );
};

import * as React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import styled from 'styled-components';

import { TButtonProps, TButtonVariantStates } from './types';
import { generateColors, generateSizes } from './styles';

const variantColors: TButtonVariantStates = {
  base: {
    background: {
      danger: '--sawmill-colors-variant-danger-base',
      default: '--sawmill-colors-gray-80',
      info: '--sawmill-colors-variant-info-base',
      link: '--sawmill-colors-variant-transparent',
      primary: '--sawmill-colors-variant-primary-base',
      success: '--sawmill-colors-variant-success-base',
      warning: '--sawmill-colors-variant-warning-light',
    },
    border: {
      danger: '--sawmill-colors-variant-danger-base',
      default: '--sawmill-colors-gray-80',
      info: '--sawmill-colors-variant-info-base',
      link: '--sawmill-colors-variant-transparent',
      primary: '--sawmill-colors-variant-primary-base',
      success: '--sawmill-colors-variant-success-base',
      warning: '--sawmill-colors-variant-warning-light',
    },
    text: {
      danger: '--sawmill-colors-gray-80',
      default: '--sawmill-colors-gray-0',
      info: '--sawmill-colors-gray-90',
      link: '--sawmill-colors-variant-primary-dark',
      primary: '--sawmill-colors-gray-90',
      success: '--sawmill-colors-gray-90',
      warning: '--sawmill-colors-gray-10',
    },
  },
  hover: {
    background: {
      danger: '--sawmill-colors-variant-danger-dark',
      default: '--sawmill-colors-gray-70',
      info: '--sawmill-colors-variant-info-dark',
      link: '--sawmill-colors-variant-transparent',
      primary: '--sawmill-colors-variant-primary-dark',
      success: '--sawmill-colors-variant-success-dark',
      warning: '--sawmill-colors-variant-warning-base',
    },
    border: {
      danger: '--sawmill-colors-variant-danger-dark',
      default: '--sawmill-colors-gray-70',
      info: '--sawmill-colors-variant-info-dark',
      link: '--sawmill-colors-variant-transparent',
      primary: '--sawmill-colors-variant-primary-light',
      success: '--sawmill-colors-variant-success-light',
      warning: '--sawmill-colors-variant-warning-base',
    },
    text: {
      danger: '--sawmill-colors-gray-90',
      default: '--sawmill-colors-gray-10',
      info: '--sawmill-colors-gray-90',
      link: '--sawmill-colors-variant-primary-darker',
      primary: '--sawmill-colors-gray-80',
      success: '--sawmill-colors-gray-80',
      warning: '--sawmill-colors-gray-20',
    },
  },
  active: {
    background: {
      danger: '--sawmill-colors-variant-danger-dark',
      default: '--sawmill-colors-gray-70',
      info: '--sawmill-colors-variant-info-dark',
      link: '--sawmill-colors-variant-transparent',
      primary: '--sawmill-colors-variant-primary-dark',
      success: '--sawmill-colors-variant-success-dark',
      warning: '--sawmill-colors-variant-warning-base',
    },
    border: {
      danger: '--sawmill-colors-variant-danger-darker',
      default: '--sawmill-colors-gray-50',
      info: '--sawmill-colors-variant-info-darker',
      link: '--sawmill-colors-variant-transparent',
      primary: '--sawmill-colors-variant-primary-dark',
      success: '--sawmill-colors-variant-success-dark',
      warning: '--sawmill-colors-variant-warning-darker',
    },
    text: {
      danger: '--sawmill-colors-gray-90',
      default: '--sawmill-colors-gray-10',
      info: '--sawmill-colors-gray-90',
      link: '--sawmill-colors-variant-primary-darker',
      primary: '--sawmill-colors-gray-80',
      success: '--sawmill-colors-gray-80',
      warning: '--sawmill-colors-gray-20',
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

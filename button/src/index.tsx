import * as React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import styled from 'styled-components';

import { TButtonProps, TButtonVariantStates } from './types';
import { generateColors, generateSizes } from './styles';

const variantColors: TButtonVariantStates = {
  base: {
    background: {
      danger: '--sawmill-colors-teint-variant-danger-base',
      default: '--sawmill-colors-teint-gray-70',
      info: '--sawmill-colors-teint-variant-info-base',
      link: '--sawmill-colors-teint-transparent',
      primary: '--sawmill-colors-teint-variant-primary-base',
      success: '--sawmill-colors-teint-variant-success-base',
      warning: '--sawmill-colors-teint-variant-warning-base',
    },
    border: {
      danger: '--sawmill-colors-teint-variant-danger-base',
      default: '--sawmill-colors-teint-gray-70',
      info: '--sawmill-colors-teint-variant-info-base',
      link: '--sawmill-colors-teint-transparent',
      primary: '--sawmill-colors-teint-variant-primary-base',
      success: '--sawmill-colors-teint-variant-success-base',
      warning: '--sawmill-colors-teint-variant-warning-base',
    },
    text: {
      danger: '--sawmill-colors-teint-gray-10',
      default: '--sawmill-colors-teint-gray-10',
      info: '--sawmill-colors-teint-gray-10',
      link: '--sawmill-colors-teint-variant-info-base',
      primary: '--sawmill-colors-teint-gray-10',
      success: '--sawmill-colors-teint-gray-10',
      warning: '--sawmill-colors-teint-gray-10',
    },
  },
  hover: {
    background: {
      danger: '--sawmill-colors-teint-variant-danger-dark',
      default: '--sawmill-colors-teint-gray-70',
      info: '--sawmill-colors-teint-variant-info-dark',
      link: '--sawmill-colors-teint-transparent',
      primary: '--sawmill-colors-teint-variant-primary-dark',
      success: '--sawmill-colors-teint-variant-success-dark',
      warning: '--sawmill-colors-teint-variant-warning-dark',
    },
    border: {
      danger: '--sawmill-colors-teint-variant-danger-light',
      default: '--sawmill-colors-teint-gray-70',
      info: '--sawmill-colors-teint-variant-info-light',
      link: '--sawmill-colors-teint-transparent',
      primary: '--sawmill-colors-teint-variant-primary-light',
      success: '--sawmill-colors-teint-variant-success-light',
      warning: '--sawmill-colors-teint-variant-warning-light',
    },
    text: {
      danger: '--sawmill-colors-teint-gray-20',
      default: '--sawmill-colors-teint-gray-20',
      info: '--sawmill-colors-teint-gray-20',
      link: '--sawmill-colors-teint-variant-info-dark',
      primary: '--sawmill-colors-teint-gray-20',
      success: '--sawmill-colors-teint-gray-20',
      warning: '--sawmill-colors-teint-gray-20',
    },
  },
  active: {
    background: {
      danger: '--sawmill-colors-teint-variant-danger-lighter',
      default: '--sawmill-colors-teint-gray-30',
      info: '--sawmill-colors-teint-variant-info-lighter',
      link: '--sawmill-colors-teint-transparent',
      primary: '--sawmill-colors-teint-variant-primary-lighter',
      success: '--sawmill-colors-teint-variant-success-lighter',
      warning: '--sawmill-colors-teint-variant-warning-lighter',
    },
    border: {
      danger: '--sawmill-colors-teint-variant-danger-base',
      default: '--sawmill-colors-teint-gray-70',
      info: '--sawmill-colors-teint-variant-info-base',
      link: '--sawmill-colors-teint-transparent',
      primary: '--sawmill-colors-teint-variant-primary-base',
      success: '--sawmill-colors-teint-variant-success-base',
      warning: '--sawmill-colors-teint-variant-warning-base',
    },
    text: {
      danger: '--sawmill-colors-teint-variant-danger-darkest',
      default: '--sawmill-colors-teint-gray-80',
      info: '--sawmill-colors-teint-variant-info-darkest',
      link: '--sawmill-colors-teint-variant-info-darkest',
      primary: '--sawmill-colors-teint-variant-primary-darkest',
      success: '--sawmill-colors-teint-variant-success-darkest',
      warning: '--sawmill-colors-teint-variant-warning-darkest',
    },
  },
  disabled: {
    background: {
      danger: '--sawmill-colors-teint-gray-10',
      default: '--sawmill-colors-teint-gray-10',
      info: '--sawmill-colors-teint-gray-10',
      link: '--sawmill-colors-teint-transparent',
      primary: '--sawmill-colors-teint-gray-10',
      success: '--sawmill-colors-teint-gray-10',
      warning: '--sawmill-colors-teint-gray-10',
    },
    border: {
      danger: '--sawmill-colors-teint-variant-danger-lighter',
      default: '--sawmill-colors-teint-gray-60',
      info: '--sawmill-colors-teint-variant-info-lighter',
      link: '--sawmill-colors-teint-transparent',
      primary: '--sawmill-colors-teint-variant-primary-lighter',
      success: '--sawmill-colors-teint-variant-success-lighter',
      warning: '--sawmill-colors-teint-variant-warning-lighter',
    },
    text: {
      danger: '--sawmill-colors-teint-variant-danger-base',
      default: '--sawmill-colors-teint-gray-80',
      info: '--sawmill-colors-teint-variant-info-base',
      link: '--sawmill-colors-teint-variant-info-light',
      primary: '--sawmill-colors-teint-variant-primary-base',
      success: '--sawmill-colors-teint-variant-success-base',
      warning: '--sawmill-colors-teint-variant-warning-base',
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

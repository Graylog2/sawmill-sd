import React, { FC } from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import styled from "styled-components";

import { TButtonProps, TButtonVariantStates } from "./types";
import { generateColors, generateSizes } from "./styles";

const variantColors: TButtonVariantStates = {
  base: {
    background: {
      danger: "--default-colors-variant-danger-base",
      default: "--default-colors-gray-70",
      info: "--default-colors-variant-info-base",
      link: "--default-colors-transparent",
      primary: "--default-colors-variant-primary-base",
      success: "--default-colors-variant-success-base",
      warning: "--default-colors-variant-warning-base",
    },
    border: {
      danger: "--default-colors-variant-danger-base",
      default: "--default-colors-gray-70",
      info: "--default-colors-variant-info-base",
      link: "--default-colors-transparent",
      primary: "--default-colors-variant-primary-base",
      success: "--default-colors-variant-success-base",
      warning: "--default-colors-variant-warning-base",
    },
    text: {
      danger: "--default-colors-gray-10",
      default: "--default-colors-gray-10",
      info: "--default-colors-gray-10",
      link: "--default-colors-variant-info-base",
      primary: "--default-colors-gray-10",
      success: "--default-colors-gray-10",
      warning: "--default-colors-gray-10",
    },
  },
  hover: {
    background: {
      danger: "--default-colors-variant-danger-dark",
      default: "--default-colors-gray-70",
      info: "--default-colors-variant-info-dark",
      link: "--default-colors-transparent",
      primary: "--default-colors-variant-primary-dark",
      success: "--default-colors-variant-success-dark",
      warning: "--default-colors-variant-warning-dark",
    },
    border: {
      danger: "--default-colors-variant-danger-light",
      default: "--default-colors-gray-70",
      info: "--default-colors-variant-info-light",
      link: "--default-colors-transparent",
      primary: "--default-colors-variant-primary-light",
      success: "--default-colors-variant-success-light",
      warning: "--default-colors-variant-warning-light",
    },
    text: {
      danger: "--default-colors-gray-20",
      default: "--default-colors-gray-20",
      info: "--default-colors-gray-20",
      link: "--default-colors-variant-info-dark",
      primary: "--default-colors-gray-20",
      success: "--default-colors-gray-20",
      warning: "--default-colors-gray-20",
    },
  },
  active: {
    background: {
      danger: "--default-colors-variant-danger-lighter",
      default: "--default-colors-gray-30",
      info: "--default-colors-variant-info-lighter",
      link: "--default-colors-transparent",
      primary: "--default-colors-variant-primary-lighter",
      success: "--default-colors-variant-success-lighter",
      warning: "--default-colors-variant-warning-lighter",
    },
    border: {
      danger: "--default-colors-variant-danger-base",
      default: "--default-colors-gray-70",
      info: "--default-colors-variant-info-base",
      link: "--default-colors-transparent",
      primary: "--default-colors-variant-primary-base",
      success: "--default-colors-variant-success-base",
      warning: "--default-colors-variant-warning-base",
    },
    text: {
      danger: "--default-colors-variant-danger-darkest",
      default: "--default-colors-gray-80",
      info: "--default-colors-variant-info-darkest",
      link: "--default-colors-variant-info-darkest",
      primary: "--default-colors-variant-primary-darkest",
      success: "--default-colors-variant-success-darkest",
      warning: "--default-colors-variant-warning-darkest",
    },
  },
  disabled: {
    background: {
      danger: "--default-colors-gray-10",
      default: "--default-colors-gray-10",
      info: "--default-colors-gray-10",
      link: "--default-colors-transparent",
      primary: "--default-colors-gray-10",
      success: "--default-colors-gray-10",
      warning: "--default-colors-gray-10",
    },
    border: {
      danger: "--default-colors-variant-danger-lighter",
      default: "--default-colors-gray-60",
      info: "--default-colors-variant-info-lighter",
      link: "--default-colors-transparent",
      primary: "--default-colors-variant-primary-lighter",
      success: "--default-colors-variant-success-lighter",
      warning: "--default-colors-variant-warning-lighter",
    },
    text: {
      danger: "--default-colors-variant-danger-base",
      default: "--default-colors-gray-80",
      info: "--default-colors-variant-info-base",
      link: "--default-colors-variant-info-light",
      primary: "--default-colors-variant-primary-base",
      success: "--default-colors-variant-success-base",
      warning: "--default-colors-variant-warning-base",
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
const Button: FC = ({ ...props }: TButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;

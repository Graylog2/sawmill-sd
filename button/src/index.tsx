import React, { ButtonHTMLAttributes, Component, ReactNode } from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
import elementType from "prop-types-extra/lib/elementType";

import { TColorVariantStates } from "./types";
import generateStyles from "./styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  active: boolean;
  disabled: boolean;
  block: boolean;
  onClick: () => void;
  componentClass: unknown;
  href: string;
  /**
   * Defines HTML button type attribute
   * @defaultValue 'button'
   */
  type: "button" | "reset" | "submit";
};

const variantColors: TColorVariantStates = {
  base: {
    background: {
      danger: "--default-colors-gray-0",
      default: "--default-colors-gray-0",
      info: "--default-colors-gray-0",
      link: "--default-colors-background-transparent",
      primary: "--default-colors-gray-0",
      success: "--default-colors-gray-0",
      warning: "--default-colors-gray-0",
    },
    border: {
      danger: "--default-colors-variant-danger-base",
      default: "--default-colors-gray-80",
      info: "--default-colors-variant-info-base",
      link: "--default-colors-background-transparent",
      primary: "--default-colors-variant-primary-base",
      success: "--default-colors-variant-success-base",
      warning: "--default-colors-variant-warning-base",
    },
    text: {
      danger: "--default-colors-variant-danger-darkest",
      default: "--default-colors-gray-90",
      info: "--default-colors-variant-info-darkest",
      link: "--default-colors-variant-info-darkest",
      primary: "--default-colors-variant-primary-darkest",
      success: "--default-colors-variant-success-darkest",
      warning: "--default-colors-variant-warning-darkest",
    },
  },
  active: {
    background: {
      danger: "--default-colors-gray-30",
      default: "--default-colors-gray-30",
      info: "--default-colors-gray-30",
      link: "--default-colors-background-transparent",
      primary: "--default-colors-gray-30",
      success: "--default-colors-gray-30",
      warning: "--default-colors-gray-30",
    },
    border: {
      danger: "--default-colors-variant-danger-base",
      default: "--default-colors-gray-80",
      info: "--default-colors-variant-info-base",
      link: "--default-colors-background-transparent",
      primary: "--default-colors-variant-primary-base",
      success: "--default-colors-variant-success-base",
      warning: "--default-colors-variant-warning-base",
    },
    text: {
      danger: "--default-colors-variant-danger-base",
      default: "--default-colors-gray-80",
      info: "--default-colors-variant-info-base",
      link: "--default-colors-variant-info-base",
      primary: "--default-colors-variant-primary-base",
      success: "--default-colors-variant-success-base",
      warning: "--default-colors-variant-warning-base",
    },
  },
  disabled: {
    background: {
      danger: "--default-colors-gray-10",
      default: "--default-colors-gray-10",
      info: "--default-colors-gray-10",
      link: "--default-colors-background-transparent",
      primary: "--default-colors-gray-10",
      success: "--default-colors-gray-10",
      warning: "--default-colors-gray-10",
    },
    border: {
      danger: "--default-colors-variant-danger-base",
      default: "--default-colors-gray-80",
      info: "--default-colors-variant-info-base",
      link: "--default-colors-background-transparent",
      primary: "--default-colors-variant-primary-base",
      success: "--default-colors-variant-success-base",
      warning: "--default-colors-variant-warning-base",
    },
    text: {
      danger: "--default-colors-variant-danger-base",
      default: "--default-colors-gray-80",
      info: "--default-colors-variant-info-base",
      link: "--default-colors-variant-info-base",
      primary: "--default-colors-variant-primary-base",
      success: "--default-colors-variant-success-base",
      warning: "--default-colors-variant-warning-base",
    },
  },
  hover: {
    background: {
      danger: "--default-colors-variant-danger-lightest",
      default: "--default-colors-gray-10",
      info: "--default-colors-gray-10",
      link: "--default-colors-background-transparent",
      primary: "--default-colors-gray-10",
      success: "--default-colors-gray-10",
      warning: "--default-colors-gray-10",
    },
    border: {
      danger: "--default-colors-variant-danger-base",
      default: "--default-colors-gray-80",
      info: "--default-colors-variant-info-base",
      link: "--default-colors-background-transparent",
      primary: "--default-colors-variant-primary-base",
      success: "--default-colors-variant-success-base",
      warning: "--default-colors-variant-warning-base",
    },
    text: {
      danger: "--default-colors-variant-danger-darker",
      default: "--default-colors-gray-80",
      info: "--default-colors-variant-info-base",
      link: "--default-colors-variant-info-base",
      primary: "--default-colors-variant-primary-base",
      success: "--default-colors-variant-success-base",
      warning: "--default-colors-variant-warning-base",
    },
  },
};

const buttonStyles = [...generateStyles(variantColors)];

const StyledButton = styled(BootstrapButton)`
  ${buttonStyles}
`;

class Button extends Component<Props> {
  propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    onClick: PropTypes.func,
    componentClass: elementType,
    href: PropTypes.string,
    /**
     * Defines HTML button type attribute
     * @defaultValue 'button'
     */
    type: PropTypes.oneOf(["button", "reset", "submit"]),
  };

  defaultProps = {
    active: false,
    disabled: false,
    block: false,
    onClick: () => undefined,
    componentClass: undefined,
    href: undefined,
    type: "button",
  };

  render() {
    return <StyledButton {...this.props} />;
  }
}

export default Button;
export { BootstrapButton };

import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import styled, { css } from "styled-components";

export type TColorVariantKeys =
  | "active"
  | "danger"
  | "default"
  | "link"
  | "info"
  | "primary"
  | "success"
  | "warning";

export type TColorVariantStates = {
  default: string;
  active: string;
  disabled: string;
  hover: string;
};

export type TColorVariants = Partial<
  Record<TColorVariantKeys, TColorVariantStates>
>;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const variants: TColorVariants = {
  danger: {
    default: "--default-colors-variant-danger-base",
    active: "--default-colors-variant-danger-base",
    disabled: "--default-colors-variant-danger-base",
    hover: "--default-colors-variant-danger-base",
  },
  default: {
    default: "--default-colors-gray-80",
    active: "--default-colors-variant-danger-base",
    disabled: "--default-colors-variant-danger-base",
    hover: "--default-colors-variant-danger-base",
  },
  info: {
    default: "--default-colors-variant-info-base",
    active: "--default-colors-variant-danger-base",
    disabled: "--default-colors-variant-danger-base",
    hover: "--default-colors-variant-danger-base",
  },
  link: {
    default: "--default-colors-background-transparent",
    active: "--default-colors-variant-danger-base",
    disabled: "--default-colors-variant-danger-base",
    hover: "--default-colors-variant-danger-base",
  },
  primary: {
    default: "--default-colors-variant-primary-base",
    active: "--default-colors-variant-danger-base",
    disabled: "--default-colors-variant-danger-base",
    hover: "--default-colors-variant-danger-base",
  },
  success: {
    default: "--default-colors-variant-success-base",
    active: "--default-colors-variant-danger-base",
    disabled: "--default-colors-variant-danger-base",
    hover: "--default-colors-variant-danger-base",
  },
  warning: {
    default: "--default-colors-variant-warning-base",
    active: "--default-colors-variant-danger-base",
    disabled: "--default-colors-variant-danger-base",
    hover: "--default-colors-variant-danger-base",
  },
};

// const buttonStyles = Object.keys(variants).map((variant) => {
//   const { default, active, disabled, hover } = variants[variant];

//   return css`
//     &.btn-${variant} {
//       background-color: ${defaultBackground};
//       border-color: ${defaultBorder};
//       color: ${defaultColor};
//       transition: background-color 150ms ease-in-out, border 150ms ease-in-out,
//         color 150ms ease-in-out;

//       :hover {
//         background-color: ${hoverBackground};
//         border-color: ${hoverBorderColor};
//         color: ${hoverColor};
//       }

//       &.active {
//         background-color: ${activeBackground};
//         border-color: ${activeBorder};
//         color: ${activeColor};

//         :hover {
//           background-color: ${isLink ? transparentLink : activeHoverBackground};
//           border-color: ${activeHoverBorderColor};
//           color: ${activeHoverColor};
//         }
//       }

//       &[disabled],
//       &.disabled {
//         background-color: ${isLink ? transparentLink : disabledBackground};
//         border-color: ${disabledBorder};
//         color: ${disabledColor};

//         :hover {
//           background-color: ${disabledBackground};
//           border-color: ${disabledBorder};
//           color: ${disabledColor};
//         }
//       }
//     }
//   `;
// });

// const Button = styled(BootstrapButton)`{buttonStyles}`;

const Button = styled(BootstrapButton)`
  &.btn-default {
    background-color: var(--default-colors-gray-0);
    border-color: var(--default-colors-gray-80);
    color: var(--default-colors-gray-80);
    transition: background-color 150ms ease-in-out, border 150ms ease-in-out,
      color 150ms ease-in-out;

    :hover {
      background-color: var(--default-colors-gray-10);
      border-color: var(--default-colors-gray-90);
      color: var(--default-colors-gray-90);
    }

    &.active {
      background-color: var(--default-colors-gray-20);
      border-color: var(--default-colors-gray-90);
      color: var(--default-colors-gray-90);

      :hover {
        background-color: var(--default-colors-gray-30);
        border-color: var(--default-colors-gray-80);
        color: var(--default-colors-gray-80);
      }
    }

    &[disabled],
    &.disabled {
      background-color: var(--default-colors-gray-0);
      border-color: var(--default-colors-gray-50);
      color: var(--default-colors-gray-50);

      :hover {
        background-color: var(--default-colors-gray-0);
        border-color: var(--default-colors-gray-50);
        color: var(--default-colors-gray-50);
      }
    }
  }
`;

export default Button;

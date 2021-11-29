import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import styled, { css } from "styled-components";

export type TColorVariantKeys = 'active' | 'danger' | 'default' | 'link' | 'info' | 'primary' | 'success' | 'warning';

export type TColorVariants = Partial<Record<TColorVariantKeys, string>>;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const variants: TColorVariants = {
  danger: '--default-colors-variant-danger-base',
  default: '--default-colors-gray-80',
  info: '--default-colors-variant-info-base',
  link: '--default-colors-background-transparent',
  primary: '--default-colors-variant-primary-base',
  success: '--default-colors-variant-success-base',
  warning: '--default-colors-variant-warning-base',
};

const buttonStyles = Object.keys(variants).map((variant) => {
    const variantColor = variants[variant];
    const isLink = variant === 'link';

    const buttonAdjustColor = chroma(variantColor).luminance() > 0.5 ? colors.global.textDefault : colors.global.textAlt;

    const defaultBackground = variantColor;
    const defaultBorder = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.05);
    const defaultColor = isLink ? 'var(--color-global-link)' : utils.contrastingColor(defaultBackground);

    const activeBackground = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.10);
    const activeBorder = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.15);
    const activeColor = isLink ? 'var(--color-global-linkHover)' : utils.contrastingColor(activeBackground);

    const disabledBackground = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.20);
    const disabledBorder = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.15);
    const disabledColor = isLink ? 'var(--color-global-link)' : utils.contrastingColor(disabledBackground, 'AA');

    const hoverBackground = isLink ? 'transparent' : mixColor(defaultBackground);
    const hoverBorderColor = isLink ? 'transparent' : mixColor(defaultBorder);
    const hoverColor = isLink ? 'var(--color-global-linkHover)' : mixColor(defaultColor);

    const activeHoverBackground = isLink ? 'transparent' : mixColor(activeBackground);
    const activeHoverBorderColor = isLink ? 'transparent' : mixColor(activeBorder);
    const activeHoverColor = isLink ? 'var(--color-global-linkHover)' : mixColor(activeColor);

    return css`
      &.btn-${variant} {
        background-color: ${defaultBackground};
        border-color: ${defaultBorder};
        color: ${defaultColor};
        transition: background-color 150ms ease-in-out,
          border 150ms ease-in-out,
          color 150ms ease-in-out;

        :hover {
          background-color: ${hoverBackground};
          border-color: ${hoverBorderColor};
          color: ${hoverColor};
        }

        &.active {
          background-color: ${activeBackground};
          border-color: ${activeBorder};
          color: ${activeColor};

          :hover {
            background-color: ${isLink ? transparentLink : activeHoverBackground};
            border-color: ${activeHoverBorderColor};
            color: ${activeHoverColor};
          }
        }

        &[disabled],
        &.disabled {
          background-color: ${isLink ? transparentLink : disabledBackground};
          border-color: ${disabledBorder};
          color: ${disabledColor};

          :hover {
            background-color: ${disabledBackground};
            border-color: ${disabledBorder};
            color: ${disabledColor};
          }
        }
      }
    `;
  });

const Button = styled(BootstrapButton)(
  ({ theme }) => css`
      &.btn-${variant} {
        background-color: ${defaultBackground};
        border-color: ${defaultBorder};
        color: ${defaultColor};
        transition: background-color 150ms ease-in-out,
          border 150ms ease-in-out,
          color 150ms ease-in-out;

        :hover {
          background-color: ${hoverBackground};
          border-color: ${hoverBorderColor};
          color: ${hoverColor};
        }

        &.active {
          background-color: ${activeBackground};
          border-color: ${activeBorder};
          color: ${activeColor};

          :hover {
            background-color: ${isLink ? transparentLink : activeHoverBackground};
            border-color: ${activeHoverBorderColor};
            color: ${activeHoverColor};
          }
        }

        &[disabled],
        &.disabled {
          background-color: ${isLink ? transparentLink : disabledBackground};
          border-color: ${disabledBorder};
          color: ${disabledColor};

          :hover {
            background-color: ${disabledBackground};
            border-color: ${disabledBorder};
            color: ${disabledColor};
          }
        }
      }
    `;
);

// const Button: FC = ({ children, ...restProps }: Props) => {
//   return <button {...restProps}>{children}</button>;
// };

export default Button;

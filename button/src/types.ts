import { ButtonHTMLAttributes, ReactNode, ReactElement } from "react";

export const buttonSizes = [
  "lg",
  "large",
  "sm",
  "small",
  "xs",
  "xsmall",
] as const;
export type TButtonSizes = typeof buttonSizes[number];

export type TButtonVariantKeys =
  | "danger"
  | "default"
  | "info"
  | "link"
  | "primary"
  | "success"
  | "warning";

type TButtonVariants = Record<TButtonVariantKeys, string>;

type TButtonVariantAttributes = {
  background: TButtonVariants;
  border: TButtonVariants;
  text: TButtonVariants;
};

export type TButtonVariantStates = {
  base: TButtonVariantAttributes;
  active: TButtonVariantAttributes;
  disabled: TButtonVariantAttributes;
  hover: TButtonVariantAttributes;
};

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  /**
   * Defines HTML button active attribute
   */
  active?: boolean;
  /**
   * Defines HTML button disabled attribute
   */
  disabled?: boolean;
  /**
   * Renders button as display:block
   */
  block?: boolean;
  /**
   * Click handler for button event
   */
  onClick?: () => void;
  /**
   * You can use a custom element type for this component.
   */
  componentClass?: ReactElement;
  /**
   * URL if used as link
   */
  href?: string;
  /**
   * Defines HTML button type attribute
   */
  type?: "button" | "reset" | "submit";
  /**
   * Defines HTML button type attribute
   */
  bsStyle?: TButtonVariantKeys;
  /**
   * Defines HTML button type attribute
   */
  bsSize?: TButtonSizes;
  /**
   * Defines HTML button type attribute
   */
  bsClass?: string;
};

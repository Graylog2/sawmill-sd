import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';

type TButtonSizes = 'lg' | 'sm' | 'xs';

export type TButtonVariantKeys =
  | 'danger'
  | 'default'
  | 'info'
  | 'link'
  | 'primary'
  | 'success'
  | 'warning';

type TButtonVariants = Record<TButtonVariantKeys, string>;

type TButtonVariantAttributes = {
  background: TButtonVariants;
  border: TButtonVariants;
  text: TButtonVariants;
};

export type TButtonVariantStates = {
  base: TButtonVariantAttributes;
  active: TButtonVariantAttributes;
  hover: TButtonVariantAttributes;
};

export type TSawmillButtonProps = {
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
   * Removes all padding to render even with text
   */
  inline?: boolean;
  /**
   * Defines HTML button type attribute
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * Choose a variant
   */
  bsStyle?: TButtonVariantKeys;
  /**
   * If you need the button to be smaller or larger
   */
  bsSize?: TButtonSizes;
  /**
   * Change the default prefix
   */
  bsClass?: string;
};

export type TButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TSawmillButtonProps;

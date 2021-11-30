type TColorVariantKeys =
  | "danger"
  | "default"
  | "info"
  | "link"
  | "primary"
  | "success"
  | "warning";

type TColorVariants = Record<TColorVariantKeys, string>;

type TColorVariantAttributes = {
  background: TColorVariants;
  border: TColorVariants;
  text: TColorVariants;
};

export type TColorVariantStates = {
  base: TColorVariantAttributes;
  active: TColorVariantAttributes;
  disabled: TColorVariantAttributes;
  hover: TColorVariantAttributes;
};

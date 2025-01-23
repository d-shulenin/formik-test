type Mask = (value: string) => string;

const MASKS = {
  number: (value: string) => {
    return value.replace(/[^0-9]/g, "");
  },
  noCyrillicAndSpaces: (value: string) => {
    return value.replace(/[а-яё\s]/gi, "");
  },
} satisfies Record<string, Mask>;

export type MaskName = keyof typeof MASKS;

export const applyMask = (value: string, maskName?: MaskName) => {
  if (!maskName) {
    return value;
  }

  return MASKS[maskName](value);
};

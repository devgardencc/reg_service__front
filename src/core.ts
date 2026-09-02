import type { PlaceOption } from "./schema";

export const filterPlaceOptions = (input: string, option?: PlaceOption) => {
  const labelText = option?.value ?? "";
  return labelText.toLowerCase().includes(input.toLowerCase());
};

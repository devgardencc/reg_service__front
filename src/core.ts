import type { PlaceOption } from "./schema";

export const filterPlaceOptions = (input: string, option?: PlaceOption) => {
  if (!option) return false;

  const search = input.trim().toLowerCase();
  const ko = (option.value ?? "").toLowerCase();
  const en = (option.label as any)?.props?.children?.[1]?.props?.children?.toLowerCase() ?? "";

  return ko.includes(search) || en.includes(search);
};
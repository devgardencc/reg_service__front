import { Flex } from "antd";
import rawKoreanCities from "./cities.min.json";
import rawKoreanUniversities  from "./uni.min.json";
import type { PlaceOption } from "./schema";

export const koreanCities: PlaceOption[] = rawKoreanCities.map((item) => ({
  value: item.ko,
  ko: item.ko,
  en: item.en,
  ru: item.ru,
  label: (
    <Flex justify="space-between" align="center" style={{ width: "100%" }}>
      <span style={{ fontWeight: 500 }}>{item.ko}</span>
      <span style={{ color: "#8c8c8c", fontSize: "14px", marginLeft: "8px" }}>
        {item.en}
      </span>
    </Flex>
  ),
}));

export const koreanUniversities: PlaceOption[] = rawKoreanUniversities.map((item) => ({
  value: item.ko,
  ko: item.ko,
  en: item.en,
  ru: item.ru,
  label: (
    <Flex justify="space-between" align="center" style={{ width: "100%" }}>
      <span style={{ fontWeight: 500 }}>{item.ko}</span>
      <span style={{ color: "#8c8c8c", fontSize: "14px", marginLeft: "8px" }}>
        {item.en}
      </span>
    </Flex>
  ),
}));
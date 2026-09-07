import { Flex } from "antd";
import { rawKoreanCities } from "./cities";
import { rawKoreanUniversities } from "./uni";

export const koreanCities = rawKoreanCities.map((item) => ({
  value: `${item.ko} (${item.en}) (${item.ru})`,
  label: (
    <Flex justify="space-between" align="center" style={{ width: "100%" }}>
      <span style={{fontWeight: 5000}}>{item.ko}</span>
      <span style={{ color: "#8c8c8c", fontSize: "12px", marginLeft: "8px" }}>
        {item.en}
      </span>
    </Flex>
  ),
}));

export const koreanUniversities = rawKoreanUniversities.map((item) => ({
  value: `${item.ko} (${item.en}) (${item.ru})`,
  label: (
    <Flex justify="space-between" align="center" style={{ width: "100%" }}>
      <span style={{fontWeight: 5000}}>{item.ko}</span>
      <span style={{ color: "#8c8c8c", fontSize: "14px", marginLeft: "8px" }}>
        {item.en}
      </span>
    </Flex>
  ),
}));
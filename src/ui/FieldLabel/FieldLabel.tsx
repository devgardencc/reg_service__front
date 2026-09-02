import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

function FieldLabel({
  children,
  hint,
}: {
  children: React.ReactNode;
  hint: string;
}) {
  return (
    <span className="field-label">
      {children}
      <Tooltip title={hint} placement="topLeft">
        <InfoCircleOutlined
          aria-label={`Подсказка: ${hint}`}
          className="field-info"
        />
      </Tooltip>
    </span>
  );
}

export default FieldLabel;

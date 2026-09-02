import { CheckCircleOutlined } from "@ant-design/icons";
import { Result, Button } from "antd";

import "./SuccessState.css";

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="success-state">
      <Result
        icon={<CheckCircleOutlined className="success-icon" />}
        title="You're in."
        subTitle="Спасибо за заявку. Мы свяжемся с вами по Telegram, как только проверим вашу заявку."
        extra={
          <Button type="primary" onClick={onReset}>
            Заполнить ещё раз
          </Button>
        }
      />

      <div className="success-note">
        <small>Обычно отвечаем после проверки заявки.</small>
      </div>
    </div>
  );
}

export default SuccessState;

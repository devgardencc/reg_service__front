import { Typography } from "antd";

import "./FormHeader.css";

function FormHeader() {
  const { Title, Paragraph } = Typography;
  return (
    <header className="form-header">
      <div>
        <span className="eyebrow eyebrow--ink">DEVGARDEN/ MEMBERSHIP</span>
        <Title level={2}>
          Join the <i>club.</i>
        </Title>
        <Paragraph>
          Расскажите нам немного о себе и присоединяйтесь к сообществу. Мы рады
          видеть всех, кто интересуется технологиями и хочет развиваться вместе
          с нами.
        </Paragraph>
      </div>
    </header>
  );
}

export default FormHeader;

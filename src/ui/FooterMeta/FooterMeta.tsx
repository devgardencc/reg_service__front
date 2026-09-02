import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { Space } from "antd";
import "./FooterMeta.css";

function FooterMeta() {
  return (
    <footer className="form-footer-meta">
      <span>DEVGARDEN / since march 2026</span>
      <Space size={16}>
        <a
          href="https://github.com/devgardencc"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub IT Club"
        >
          <GithubOutlined />
        </a>
        <a
          href="https://devgarden.cc/"
          target="_blank"
          rel="noreferrer"
          aria-label="DEVGARDEN"
        >
          <LinkOutlined />
        </a>
      </Space>
    </footer>
  );
}

export default FooterMeta;

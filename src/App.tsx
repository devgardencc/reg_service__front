import { useState } from "react";
import {
  AutoComplete,
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  message,
  type FormProps,
} from "antd";
import {
  ArrowRightOutlined,
  GithubOutlined,
  TelegramFilled,
  UserOutlined,
} from "@ant-design/icons";

import type { RegistrationForm } from "./schema";
import { koreanCities, koreanUniversities } from "./data";
import { filterPlaceOptions } from "./core";
import FieldLabel from "./ui/FieldLabel/FieldLabel";
import FooterMeta from "./ui/FooterMeta/FooterMeta";
import SectionTitle from "./ui/SectionTitle/SectionTitle";
import FormHeader from "./ui/FormHeader/FormHeader";
import SuccessState from "./ui/SuccessState/SuccessState";

function App() {
  const [form] = Form.useForm<RegistrationForm>();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleFinish: FormProps<RegistrationForm>["onFinish"] = async (
    values,
  ) => {
    setSubmitting(true);
    setSubmissionError(null);
    try {
      const payload = {
        ...values,
        birthdate: values.birthdate
          ? String(
              (
                values.birthdate as { format: (format: string) => string }
              ).format("YYYY-MM-DD"),
            )
          : undefined,
      };
      // TODO: send payload to your API.
      console.info("Registration payload:", payload);
      setSubmitted(true);
      message.success("Welcome to the IT Club!");
    } catch {
      setSubmissionError(
        "Не удалось отправить заявку. Проверьте соединение и попробуйте ещё раз.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    form.resetFields();
    setSubmitted(false);
    setSubmissionError(null);
  };
  return (
    <main className="registration-shell">
      <section className="form-panel">
        <div className="form-panel__inner">
          {submitted ? (
            <SuccessState onReset={handleReset} />
          ) : (
            <>
              <FormHeader />

              {submissionError && (
                <div className="submission-alert" role="alert">
                  {submissionError}
                </div>
              )}

              <Form<RegistrationForm>
                form={form}
                layout="vertical"
                requiredMark={false}
                autoComplete="off"
                className="registration-form"
                onFinish={handleFinish}
              >
                <SectionTitle number="01" title="Основная информация" />

                <Form.Item
                  name="name"
                  label="NAME"
                  rules={[
                    { required: true, message: "Please enter your name" },
                    {
                      min: 2,
                      message: "Name must contain at least 2 characters",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<UserOutlined />}
                    placeholder="HONG SAMPLE"
                  />
                </Form.Item>

                <Form.Item
                  name="tg"
                  label="TELEGRAM"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Telegram username",
                    },
                    {
                      validator: (_, value: string | undefined) => {
                        if (!value || value === "@") {
                          return Promise.reject(
                            new Error(
                              "Please enter your Telegram username with @",
                            ),
                          );
                        }

                        const username = value.startsWith("@")
                          ? value.slice(1)
                          : value;

                        return /^[a-zA-Z0-9_]{2,32}$/.test(username)
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error("Use a valid Telegram username"),
                            );
                      },
                    },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<TelegramFilled />}
                    placeholder="@hongsample"
                  />
                </Form.Item>

                <SectionTitle number="02" title="Немного о себе" optional />

                <Form.Item
                  name="birthdate"
                  label={
                    <FieldLabel hint="Помогает нам планировать форматы встреч и учитывать возрастные ограничения мероприятий.">
                      Birthdate
                    </FieldLabel>
                  }
                  extra="Нужно для более подходящих форматов встреч."
                >
                  <DatePicker
                    format="YYYY.MM.DD"
                    placeholder="Выберите дату"
                    style={{ width: "100%" }}
                  />
                </Form.Item>

                <Form.Item
                  name="city"
                  label={
                    <FieldLabel hint="Помогает видеть, где собирается наше сообщество, и находить локальные встречи.">
                      City
                    </FieldLabel>
                  }
                  extra="Чтобы предложить локальные встречи и события."
                >
                  <AutoComplete
                    options={koreanCities}
                    filterOption={filterPlaceOptions}
                    placeholder="Начните вводить по-русски или 한글"
                    notFoundContent="Город не найден — можно оставить свой вариант"
                  />
                </Form.Item>

                <Form.Item
                  name="university"
                  label={
                    <FieldLabel hint="Помогает находить людей с похожим учебным контекстом и запускать кампусные инициативы.">
                      University
                    </FieldLabel>
                  }
                  extra="Чтобы соединять людей с похожим учебным контекстом."
                >
                  <AutoComplete
                    options={koreanUniversities}
                    filterOption={filterPlaceOptions}
                    placeholder="Например, 서울대학교"
                    notFoundContent="Университет не найден — можно ввести вручную"
                  />
                </Form.Item>

                <Form.Item
                  name="experience"
                  label={
                    <FieldLabel hint="Помогает подобрать подходящий уровень встреч, менторов и проектных групп.">
                      Experience
                    </FieldLabel>
                  }
                  extra="Чтобы подобрать комфортный уровень входа."
                >
                  <Input placeholder="3 years in web development" />
                </Form.Item>

                <Form.Item
                  name="expectations"
                  label={
                    <FieldLabel hint="Помогает сделать первое знакомство полезнее и предложить релевантные активности клуба.">
                      Expectations
                    </FieldLabel>
                  }
                  extra="Чтобы первое знакомство было по делу."
                >
                  <Input placeholder="What would you like to learn?" />
                </Form.Item>

                <Form.Item
                  name="github"
                  label={
                    <FieldLabel hint="Помогает увидеть ваши интересы и предложить проект, где будет интересно участвовать.">
                      Github
                    </FieldLabel>
                  }
                  extra="Можно посмотреть ваши проекты и интересы."
                >
                  <Input
                    prefix={<GithubOutlined />}
                    placeholder="github.com/johndoe"
                  />
                </Form.Item>

                <div className="form-footer">
                  <Form.Item
                    name="consent"
                    valuePropName="checked"
                    className="consent-item"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(new Error("Подтвердите согласие")),
                      },
                    ]}
                  >
                    <Checkbox>Согласен(на) на связь по этому запросу</Checkbox>
                  </Form.Item>

                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={submitting}
                    icon={<ArrowRightOutlined />}
                    iconPlacement="end"
                    className="submit-button"
                  >
                    Отправить заявку
                  </Button>
                </div>

                <div className="form-privacy">
                  <span aria-hidden="true">●</span>
                  <span>
                    Мы не продаем данные и не добавляем вас в рассылки без
                    согласия.
                  </span>
                </div>

                <FooterMeta />
              </Form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;

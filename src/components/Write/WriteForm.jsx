import styled from "styled-components";
import CodeField from "./CodeField";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Button from "../@common/Button";
import useInput from "../../hooks/useInput";
import "highlight.js/styles/atom-one-light.min.css";

export default function WriteForm() {
  const [form, onChange, refresh] = useInput({
    title: "",
    code: "",
    problem: "",
    question: "",
  });

  return (
    <StWriteForm>
      <InputField
        label="제목"
        name="title"
        value={form.title}
        onChange={onChange}
        placeholder="제목을 입력해주세요"
      />

      <CodeField
        label="코드"
        name="code"
        value={form.code}
        onChange={onChange}
        placeholder="코드를 입력해주세요"
      />

      <TextAreaField
        label="문제상황"
        name="problem"
        value={form.problem}
        onChange={onChange}
        placeholder="문제상황을 입력해주세요"
      />

      <TextAreaField
        label="궁금한점"
        name="question"
        value={form.question}
        onChange={onChange}
        placeholder="궁금한점을 입력해주세요"
      />

      <WriteFormButtons>
        <Button text="취소" size="medium" $primary="true" />
        <Button text="완료" size="medium" $primary="false" />
      </WriteFormButtons>
    </StWriteForm>
  );
}

const StWriteForm = styled.form`
  width: 100%;
  padding: 12px 0;
  margin: 12px 0;
  box-sizing: border-box;
`;

const WriteFormButtons = styled.div`
  width: 100%;
  padding: 48px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
`;

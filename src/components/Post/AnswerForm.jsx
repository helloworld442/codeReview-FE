import { useState } from "react";
import styled, { css } from "styled-components";
import useInput from "../../hooks/useInput";

const AnswerForm = () => {
  const [validate, setValidate] = useState(0);
  const [form, onChange, refresh] = useInput({
    id: 0,
    content: "",
    codeline: "",
    code: "",
  });

  const onChangeAnswer = (e) => {
    setValidate(e.target.value.length);
    onChange(e);
  };

  return (
    <AnswerFormBox>
      <StAnswerForm>
        <AnswerFormTextArea
          onChange={onChangeAnswer}
          spellCheck="false"
          placeholder="원하는 부분의 코드리뷰를 진행해주세요!"
        />
        <AnswerFormCount $validate={validate > 1000}>
          {validate} / 1000
        </AnswerFormCount>
        <AnswerFormButton>등록</AnswerFormButton>
      </StAnswerForm>
    </AnswerFormBox>
  );
};

const AnswerFormBox = styled.div`
  width: 100%;
  margin: 36px 0;
`;

const StAnswerForm = styled.form`
  background: #fff;
  margin-top: 24px;
  border: 2px solid #e8e8e8;
  border-radius: 6px;
  overflow: hidden;
`;

const AnswerFormTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px;
  margin: 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #e8e8e8;
  outline: none;
  resize: none;
  font-size: 0.925rem;
  font-weight: 550;
  font-family: "Jua";
  color: #333;
  line-height: 1.5rem;
`;

const AnswerFormCount = styled.span`
  display: inline-block;
  padding: 12px 16px;
  margin: 0;
  box-sizing: border-box;
  font-size: 0.9rem;
  color: #888;

  ${(props) =>
    props.$validate &&
    css`
      color: red;
    `}
`;

const AnswerFormButton = styled.button`
  float: right;
  padding: 8px 16px;
  margin: 0;
  box-sizing: border-box;
  border: none;
  border-left: 2px solid #e8e8e8;
  outline: none;
  background: #fff;
  font-size: 1rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  cursor: pointer;
`;

export default AnswerForm;

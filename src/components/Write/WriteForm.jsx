import styled from "styled-components";
import CodeField from "./CodeField";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Button from "../@common/Button";
import useInput from "../../hooks/useInput";
import "highlight.js/styles/atom-one-light.min.css";
import { useMutation, useQueryClient } from "react-query";
import { createReview } from "../../apis/review";
import {
  valdateCode,
  valdateContent,
  valdateTitle,
  validateCategory,
} from "../../validation/postValidation";
import CategoryField from "./CategoryField";

export default function WriteForm() {
  const queryClient = useQueryClient();
  const [form, error, onChange, onError, refresh, onAdd, onRemove] = useInput({
    title: "",
    code: "",
    problem: "",
    question: "",
    category: [],
  });

  const writeMutation = useMutation(createReview, {
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
      window.history.back();
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const titleError = valdateTitle(form.title);
    const categoryError = validateCategory(form.category);
    const codeError = valdateCode(form.code);
    const problemError = valdateContent(form.problem);
    const questionError = valdateContent(form.question);

    if (
      titleError ||
      categoryError ||
      codeError ||
      problemError ||
      questionError
    ) {
      onError({
        title: titleError,
        category: categoryError,
        code: codeError,
        problem: problemError,
        question: questionError,
      });

      return;
    }

    writeMutation.mutate(form);

    refresh();
  };

  const onReload = (e) => {
    e.preventDefault();

    window.history.back();
  };

  return (
    <StWriteForm onSubmit={onSubmit}>
      <CategoryField
        label="카테고리 (다중 선택 O)"
        value={form.category}
        error={error.category}
        onAdd={onAdd}
        onRemove={onRemove}
      />

      <InputField
        label="제목"
        name="title"
        value={form.title}
        error={error.title}
        onChange={onChange}
        placeholder="제목을 입력해주세요"
      />

      <CodeField
        label="코드"
        name="code"
        value={form.code}
        error={error.code}
        onChange={onChange}
        placeholder="코드를 입력해주세요"
      />

      <TextAreaField
        label="문제상황"
        name="problem"
        value={form.problem}
        error={error.problem}
        onChange={onChange}
        placeholder="문제상황을 입력해주세요"
      />

      <TextAreaField
        label="궁금한점"
        name="question"
        value={form.question}
        error={error.question}
        onChange={onChange}
        placeholder="궁금한점을 입력해주세요"
      />

      <WriteFormButtons>
        <Button text="취소" size="medium" $primary="true" onClick={onReload} />
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
`;

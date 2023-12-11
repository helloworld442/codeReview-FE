import styled from "styled-components";
import { ReactComponent as PenSquare } from "../../assets/pen-to-square-regular.svg";
import useTextArea from "../../hooks/useTextArea";
import useUpdateValue from "./useUpdateValue";
import useInput from "../../hooks/useInput";
import useToggle from "../../hooks/useToggle";

export default function QuestionDesc({ post }) {
  return (
    <>
      <ProblemPost post={post} />
      <QuestionPost post={post} />
    </>
  );
}

function ProblemPost({ post }) {
  const [form, onChange] = useInput(post);
  const textareaRef = useTextArea(form.problem);

  const onUpdateValue = useUpdateValue(form);

  const [disabled, onClick, onKeyDown] = useToggle({
    trigger: onUpdateValue,
  });

  return (
    <StQuestionDesc>
      <QuestionDescTitle>문제상황</QuestionDescTitle>
      {disabled && <QuestionPostPen onClick={onClick} />}
      <QuestionDescContent
        ref={textareaRef}
        type="text"
        name="problem"
        value={form.problem}
        onChange={onChange}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
    </StQuestionDesc>
  );
}

function QuestionPost({ post }) {
  const [form, onChange] = useInput(post);
  const textareaRef = useTextArea(form.question);

  const onUpdateValue = useUpdateValue(form);

  const [disabled, onClick, onKeyDown] = useToggle({
    trigger: onUpdateValue,
  });

  return (
    <StQuestionDesc>
      <QuestionDescTitle>궁금한점</QuestionDescTitle>
      {disabled && <QuestionPostPen onClick={onClick} />}
      <QuestionDescContent
        ref={textareaRef}
        type="text"
        name="question"
        value={form.question}
        onChange={onChange}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
    </StQuestionDesc>
  );
}

const StQuestionDesc = styled.div`
  margin: 48px 0;
`;

const QuestionDescTitle = styled.h3`
  display: inline-block;
  margin-bottom: 12px;
  font-size: 1.35rem;
  font-weight: 300;
  color: rgb(102, 103, 171, 1);
`;

const QuestionDescContent = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  font-size: 0.95rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  line-height: 1.8rem;
  resize: none;

  &:disabled {
    border: none;
    outline: none;
    background: #fff;
    color: #333;
  }

  &:enabled {
    border: 1px solid #d7e0e6;
    border-radius: 2px;
    outline: 2px solid rgb(102, 103, 171, 1);
    background: #fefefe;
    color: #444;
  }
`;

const QuestionPostPen = styled(PenSquare)`
  width: 1.1rem;
  height: 1.1rem;
  margin-left: 18px;
  fill: #888;
  cursor: pointer;

  &:hover {
    fill: rgb(102, 103, 171, 1);
  }
`;

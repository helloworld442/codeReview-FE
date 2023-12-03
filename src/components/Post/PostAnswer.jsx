import styled from "styled-components";
import AnswerForm from "./AnswerForm";
import AnswerComments from "./AnswerComment";

export default function PostAnswer() {
  return (
    <StPostAnswer>
      <AnswerForm />
      <AnswerComments />
    </StPostAnswer>
  );
}

const StPostAnswer = styled.div`
  width: 100%;
`;

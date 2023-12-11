import styled from "styled-components";
import QuestionTitle from "./QuestionTitle";
import QuestionInfo from "./QuestionInfo";
import QuestionCode from "./QuestionCode";
import QuestionDesc from "./QuestionDesc";
import usePost from "./usePost";

const PostQuestion = () => {
  const post = usePost();

  return (
    <StQuestionPost>
      <QuestionTitle post={post} />
      <QuestionCode post={post} />
      <QuestionDesc post={post} />
      <QuestionInfo post={post} />
    </StQuestionPost>
  );
};

const StQuestionPost = styled.div`
  position: relative;
  width: 100%;
`;

export default PostQuestion;

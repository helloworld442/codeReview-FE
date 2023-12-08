import styled from "styled-components";
import { createContext, useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import {
  createHeart,
  deleteReview,
  getReview,
  updateReview,
} from "../../apis/review";
import QuestionTitle from "./QuestionTitle";
import QuestionInfo from "./QuestionInfo";
import QuestionCode from "./QuestionCode";
import QuestionDesc from "./QuestionDesc";
import useInput from "../../hooks/useInput";

const PostQuestionContext = createContext(null);

const PostQuestion = () => {
  const { postId } = useParams();

  const { data } = useQuery(["review", postId], () => getReview(postId), {
    retry: 0,
    staleTime: 5 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    suspense: true,
  });

  const [form, onChange] = useInput(data);

  const queryClient = useQueryClient();

  const updateMutation = useMutation(updateReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(["review", postId]);
    },
  });

  const deleteMutation = useMutation(deleteReview, {
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
    },
  });

  const heartMutation = useMutation(createHeart, {
    onSuccess: () => {
      queryClient.invalidateQueries(["review", postId]);
    },
  });

  const onToggleUpdateInput = (e) => {
    e.preventDefault();

    updateMutation.mutate({ postId, req: form });
  };

  const onClickDeleteButton = (e) => {
    e.preventDefault();

    deleteMutation.mutate(postId);
  };

  const onClickHeartButton = (e) => {
    e.preventDefault();

    heartMutation.mutate(postId);
  };

  return (
    <PostQuestionContext.Provider
      value={{
        data,
        form,
        onChange,
        onToggleUpdateInput,
        onClickDeleteButton,
        onClickHeartButton,
      }}
    >
      <StQuestionPost>
        <QuestionTitle />
        <QuestionCode />
        <QuestionDesc />
        <QuestionInfo />
      </StQuestionPost>
    </PostQuestionContext.Provider>
  );
};

export function usePostContext() {
  const context = useContext(PostQuestionContext);

  return context;
}

const StQuestionPost = styled.div`
  position: relative;
  width: 100%;
`;

export default PostQuestion;

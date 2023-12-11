import { useMutation, useQueryClient } from "react-query";
import { updateReview } from "../../apis/review";
import { useParams } from "react-router-dom";

export default function useUpdateValue(req) {
  const { postId } = useParams();
  const queryClient = useQueryClient();

  const updateMutation = useMutation(updateReview, {
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
    },
  });

  const onUpdateValue = (e) => {
    e.preventDefault();

    updateMutation.mutate({ postId, req });
  };

  return onUpdateValue;
}

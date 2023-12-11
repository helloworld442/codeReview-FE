import { useMutation, useQueryClient } from "react-query";
import { deleteReview } from "../../apis/review";
import { useParams } from "react-router-dom";

export default function useDeleteValue() {
  const { postId } = useParams();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteReview, {
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
    },
  });

  const onDeleteValue = (e) => {
    e.preventDefault();

    deleteMutation.mutate(postId);
  };

  return onDeleteValue;
}

import { useMutation, useQueryClient } from "react-query";
import { createHeart } from "../../apis/review";
import { useParams } from "react-router-dom";

export default function useUpdateHeart() {
  const { postId } = useParams();
  const queryClient = useQueryClient();

  const heartMutation = useMutation(createHeart, {
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
    },
  });

  const onUpdateHeart = (e) => {
    e.preventDefault();

    heartMutation.mutate(postId);
  };

  return onUpdateHeart;
}

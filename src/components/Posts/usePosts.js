import { useQuery } from "react-query";
import { getReviews } from "../../apis/review";

export default function usePosts() {
  const { data } = useQuery("reviews", getReviews, {
    retry: 0,
    staleTime: 5 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    suspense: true,
  });

  return data.content;
}

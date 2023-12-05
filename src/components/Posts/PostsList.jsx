import styled from "styled-components";
import PostsItem from "./PostsItem";
import { useQuery } from "react-query";
import { getReviews } from "../../apis/review";

export default function PostsList() {
  const { isLoading, isError, data } = useQuery("reviews", getReviews, {
    retry: 0,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  });

  if (isLoading) return <div>asdf</div>;

  if (isError) return <div>asdf</div>;

  return (
    <StPostList>
      {data.content.map((post) => (
        <PostsItem key={post.id} post={post} />
      ))}
    </StPostList>
  );
}

const StPostList = styled.ul`
  margin: 18px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 14px;
`;

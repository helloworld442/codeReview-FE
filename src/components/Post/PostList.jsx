import { useQuery } from "react-query";
import styled from "styled-components";
import { getReviews } from "../../apis/review";
import PostItem from "./PostItem";
import { device } from "../../utils/media";

export default function PostList() {
  const { data } = useQuery("reviews", getReviews, {
    retry: 0,
    staleTime: 5 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    suspense: true,
  });

  return (
    <StPostList>
      <PostListTitle>추천 게시글</PostListTitle>
      {data.content.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </StPostList>
  );
}

const StPostList = styled.ul`
  width: 360px;
  margin-top: 10px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const PostListTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #555;
`;

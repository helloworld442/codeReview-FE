import styled from "styled-components";
import { device } from "../../utils/media";
import PostItem from "./PostItem";
import usePosts from "../Posts/usePosts";

export default function PostList() {
  const posts = usePosts();

  return (
    <StPostList>
      <PostListTitle>추천 게시글</PostListTitle>
      {posts.map((post) => (
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

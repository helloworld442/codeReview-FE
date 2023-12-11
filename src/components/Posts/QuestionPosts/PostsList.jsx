import styled from "styled-components";
import PostsItem from "./PostsItem";
import usePosts from "../usePosts";

export default function PostsList() {
  const posts = usePosts();

  return (
    <StPostList>
      {posts.map((post) => (
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

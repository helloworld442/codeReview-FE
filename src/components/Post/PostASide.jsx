import styled from "styled-components";
import PostList from "./PostList";
import { Suspense } from "react";
import { device } from "../../utils/media";

export default function PostASide() {
  return (
    <Suspense fallback={<div>asdf</div>}>
      <StPostASide>
        <PostList />
      </StPostASide>
    </Suspense>
  );
}

const StPostASide = styled.aside`
  float: right;

  @media ${device.tablet} {
    width: 100%;
  }
`;

import styled from "styled-components";
import { device } from "../../utils/media";
import PostQuestion from "./PostQuestion";
import PostAnswer from "./PostAnswer";
import { Suspense } from "react";

export default function PostDetail() {
  return (
    <Suspense fallback={<div>asdf</div>}>
      <StPostDetail>
        <PostQuestion />
        <PostAnswer />
      </StPostDetail>
    </Suspense>
  );
}

const StPostDetail = styled.div`
  width: 700px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

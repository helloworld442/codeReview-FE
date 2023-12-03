import styled from "styled-components";
import { device } from "../../utils/media";
import PostQuestion from "./PostQuestion";
import PostAnswer from "./PostAnswer";

export default function PostDetail() {
  return (
    <StPostDetail>
      <PostQuestion />
      <PostAnswer />
    </StPostDetail>
  );
}

const StPostDetail = styled.div`
  width: 700px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

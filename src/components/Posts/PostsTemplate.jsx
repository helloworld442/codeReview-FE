import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostsTemplate({ children }) {
  return <StPostsTemplate>{children}</StPostsTemplate>;
}

const StPostsTemplate = styled.main`
  width: 970px;
  margin-top: 24px;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
`;

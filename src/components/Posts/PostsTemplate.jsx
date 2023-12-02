import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostsTemplate({ children }) {
  return <StPostsTemplate>{children}</StPostsTemplate>;
}

const StPostsTemplate = styled.main`
  width: 1050px;
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 64px;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

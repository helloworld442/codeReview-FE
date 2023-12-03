import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostsTemplate({ children }) {
  return <StPostsTemplate>{children}</StPostsTemplate>;
}

const StPostsTemplate = styled.main`
  width: 1024px;
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 65px;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

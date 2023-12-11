import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostTemplate({ children }) {
  return <StPostTemplate>{children}</StPostTemplate>;
}

const StPostTemplate = styled.main`
  width: 100%;
  margin-top: 12px;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

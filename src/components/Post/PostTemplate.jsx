import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostTemplate({ children }) {
  return <StPostTemplate>{children}</StPostTemplate>;
}

const StPostTemplate = styled.main`
  width: 100%;
  margin-top: 12px;
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

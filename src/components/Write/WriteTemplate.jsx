import styled from "styled-components";
import { device } from "../../utils/media";

export default function WriteTemplate({ children }) {
  return <StWriteTemplate>{children}</StWriteTemplate>;
}

const StWriteTemplate = styled.main`
  width: 730px;
  margin: 14px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.tablet} {
    width: 100%;
  }
`;

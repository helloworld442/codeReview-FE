import styled from "styled-components";
import { ReactComponent as Error } from "../../assets/triangle-exclamation-solid.svg";

export default function ErrorIcon() {
  return <StErrorIcon />;
}

const StErrorIcon = styled(Error)`
  width: 8rem;
  height: 8rem;
  fill: #red;
`;

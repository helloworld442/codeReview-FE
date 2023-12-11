import styled from "styled-components";
import { ReactComponent as Error } from "../../assets/triangle-exclamation-solid.svg";

export default function NotFoundIcon() {
  return <StNotFoundIcon />;
}

const StNotFoundIcon = styled(Error)`
  width: 18rem;
  height: 18rem;
  fill: #db4455;
`;

import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export default function ErrorCode() {
  const { response } = useRouteError();

  return <StErrorCode>{response.status}</StErrorCode>;
}

const StErrorCode = styled.div`
  font-size: 5rem;
  font-weight: bold;
  font-family: "Noto Sans KR";
  color: #333;
`;

import styled from "styled-components";
import ErrorCode from "./ErrorCode";
import ErrorMessage from "./ErrorMessage";

export default function ErrorMain() {
  return (
    <StErrorMain>
      <ErrorCode />
      <ErrorMessage />
    </StErrorMain>
  );
}

const StErrorMain = styled.div`
  float: right;
`;

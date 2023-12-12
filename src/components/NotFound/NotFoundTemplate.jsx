import styled from "styled-components";

export default function NotFoundTemplate({ children }) {
  return <StNotFoundTemplate>{children}</StNotFoundTemplate>;
}

const StNotFoundTemplate = styled.div`
  position: absolute;
  top: 50%;
  width: 800px;
  height: 300px;
  margin: 164px 0;
`;

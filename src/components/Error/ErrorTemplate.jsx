import styled from "styled-components";

export default function ErrorTemplate({ children }) {
  return <StErrorTemplate>{children}</StErrorTemplate>;
}

const StErrorTemplate = styled.div`
  position: absolute;
  top: 50%;
  width: 800px;
  height: 300px;
  margin: 164px 0;
`;

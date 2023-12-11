import styled from "styled-components";

export default function ErrorTemplate({ children }) {
  return <StErrorTemplate>{children}</StErrorTemplate>;
}

const StErrorTemplate = styled.div`
  position: absolute;
  top: 50%;
  width: 900px;
  height: 500px;
  margin: 72px 0;
`;

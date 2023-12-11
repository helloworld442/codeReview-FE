import styled from "styled-components";

export default function ErrorTemplate({ children }) {
  return <StErrorTemplate>{children}</StErrorTemplate>;
}

const StErrorTemplate = styled.div`
  width: 900px;
  height: 500px;
`;

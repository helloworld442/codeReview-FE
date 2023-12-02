import styled from "styled-components";

export default function CategoryTemplate({ children }) {
  return <StCategoryTemplate>{children}</StCategoryTemplate>;
}

const StCategoryTemplate = styled.main`
  margin: 14px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

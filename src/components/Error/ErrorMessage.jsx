import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export default function ErrorMessage() {
  const { response } = useRouteError();

  return (
    <StErrorMessage>
      <ErrorMessageTitle>Page Not Found</ErrorMessageTitle>
      <ErrorMessageDesc>
        {response.data ||
          `We're sorry, the page you requested\ncould not be found Please go back\nto the homepage`}
      </ErrorMessageDesc>
      <ErrorMessageLink>Home Page</ErrorMessageLink>
    </StErrorMessage>
  );
}

const StErrorMessage = styled.div`
  margin: 10px 0;
`;

const ErrorMessageTitle = styled.h3`
  margin-bottom: 36px;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: "Noto Sans KR";
  color: #333;
`;

const ErrorMessageDesc = styled.pre`
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #333;
`;

const ErrorMessageLink = styled.a``;

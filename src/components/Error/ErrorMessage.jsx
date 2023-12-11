import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export default function ErrorMessage() {
  const { response } = useRouteError();

  return (
    <StErrorMessage>
      <ErrorMessageTitle>Page Not Found</ErrorMessageTitle>
      <ErrorMessageDesc>
        {response.data &&
          `We're sorry, the page you requested
        \n
        could not be found Please go back
        \n
        to the homepage`}
      </ErrorMessageDesc>
      <ErrorMessageLink>Home Page</ErrorMessageLink>
    </StErrorMessage>
  );
}

const StErrorMessage = styled.div``;

const ErrorMessageTitle = styled.h3``;

const ErrorMessageDesc = styled.h5``;

const ErrorMessageLink = styled.a``;

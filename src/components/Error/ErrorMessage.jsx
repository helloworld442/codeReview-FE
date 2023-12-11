import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export default function ErrorMessage() {
  const { response } = useRouteError();

  return (
    <StErrorMessage>
      <ErrorMessageCode>{response?.status || 404}</ErrorMessageCode>
      <ErrorMessageTitle>Page Not Found</ErrorMessageTitle>
      <ErrorMessageDesc>
        {response?.data ||
          `We're sorry, the page you requested\ncould not be found Please go back\nto the homepage`}
      </ErrorMessageDesc>
      <ErrorMessageLink href="/category">Home Page</ErrorMessageLink>
    </StErrorMessage>
  );
}

const StErrorMessage = styled.div`
  margin: 10px 0;
  float: right;
`;

const ErrorMessageCode = styled.h3`
  font-size: 5rem;
  font-weight: bold;
  font-family: "Noto Sans KR";
  color: #333;
`;

const ErrorMessageTitle = styled.h3`
  margin-bottom: 24px;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: "Noto Sans KR";
  color: #333;
`;

const ErrorMessageDesc = styled.pre`
  margin-bottom: 24px;
  line-height: 1.4rem;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #333;
`;

const ErrorMessageLink = styled.a`
  display: inline-block;
  width: 300px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 0.95rem;
  font-weight: bold;
  font-family: "Noto Sans KR";
  border-radius: 4px;
  color: #fff;
  background: rgb(102, 103, 171, 0.8);
`;

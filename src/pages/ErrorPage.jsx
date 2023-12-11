import ErrorCode from "../components/Error/ErrorCode";
import ErrorMessage from "../components/Error/ErrorMessage";
import ErrorTemplate from "../components/Error/ErrorTemplate";
import ErrorLayout from "../layout/ErrorLayout";

export default function ErrorPage() {
  return (
    <ErrorLayout>
      <ErrorTemplate>
        <ErrorCode />
        <ErrorMessage />
      </ErrorTemplate>
    </ErrorLayout>
  );
}

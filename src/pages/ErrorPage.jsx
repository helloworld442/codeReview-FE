import ErrorIcon from "../components/Error/ErrorIcon";
import ErrorMessage from "../components/Error/ErrorMessage";
import ErrorTemplate from "../components/Error/ErrorTemplate";
import ErrorLayout from "../layout/ErrorLayout";

export default function ErrorPage() {
  return (
    <ErrorLayout>
      <ErrorTemplate>
        <ErrorIcon />
        <ErrorMessage />
      </ErrorTemplate>
    </ErrorLayout>
  );
}

import ErrorIcon from "../components/Error/ErrorIcon";
import ErrorMain from "../components/Error/ErrorMain";
import ErrorTemplate from "../components/Error/ErrorTemplate";
import ErrorLayout from "../layout/ErrorLayout";

export default function ErrorPage() {
  return (
    <ErrorLayout>
      <ErrorTemplate>
        <ErrorIcon />
        <ErrorMain />
      </ErrorTemplate>
    </ErrorLayout>
  );
}

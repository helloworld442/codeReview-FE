import NotFoundIcon from "../components/NotFound/NotFoundIcon";
import NotFoundMessage from "../components/NotFound/NotFoundMessage";
import NotFoundTemplate from "../components/NotFound/NotFoundTemplate";
import NotFoundLayout from "../layout/NotFoundLayout";

export default function NotFoundPage() {
  return (
    <NotFoundLayout>
      <NotFoundTemplate>
        <NotFoundIcon />
        <NotFoundMessage />
      </NotFoundTemplate>
    </NotFoundLayout>
  );
}

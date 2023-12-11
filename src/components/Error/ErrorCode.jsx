import { useRouteError } from "react-router-dom";

export default function ErrorCode() {
  const error = useRouteError();

  console.log(error);

  return <div>404</div>;
}

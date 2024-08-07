import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

type RouteError = {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  error: Error;
  message?: string;
};

const Error = () => {
  const error: RouteError = useRouteError() as RouteError;
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
};

export default Error;

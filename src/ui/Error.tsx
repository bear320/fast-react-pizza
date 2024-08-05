import { useNavigate, useRouteError } from "react-router-dom";

type RouteError = {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  error: Error;
  message?: string;
};

const Error = () => {
  const navigate = useNavigate();
  const error: RouteError = useRouteError() as RouteError;
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default Error;

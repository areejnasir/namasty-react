import { useRouteError } from "react-router-dom";

export default ErrorPage = () => {
  const err = useRouteError();
  return (
    <>
      <h1>i'm error page</h1>
      <h2>{err.status}</h2>
      <h3>{err.statusText}</h3>
    </>
  );
};

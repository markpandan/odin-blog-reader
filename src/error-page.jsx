import { useRouteError } from "react-router-dom";
import Navbar from "./components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <div id="error-page" className="container">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;

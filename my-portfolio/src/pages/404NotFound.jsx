import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="" id="404-page">
      <FaExclamationTriangle className="" />
      <h1 className="">404 Not Found</h1>
      <p className="">This page does not exist</p>
      <Link
        to="/"
        className=""
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;

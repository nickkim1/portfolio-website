import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="notfound-page-wrapper">
      <section id="404-page">
        <FaExclamationTriangle className="" />
        <h1>404 Not Found</h1>
        <img src="src/images/panda.png"></img>
        <p>Whoops still under construction! Page doesn't seem to exist...</p>
          <Link to="/" className="notfound-redirect-link">
            Go Back
          </Link>
      </section>
    </div>
  );
};
export default NotFoundPage;
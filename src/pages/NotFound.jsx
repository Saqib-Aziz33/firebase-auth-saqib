import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <section className="text-center">
        <h2 className="display-4">
          404 <span className="text-danger">Error</span>
        </h2>
        <p className="lead">Requested page is not Found</p>
        <Link to="/" className="btn btn-dark">
          Back to Home
        </Link>
      </section>
    </>
  );
}
export default NotFound;

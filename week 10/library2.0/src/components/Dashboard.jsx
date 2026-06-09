import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page">
      <h2>Librarian Dashboard</h2>

      <p>
        Welcome librarian. You can manage the
        historical book collection from here.
      </p>

      <Link
        to="/delete-books"
        className="btn-link"
      >
        Go To Book Deletion
      </Link>
    </div>
  );
}

export default Dashboard;

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="card">
      <h2>Home Page</h2>
      <p>
        This SPA lets librarians move between pages and insert new book details
        using a controlled React form.
      </p>
      <Link to="/add-book" className="action-btn">
        Go to Add Book Form
      </Link>
    </section>
  );
};

export default Home;
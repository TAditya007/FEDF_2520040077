import { useState } from "react";

function BookDeletion() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Java Programming"
    },
    {
      id: 2,
      title: "Python Fundamentals"
    },
    {
      id: 3,
      title: "React Development"
    }
  ]);

  const [loadingId, setLoadingId] =
    useState(null);

  const deleteBook = async (id) => {
    setLoadingId(id);

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    setBooks((prev) =>
      prev.filter((book) => book.id !== id)
    );

    setLoadingId(null);
  };

  return (
    <div className="page">
      <h2>Book Deletion System</h2>

      <p>
        Authorized librarians can remove books
        from the collection.
      </p>

      <ul className="book-list">
        {books.map((book) => (
          <li
            key={book.id}
            className="book-item"
          >
            <span>{book.title}</span>

            <button
              onClick={() =>
                deleteBook(book.id)
              }
              disabled={loadingId === book.id}
            >
              {loadingId === book.id
                ? "Deleting..."
                : "Delete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDeletion;
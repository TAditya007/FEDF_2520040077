import { useState } from "react";

const initialState = {
  title: "",
  author: "",
  isbn: "",
  category: "",
};

function AddBook() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.author.trim()) newErrors.author = "Author is required.";
    if (!formData.isbn.trim()) newErrors.isbn = "ISBN is required.";
    if (!formData.category) newErrors.category = "Please select a category.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    setSuccessMessage(
        `Book "${formData.title}" by ${formData.author} inserted successfully.`
      );
    setFormData(initialState);
    setErrors({});
  };

  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
    setSuccessMessage("");
  };

  return (
    <section className="card">
      <h2>Add Book</h2>

      <form onSubmit={handleSubmit} noValidate className="form">
        <div className="field">
          <label htmlFor="title">Book Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            aria-invalid={!!errors.title}
            aria-describedby={errors.title ? "title-error" : undefined}
          />
          {errors.title && (
            <span id="title-error" className="field-error" role="alert">
              {errors.title}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            value={formData.author}
            onChange={handleChange}
            aria-invalid={!!errors.author}
            aria-describedby={errors.author ? "author-error" : undefined}
          />
          {errors.author && (
            <span id="author-error" className="field-error" role="alert">
              {errors.author}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="isbn">ISBN</label>
          <input
            id="isbn"
            name="isbn"
            type="text"
            value={formData.isbn}
            onChange={handleChange}
            aria-invalid={!!errors.isbn}
            aria-describedby={errors.isbn ? "isbn-error" : undefined}
          />
          {errors.isbn && (
            <span id="isbn-error" className="field-error" role="alert">
              {errors.isbn}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            aria-invalid={!!errors.category}
            aria-describedby={errors.category ? "category-error" : undefined}
          >
            <option value="">Select category</option>
            <option value="Programming">Programming</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="Fiction">Fiction</option>
          </select>
          {errors.category && (
            <span id="category-error" className="field-error" role="alert">
              {errors.category}
            </span>
          )}
        </div>
        <div className="button-group">
          <button type="submit">Insert Book</button>
          <button type="button" onClick={handleReset} className="secondary-btn">
            Reset
          </button>
        </div>
      </form>

      {successMessage && (
        <p className="success-msg" aria-live="polite">
          {successMessage}
        </p>
      )}
    </section>
  );
}

export default AddBook;
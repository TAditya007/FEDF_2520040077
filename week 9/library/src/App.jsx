import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import libraryImage from "./assets/library.jpg";
import "./App.css";

function App() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${libraryImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <header className="topbar">
        <h1>Library Book Insertion System</h1>
        <nav aria-label="Primary navigation" className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/add-book">
            Add Book
          </NavLink>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
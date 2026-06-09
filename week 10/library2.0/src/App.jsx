import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import BookDeletion from "./components/BookDeletion";
import ProtectedRoute from "./routes/ProtectedRoute";

import backgroundImage from "./assets/background.jpg";

import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="overlay">
        <header className="header">
          <h1>📚 Historic Library Management System</h1>

          <nav>
            <Link to="/">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/delete-books">Delete Books</Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <Login setIsAuthenticated={setIsAuthenticated} />
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/delete-books"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
              >
                <BookDeletion />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
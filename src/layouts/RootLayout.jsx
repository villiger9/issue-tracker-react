import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function RootLayout() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="layout">
      <header>
        <nav className="navbar">
          <h1>The issue tracker</h1>
          <NavLink to="/" className="links">
            Home
          </NavLink>
          <NavLink to="create" className="links">
            New Issue
          </NavLink>
          <button onClick={toggleTheme}>Toggle Dark Mode</button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

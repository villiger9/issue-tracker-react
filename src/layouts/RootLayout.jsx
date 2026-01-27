import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

export default function RootLayout() {
  return (
    <div className="layout">
      <header>
        <nav className="navbar">
          <h1>The issue tracker</h1>
          <div className="nav-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="create">New Issue</NavLink>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

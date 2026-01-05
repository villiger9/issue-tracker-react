import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
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
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

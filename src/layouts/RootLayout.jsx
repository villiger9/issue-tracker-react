import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

export default function RootLayout() {
  return (
    <div className="layout">
      <header>
        <nav className="navbar">
          <h1 className="text-3xl font-bold">The issue tracker</h1>
          <div className="nav-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="create">New Issue</NavLink>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-2xl p-5">
        <Outlet />
      </main>
    </div>
  );
}

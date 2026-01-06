import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>that page cannot be found</p>
      <NavLink to="/">back to homepage</NavLink>
    </div>
  );
};

export default NotFound;

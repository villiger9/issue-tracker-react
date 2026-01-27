import { Link } from "react-router-dom";
import { ThemeContext } from "../src/contexts/ThemeContext"; // Import the 'Station'
import { useContext } from "react";

const IssueList = ({ issues, title }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="issue-list">
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
      <h2>{title}</h2>
      {issues.map((issue) => (
        <div className="issue-preview" key={issue.id}>
          <Link to={`/issues/${issue.id}`}>
            <h2>{issue.title}</h2>
            <p>{issue.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default IssueList;

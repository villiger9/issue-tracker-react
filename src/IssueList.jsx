import { Link } from "react-router-dom";
import { ThemeContext } from "../src/contexts/ThemeContext"; // Import the 'Station'
import { useContext } from "react";

const IssueList = ({ issues, title }) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="issue-list"
      style={{ background: theme.background, color: theme.color }}
    >
      <button onClick={theme.toggle}>Change Theme</button>
      <h2>{title}</h2>
      {issues.map((issue) => (
        <div className="issue-preview" key={issue.id}>
          <Link to={`/issues/${issue.id}`} style={{ color: theme.color }}>
            <h2>{issue.title}</h2>
            <p>Description {issue.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default IssueList;

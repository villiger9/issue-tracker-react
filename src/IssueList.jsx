import { Link } from "react-router-dom";

const IssueList = ({ issues, title }) => {
  return (
    <div className="issue-list">
      <h2>{title}</h2>
      {issues.map((issue) => (
        <div className="issue-preview" key={issue.id}>
          <Link to={`/issues/${issue.id}`}>
            <h2>{issue.title}</h2>
            <p>Description {issue.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default IssueList;

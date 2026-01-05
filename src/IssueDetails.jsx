import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const IssueDetails = () => {
  const { id } = useParams();
  const {
    data: issue,
    error,
    isLoading,
  } = useFetch("http://localhost:5000/issues/" + id);
  return (
    <div className="issue-details">
      {isLoading && <div>Loading</div>}
      {error && <div>{error}</div>}
      {issue && (
        <article>
          <h2>{issue.title}</h2>
          <p>{issue.priority}</p>
          <p>{issue.status}</p>
          <div>{issue.description}</div>
        </article>
      )}
    </div>
  );
};

export default IssueDetails;

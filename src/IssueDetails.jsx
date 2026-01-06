import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const IssueDetails = () => {
  const navigate = useNavigate(); // Initialize the hook

  const { id } = useParams();
  const {
    data: issue,
    error,
    isLoading,
  } = useFetch("http://localhost:5000/issues/" + id);

  const handleClick = () => {
    fetch("http://localhost:5000/issues/" + issue.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

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
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default IssueDetails;

import IssueList from "./IssueList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: issues,
    isLoading,
    error,
  } = useFetch("http://localhost:5000/issues");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading</div>}
      {issues && <IssueList issues={issues} title="all issues" />}
    </div>
  );
};

export default Home;

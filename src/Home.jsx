import { useEffect, useState } from "react";
import IssueList from "./IssueList";

const Home = () => {
  const [issues, setIssues] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/issues")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIssues(data);
      });
  }, []);

  return (
    <div className="home">
      {issues && <IssueList issues={issues} title="all issues" />}
    </div>
  );
};

export default Home;

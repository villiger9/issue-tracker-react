import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("open");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate(); // Initialize the hook

  const handleSubmit = (e) => {
    e.preventDefault();
    const issue = { title, description, priority, status };
    setIsPending(true);
    fetch("http://localhost:5000/issues", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(issue),
    }).then(() => {
      console.log("added");
      setIsPending(false);
      navigate("/"); // Send them back to the homepage
    });
  };

  return (
    <div className="create">
      <h2>Create a new issue</h2>
      <form onSubmit={handleSubmit}>
        <label>Issue title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Issue description: </label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Issue priority: </label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
        <label>Issue status: </label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="open">open</option>
          <option value="closed">closed </option>
        </select>
        {!isPending && <button>Add Issue</button>}
        {isPending && <button disabled>Adding...</button>}
      </form>
    </div>
  );
};

export default Create;

// the modern way to handle this actually moves all that useState and fetch logic out of the component entirely!
// In the new version, you use a Form component and an action function

import { useState } from "react";
import { Form, redirect, useNavigate, useNavigation } from "react-router-dom";

const Create = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [priority, setPriority] = useState("low");
  // const [status, setStatus] = useState("open");
  // const [isPending, setIsPending] = useState(false);
  // const navigate = useNavigate(); // Initialize the hook

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const issue = { title, description, priority, status };
  //   setIsPending(true);
  //   fetch("http://localhost:5000/issues", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(issue),
  //   }).then(() => {
  //     console.log("added");
  //     setIsPending(false);
  //     navigate("/"); // Send them back to the homepage
  //   });
  // };

  return (
    <div className="create">
      <h2>Create a new issue</h2>
      <Form method="post" action="/create">
        <label>Issue title: </label>
        <input type="text" name="title" required />
        <label>Issue description: </label>
        <textarea name="description" required />
        <label>Issue priority: </label>
        <select name="priority">
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
        <label>Issue status: </label>
        <select name="status">
          <option value="open">open</option>
          <option value="closed">closed </option>
        </select>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Issue"}
        </button>
      </Form>
    </div>
  );
};

export default Create;

export const createIssueAction = async ({ request }) => {
  const data = await request.formData();

  // Package the form data into an object
  const issue = {
    title: data.get("title"),
    description: data.get("description"),
    priority: data.get("priority"),
    status: data.get("status"),
  };

  // Perform the fetch
  const res = await fetch("http://localhost:5000/issues", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(issue),
  });

  if (!res.ok) {
    throw Error("Could not create the issue");
  }

  // Redirect the user
  return redirect("/");
};

import axios from "axios";
import { useState } from "react";

const NotesPage: React.FC = () => {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/v1/note", note);
      console.log("note saved:", res.data);
    } catch (err) {
      console.error("Error saving note:", err);
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="title"
          value={note.title}
          onChange={handleChange}
        />
        <input
          name="description"
          placeholder="description"
          value={note.description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NotesPage;

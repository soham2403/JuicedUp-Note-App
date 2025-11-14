import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/v1/note";

interface Note {
  _id?: string;
  title: string;
  description: string;
}

const NotesPage: React.FC = () => {
  const [note, setNote] = useState<Note>({
    title: "",
    description: "",
  });
  const [notes, setNotes] = useState<Note[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  // fetch all notes
  async function fetchNotes() {
    try {
      const res = await axios.get(API_URL);
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  async function handleEdit(n: Note) {
    setEditId(n._id!);
    // setEditId(n._id! || null);

    setNote({ title: n.title, description: n.description });
  }

  async function handleDelete(id: string) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, note);
        setEditId(null);
      } else {
        await axios.post(API_URL, note);
      }
      setNote({ title: "", description: "" });
      fetchNotes();
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
      <h2>Notes App</h2>
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
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <ul>
        {notes.map((n) => (
          <li key={n._id}>
            <p>
              <strong>{n.title}</strong>
            </p>
            <p>{n.description}</p>
            <button onClick={() => handleEdit(n)}>Edit</button>
            <button onClick={() => handleDelete(n._id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPage;

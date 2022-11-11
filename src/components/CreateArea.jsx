import React from "react";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea({ addNote }) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [noteExpanded, setNoteExpanded] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <form>
        {noteExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}

        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={noteExpanded ? 3 : 1}
          onClick={() => {
            setNoteExpanded(true);
          }}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            addNote(note);
            setNote({ title: "", content: "" });
          }}
        >
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

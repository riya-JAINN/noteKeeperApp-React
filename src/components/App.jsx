import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    setNotes((pre) => [...pre, note]);
  };

  const deleteNote = (id) => {
    let newNotes = notes.filter((note, index) => {
      return id !== index;
    });
    setNotes(newNotes);
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />

      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            id={index}
            deleteNote={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

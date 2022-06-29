import React, { useEffect, useState } from "react";
import {getNotes,delNote, addNote} from "./Actions";
import Note from './Components/Note';
import NoteDialog from './Components/NoteDialog';


const  App = () => {

  let [notes, setNotes] = useState([]);
  let [dialog, setDialog] = useState(false);

  useEffect(() => {
    async function fetchData() {
          let notes = await getNotes();
          setNotes(notes);
    }
    fetchData();
  }, []);


  function del(note) {
    setNotes(notes.filter(n => n.id !== note.id));
    delNote(note.id);
  }

  function add(note) {
    note.id = notes.length;
    addNote(note);
    setNotes([...notes, note]);
    setDialog(false);
  }

  return (
    <div className="App">
      <nav className='navbar'>
        <h1>Filonote</h1>
      </nav>
      <div className='space'>
        {
          notes
          .map(note => <Note key={note.id} note={note} onClose={del} />)
        }
      </div>
      <div className='footer'>
        {dialog 
        ? <NoteDialog onClose={() => setDialog(false)} onAdd={add} /> 
        : <button className='btn primary' onClick={() => setDialog(true)}>Add Note</button>}
      </div>
    </div>
  );
}


export default App;

import './App.css';
import React, { useEffect, useState } from "react";


const URL = "http://192.168.0.116:8080/notes"



const  App = () => {

  let [notes, setNotes] = useState([]);
  let [dialog, setDialog] = useState(false);


  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setNotes(data));

  }, []);


  function delNote(note) {
    console.log(note);
    setNotes(notes.filter(n => n.id !== note.id));
    fetch(URL, {method: "DELETE",headers:{'Content-Type': 'application/json'}, body: JSON.stringify(note)})
  }

  function addNote(note) {
    note.id = notes.length;
    setNotes([...notes, note]);
    setDialog(false);
    fetch(URL, {method: "POST",headers:{'Content-Type': 'application/json'}, body: JSON.stringify(note)});
  }

  return (
    <div className="App">
      <nav className='navbar'>
        <h1>Filonote</h1>
      </nav>
      <div className='space'>
        {
          notes
          .map(note => <Note key={note.id} note={note} onClose={delNote} />)
        }
      </div>
      <div className='Bottom'>
        {dialog 
        ? <NoteDialog onClose={() => setDialog(false)} onAdd={addNote} /> 
        : <button className='btn primary' onClick={() => setDialog(true)}>Add Note</button>}
      </div>
    </div>
  );
}


const Note = ({note,onClose}) => {

  const [isMaximized, setMaximized] = useState(false);

  useEffect(() => {
    // call dragelement with all dilog elements
    console.log("maximized", isMaximized);
  }, [isMaximized]);

  function maximize(event){
    setMaximized(!isMaximized);
  }

  return (
    <div className={`card ${isMaximized ? 'dialog' : ''}`} onTouchStart={() => setMaximized(!isMaximized)}>
      <div className='title'>
        <button onClick={() => onClose(note)} className='traffic' style={{backgroundColor: "#ff454a"}}>x</button>
        <button className='traffic' style={{backgroundColor: "#fec230"}}>-</button>
        <button onClick={maximize} className='traffic' style={{backgroundColor: "#30d33d"}}>+</button>
        <a>{note.title}</a>
      </div>
      <div className='content'>{note.content}</div>
    </div>
  )
}


const NoteDialog = ({onClose,onAdd}) => {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  return (
    <div className='dialog' >
      <div className='title'>
        <button onClick={() => onClose()} className='traffic' style={{backgroundColor: "#ff454a"}}>x</button>
        <button className='traffic' style={{backgroundColor: "#fec230"}}>-</button>
        <button className='traffic' ></button>
        <a>New Note</a>
      </div>
      <div className='content'>
        <input className='entry' type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className='entry' placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} />
        <div className='Bottom'>
          <button className='btn primary' onClick={() => onAdd({title,content})}>Save</button>
          <button className='btn' onClick={() => onClose()}>Cancel</button>
        </div>
      </div>
    </div>
  )
}



export default App;

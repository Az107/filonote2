import React, { useEffect, useState } from "react";


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
      <div className='footer'>
        <button className='btn primary' onClick={() => onAdd({title,content})}>Save</button>
        <button className='btn' onClick={() => onClose()}>Cancel</button>
      </div>
    </div>
  </div>
  )
}

  export default NoteDialog;
import React, { useEffect, useState } from "react";
import { Note } from "../Types";


interface Props {
  onClose: ()=>any,
  onAdd: (note:Note)=>any
}

const NoteDialog : React.FC<Props> = (Props) => {

    const {onClose,onAdd} = Props;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  
  
return (
  <div className='dialog' >
    <div className='title'>
      <button onClick={() => onClose()} className='traffic' style={{backgroundColor: "#ff454a"}}>x</button>
      <button className='traffic' style={{backgroundColor: "#fec230"}}>-</button>
      <button className='traffic' >[]</button>
      <a>New Note</a>
    </div>
    <div className='content'>
      <input className='entry' type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className='entry' placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} />
      <div className='footer'>
        <button className='btn btn-primary' onClick={() => onAdd({
          title, content,
          id: 0
        })}>Save</button>
        <button className='btn' onClick={() => onClose()}>Cancel</button>
      </div>
    </div>
  </div>
  )
}

  export default NoteDialog;
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
  
  const isDisabled = () => {
      const isTitleEmpty = title === "";
      const isContentEmpty = content === "";

      return isContentEmpty && isTitleEmpty;

  }

return (
  <div className='dialog' >
    <div className='title'>
      <button onClick={() => onClose()} className='traffic traffic-red' >x</button>
      <button className='traffic traffic-yellow' >-</button>
      <button className='traffic traffic-green' >[]</button>
      <a>New Note</a>
    </div>
    <div className='content'>
      <input className='entry' type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className='entry' placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} />
      <div className='footer'>
        <button disabled={isDisabled()} className={`btn btn-primary ${isDisabled() ? "btn-disabled" : ""}`} onClick={() => onAdd({
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
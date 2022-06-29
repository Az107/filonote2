import React, { useEffect, useState } from "react";

const Note = ({note,onClose}) => {

    const [isMaximized, setMaximized] = useState(false);

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
    );
}

export default Note;
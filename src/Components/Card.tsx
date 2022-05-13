import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import { Note } from "../Types";

interface Props {
    note: Note,
    onClose: (note:Note)=>any
}

const Card : React.FC<Props>  = (props) => {

    const {note,onClose} = props;
    const [isMaximized, setMaximized] = useState(false);

    function maximize(event: any){
        setMaximized(!isMaximized);
    }

    return (
        <>
            <div className={`card ${isMaximized ? 'card-selected' : ''}`} onTouchStart={() => setMaximized(!isMaximized)}>
            <div className='title'>
                <button onClick={() => onClose(note)} className='traffic' style={{backgroundColor: "#ff454a"}}>x</button>
                <button className='traffic' style={{backgroundColor: "#fec230"}}>-</button>
                <button onClick={maximize} className='traffic' style={{backgroundColor: "#30d33d"}}>[]</button>
                <a>{note.title}</a>
            </div>
            <div className='content' >{note.content} </div>
            </div>
            {
                isMaximized 
                ? <button className='btn btn-delete' onClick={() => onClose(note)}>Delete</button>
                : <></>
            }

            {
                isMaximized
                ? <div className="background-blur" ></div>
                : <></>
            }
        </>

    );
}

export default Card;
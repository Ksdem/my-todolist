import React, {useEffect, useRef, useState} from 'react';


function NewTodo() {
const [block, setBlock]=useState("a")
const [text, setText]=useState("")
    return <div className="form">
        <input value={text} onChange={event => setText(event.target.value)} />
        <div className="button">
            <button >add</button>
        </div>
    </div>
}

export default NewTodo;

import React, {useEffect, useRef, useState} from 'react';


function NewTodo() {
const [block, setBlock]=useState(["a","b"])
const [text, setText]=useState("")
    return <div className="form">
        <input value={text} onChange={event => setText(event.target.value)} />

        <div className="button">
            <button onClick={()=>{
                setBlock([...block,text])
            }}>add</button>
            <div>
                {block.map((i=>(<div>{i}</div>)))}
            </div>
        </div>
    </div>
}

export default NewTodo;

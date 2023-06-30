import React, {useState} from 'react';


type textType={

}

function Block(props:textType) {
    const [inputOne, setInputOne]=useState('')
    const [text, setText]=useState('')
    const changeText=(event:any)=>{
        setInputOne(event.target.value)
    }
let onClickText=()=>{

}

    return (
        <div className="block">
            <div>Bar</div>
            <div>Block</div>
            <div className="block-input">
                <input type="text" value={inputOne} onChange={changeText}/>
                <button onClick={onClickText}>add</button>
            </div>
        </div>
    )
}

export default Block;

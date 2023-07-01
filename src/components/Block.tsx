import React, {useState} from 'react';


type textType = {
    id: number,
    nameBlock: string,
    counter:number
}

function Block(props: textType) {


    const [counter, setCounter]=useState(1)

    const handlerClick = (event:any) => {
      setCounter(counter+1)
    }
    const handlerMouseEnter = (event:any) => {
        console.log("handlerMouseEnter")
    }
    return (
        <div className="block">
            <div>Bar</div>
            <div>Block</div>
            <div className="block-input">
                <input type="text"  />
                <button title="add" onClick={handlerClick} onMouseEnter={handlerMouseEnter}>add {counter} раз</button>
            </div>
        </div>
    )
}

export default Block;

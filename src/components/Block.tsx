import React, {useRef, useState} from 'react';


type textType = {
    id: number,
    nameBlock: string,

}

function Block(props: textType) {


    const [firstName, setFirstName] = useState('');
    const [items, setItems] = useState(['a', 'b']);
    const nameField = useRef<HTMLInputElement>(null);


    const onSetCounter = () => {
        setItems(prevState => {
            return [...prevState, firstName]
        })
        setFirstName("");
       if(nameField && nameField.current)
           nameField.current.focus();
    }



    return (
        <div className="block">
           {/* <div>Bar</div>
            <div>Block</div>*/}
            {items.map((value, index) => {
                return <div key={index}>{value}</div>
            })}
            <div className="block-input">
                <input placeholder="enter your text" ref={nameField} value={firstName} onChange={e => setFirstName(e.target.value)}/>

                <button onClick={onSetCounter}>add
                </button>

            </div>


        </div>
    )
}

export default Block;

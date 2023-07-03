import React, {useEffect, useRef, useState} from 'react';


function Block() {


    const [firstName, setFirstName] = useState('');
    const [items, setItems] = useState(['a', 'b']);
    const nameField = useRef<HTMLInputElement>(null);


    useEffect(() => {
        const newItems = localStorage.getItem('items');
        if (newItems) {
            setItems(JSON.parse(newItems))
        }
    }, []);

    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(items));
    // }, [items]);


    const onSetCounter = () => {
        setItems(prevState => {
            const newArray =  [...prevState, firstName];
            localStorage.setItem('items', JSON.stringify(newArray));
            return newArray;
        })
        setFirstName("");
        if (nameField && nameField.current)
            nameField.current.focus();

    }


    return (
        <div className="block">

            {items.map((value, index) => {
                return <div key={index}>{value}</div>
            })}
            <div className="block-input">
                <input placeholder="enter your text" ref={nameField} value={firstName}
                       onChange={e => setFirstName(e.target.value)}/>

                <button onClick={onSetCounter}>add
                </button>

            </div>


        </div>
    )
}

export default Block;

import React from 'react';

import './App.scss';
import Block from "./components/Block";

function App() {
    return (
        <div className="App">
            <div>
                <Block id={1} nameBlock={"hello"}/>
            </div>
        </div>
    );
}

export default App;

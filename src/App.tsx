import React from 'react';

import './App.scss';

import NewTodo from "./components/NewTodo";

function App() {
    return (
        <div className="App">
            <div>
               {/* <Block />*/}
                <NewTodo/>
            </div>
        </div>
    );
}

export default App;

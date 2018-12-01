import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

var First = () =>{
    return (
    <div>
        <Header/>
        <h1>This is your first React app</h1>
    </div>
    )
}

ReactDOM.render(<First/>,document.querySelector("#root"))

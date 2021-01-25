// Import React and ReactDOM 
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => {
    const buttonText = 'SUBMIT';
    const labelText = 'ENTER NAME';
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
        </div >
    )
}

// Render React Component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
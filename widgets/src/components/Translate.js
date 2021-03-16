import React, { useState } from 'react';

import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
];

const Translate = () => {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState(options[0]);

    return (
        <div>
            <div className="ui form">
                <div className="ui field">
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                label={'Select a language'}
            />
            <hr></hr>
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text} />
        </div>
    );
};

export default Translate;

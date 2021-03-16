import React, { useState, useEffect } from 'react';

import Axios from 'axios';

const {
    REACT_APP_APIS_GOOGLE_TRANSLATE,
    REACT_APP_APIS_GOOGLE_TRANSLATE_KEY,
} = process.env;

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    }, [text]);

    useEffect(() => {
        (async () => {
            const { data } = await Axios.post(
                REACT_APP_APIS_GOOGLE_TRANSLATE,
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: REACT_APP_APIS_GOOGLE_TRANSLATE_KEY,
                    },
                },
            );

            setTranslated(data.data.translations[0].translatedText);
        })();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;

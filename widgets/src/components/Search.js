import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('JavaScript');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedTerm(term);
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    }, [term]);

    useEffect(() => {
        (async () => {
            if (!debouncedTerm) {
                return;
            }

            const { data } = await Axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debouncedTerm,
                    },
                },
            );

            setResults(data.query.search);
        })();
    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="title">{result.title}</div>
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                </div>
            </div>
        );
    });
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search Wikipedia</label>
                    <input
                        className="input"
                        value={term}
                        onChange={(e) => {
                            setTerm(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;

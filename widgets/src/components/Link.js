import React from 'react';

const Link = ({ href, className, children }) => {
    const onClick = (evt) => {
        if (evt.metaKey || evt.ctrlKey) {
            return;
        }

        evt.preventDefault();

        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a href={href} className={className} onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;

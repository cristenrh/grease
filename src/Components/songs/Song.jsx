

import React from 'react';

const Song = ({song, singers}) => {
    return (
        <section>
        <p>{song}</p>
        <span>..............................................................................................................................................................</span>
        <p>{singers}</p>
        </section>
    )
};

export default Song;
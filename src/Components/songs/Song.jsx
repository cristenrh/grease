

import React from 'react';

const Song = ({song, singers, scene}) => {
    return (
        <section>
        <p className="scene">{scene}</p>
        <p className="song">{song}</p>
        <span>..............................................................................................................................................................</span>
        <p className="singer">{singers}</p>
        </section>
    )
};

export default Song;
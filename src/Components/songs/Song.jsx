

import React from 'react';

const Song = ({song, singers, scene}) => {
    return (
      
      <div>
            <p className="scene">{scene}</p>
        <section>
            <p className="song">{song}</p>
            <span>..............................................................................................................................................................</span>
            <p className="singer">{singers}</p>
        </section>
    </div>
    )
};

export default Song;
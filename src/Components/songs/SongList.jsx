import React from 'react';
import Song  from './Song';

const SongList = ({ songs }) => {
    return(
        <div className="songs">
            {
            songs.map((user, i) => {
                return (
                <Song
                    key={i} 
                    scene={songs[i].scene} 
                    song={songs[i].song} 
                    singers={songs[i].singers} 
                    
                />
            );
        })
    }
    </div>
    );
    }

export default SongList;
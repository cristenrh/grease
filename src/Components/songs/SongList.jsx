import React from 'react';
import Song  from './Song';

const SongList = ({ songs }) => {
    return(
        <div className="songs">
            {
            songs.map((user, i) => {
                return (
                <Song
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
import React from 'react';
import Photos  from './Photo';

const PhotoList = ({ photo }) => {
    return(
        <div className="photoMembers">
            {
            photo.map((user, i) => {
                return (
                <photoMember
                    key={i} 
                    image={photo[i].image}
                    caption={photo[i].caption}
            
                />
            );
        })
    }
    </div>
    );
    }

export default PhotoList;
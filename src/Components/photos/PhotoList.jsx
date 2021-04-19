import React from 'react';
import Photos  from './Photo';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const PhotoList = ({ photo }) => {
    return(     
        <div className="photoMembers">
    <AliceCarousel items={photo }>
       
            {
            photo.map((user, i) => {
                return (
                <Photos
                    key={i} 
                    image={photo[i].image}
                    caption={photo[i].caption}
                />
                 );
                })
            }
     
        </AliceCarousel>
        </div>
    );
    }

export default PhotoList;
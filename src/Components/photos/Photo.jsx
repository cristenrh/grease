import React from 'react';

const Photos = ({image, caption}) => {
    return (
 <img src ={`https://raw.githubusercontent.com/cristenrh/grease/master/public/images/${image}`} className="sliderimg" alt = {`${caption}`}/>
    )
};

export default Photos;
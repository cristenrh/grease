

import React from 'react';
import { Link } from 'react-scroll';

const castMember = ({name, name2, role}) => {
    
    return (
        <section>
        <p>{role}</p>
        <span>..............................................................................................................................................................</span>
        <p> <Link to={name} offset={-100} smooth={true} duration={1000} >{name}</Link> 
        {!!(name2)?" / ":""}
        <Link to={name2} smooth={true} duration={1000} >{name2}</Link></p>
        </section>
    )
};

export default castMember;
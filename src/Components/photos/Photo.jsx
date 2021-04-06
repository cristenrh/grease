import React from 'react';
import { Link } from 'react-scroll';

const crewMember = ({name, name2, name3, role}) => {
    return (
        <section>
        <p>{role}</p>
        <span>..............................................................................................................................................................</span>
        <p> <Link to={name} offset={-100} smooth={true} duration={1000} >{name}</Link>
        {!!(name2)?", ":""}
        <Link to={name2} smooth={true} duration={1000} >{name2}</Link>
         {!!(name3)?", ":""}
         <Link to={name3} smooth={true} duration={1000} >{name3}</Link></p>
        </section>
    )
};

export default crewMember;
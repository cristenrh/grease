import React from 'react';
import { Link } from 'react-scroll';

const crewMember = ({name, role}) => {
    const nameList = name.map((link) => 
    <Link to={link} offset={-100} smooth={true} duration={1000} key={link} >{link}</Link>            
    );
return (
    <section>
    <p>{role}</p>
    <span>..............................................................................................................................................................</span>
    <p> 
        { nameList }
    </p>
    </section>
)
};

export default crewMember;